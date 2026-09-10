const KEY='sakuraAdminAccounts';
const OLD_KEY='sakuraAdminAccount';
const msg=document.getElementById('msg');
const setup=document.getElementById('setup');
const login=document.getElementById('login');
const resetBox=document.getElementById('resetPasswordBox');

function accounts(){
  try{
    const saved=JSON.parse(localStorage.getItem(KEY));
    if(Array.isArray(saved)) return saved;
  }catch{}
  // Migração automática do cadastro antigo (um único acesso).
  try{
    const old=JSON.parse(localStorage.getItem(OLD_KEY));
    if(old?.username){
      const migrated=[{id:'admin-'+Date.now(),username:old.username,password:old.password}];
      localStorage.setItem(KEY,JSON.stringify(migrated));
      localStorage.removeItem(OLD_KEY);
      return migrated;
    }
  }catch{}
  return [];
}
function saveAccounts(list){localStorage.setItem(KEY,JSON.stringify(list));}
function showMessage(t,ok=false){
  if(!msg)return;
  msg.textContent=t;
  msg.className='message'+(ok?' ok':'');
}
function showLogin(){
  setup.classList.add('hidden');
  resetBox?.classList.add('hidden');
  login.classList.remove('hidden');
  showMessage('');
}
function showSetup(){
  login.classList.add('hidden');
  resetBox?.classList.add('hidden');
  setup.classList.remove('hidden');
  showMessage('');
}
function showReset(){
  setup.classList.add('hidden');
  login.classList.add('hidden');
  resetBox?.classList.remove('hidden');
  showMessage('');
}

if(accounts().length) showLogin();
else showSetup();

document.getElementById('setupForm').addEventListener('submit',e=>{
  e.preventDefault();
  const u=newUser.value.trim(), p=newPass.value, c=confirmPass.value;
  if(u.length<3)return showMessage('O usuário precisa ter pelo menos 3 caracteres.');
  if(p.length<6)return showMessage('A senha precisa ter pelo menos 6 caracteres.');
  if(p!==c)return showMessage('As senhas não são iguais.');
  const list=accounts();
  if(list.some(a=>a.username.toLowerCase()===u.toLowerCase()))return showMessage('Esse usuário já existe. Escolha outro.');
  list.push({id:'admin-'+Date.now()+'-'+Math.random().toString(36).slice(2,7),username:u,password:p});
  saveAccounts(list);
  document.getElementById('setupForm').reset();
  showLogin();
  showMessage('Novo acesso criado com sucesso. Os acessos anteriores foram mantidos.',true);
});

document.getElementById('loginForm').addEventListener('submit',e=>{
  e.preventDefault();
  const a=accounts().find(x=>x.username===user.value.trim()&&x.password===pass.value);
  if(a){
    sessionStorage.setItem('sakuraAdminLogged','1');
    sessionStorage.setItem('sakuraAdminUser',a.username);
    location.href='painel.html';
  }else showMessage('Usuário ou senha incorretos.');
});

document.getElementById('forgot').addEventListener('click',()=>showReset());
document.getElementById('resetPasswordLink').addEventListener('click',()=>showReset());
document.getElementById('backLogin').addEventListener('click',()=>showLogin());

document.getElementById('resetPasswordForm').addEventListener('submit',e=>{
  e.preventDefault();
  const username=document.getElementById('resetUser').value.trim();
  const p=document.getElementById('resetNewPass').value;
  const c=document.getElementById('resetConfirmPass').value;
  const list=accounts();
  const a=list.find(x=>x.username.toLowerCase()===username.toLowerCase());
  if(!a)return showMessage('Usuário não encontrado.');
  if(p.length<6)return showMessage('A senha precisa ter pelo menos 6 caracteres.');
  if(p!==c)return showMessage('As senhas não são iguais.');
  a.password=p;
  saveAccounts(list);
  document.getElementById('resetPasswordForm').reset();
  showLogin();
  showMessage('Senha redefinida com sucesso. Agora você já pode entrar com a nova senha.',true);
});
