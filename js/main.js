document.addEventListener("DOMContentLoaded", () => {
  // ===== IDIOMAS: PT/EN =====
  const translations = {"✨ Agende seu horário e cuide de você — atendimento com hora marcada": "✨ Book your appointment and take care of yourself — by appointment only", "Início": "Home", "Serviços": "Services", "Sobre": "About", "Galeria": "Gallery", "Avaliações": "Reviews", "Contato": "Contact", "Agendar": "Book now", "Sakura Cabelo e Estética": "Sakura Hair & Beauty", "Realce a sua beleza.": "Enhance your beauty.", "Um espaço pensado para você desacelerar, se cuidar e sair ainda mais confiante. Cabelo, estética e experiências de beleza em um só lugar.": "A space designed for you to slow down, take care of yourself and leave feeling even more confident. Hair, beauty and self-care experiences all in one place.", "Agendar meu horário →": "Book my appointment →", "Conhecer serviços": "Explore our services", "Por que escolher a Sakura?": "Why choose Sakura?", "Mais que um salão. Um momento para você.": "More than a salon. A moment just for you.", "Atendimento personalizado": "Personalized service", "Cada serviço é adaptado ao seu estilo e às suas necessidades.": "Every service is tailored to your style and needs.", "Cuidado em cada detalhe": "Care in every detail", "Ambiente confortável, produtos selecionados e muita atenção.": "A comfortable environment, selected products and plenty of care.", "Beleza com propósito": "Beauty with purpose", "Resultados que valorizam sua beleza e sua autoestima.": "Results that enhance your beauty and self-confidence.", "Pronta para o seu momento Sakura?": "Ready for your Sakura moment?", "Escolha seu serviço e reserve seu horário.": "Choose your service and book your appointment.", "Agendar agora": "Book now", "Cabelo, estética e autocuidado com carinho em cada detalhe.": "Hair, beauty and self-care with care in every detail.", "Menu": "Menu", "Atendimento": "Hours", "Segunda a sexta": "Monday to Friday", "Sábado": "Saturday", "Todos os direitos reservados.": "All rights reserved.", "Solicitação recebida! Agora é só confirmar o horário com a equipe. 💗": "Request received! Now just confirm the appointment with our team. 💗", "Experiências reais": "Real experiences", "O que nossas clientes dizem": "What our clients say", "Depoimentos demonstrativos — substitua pelos depoimentos reais das clientes.": "Sample testimonials — replace them with real client testimonials.", "“Atendimento maravilhoso! Saí me sentindo outra pessoa. O cuidado em cada detalhe faz muita diferença.”": "“Wonderful service! I left feeling like a completely different person. The care in every detail makes all the difference.”", "“O resultado ficou exatamente como eu queria. A equipe explica tudo e deixa a gente muito à vontade.”": "“The result was exactly what I wanted. The team explains everything and makes you feel completely comfortable.”", "“Ambiente lindo, atendimento impecável e profissionais muito caprichosos. Já virei cliente fiel!”": "“Beautiful environment, impeccable service and very attentive professionals. I’m already a loyal client!”", "Dúvidas": "Questions", "Perguntas frequentes": "Frequently asked questions", "Preciso agendar com antecedência?": "Do I need to book in advance?", "Recomendamos o agendamento, principalmente para serviços longos.": "We recommend booking in advance, especially for longer services.", "Os valores são fixos?": "Are the prices fixed?", "Alguns serviços possuem valor inicial; técnicas podem variar conforme avaliação.": "Some services have starting prices; techniques may vary after evaluation.", "Posso combinar vários serviços?": "Can I combine multiple services?", "Sim. Podemos montar um pacote personalizado.": "Yes. We can create a personalized package.", "Como remarcar?": "How can I reschedule?", "Entre em contato pelo WhatsApp para verificar uma nova disponibilidade.": "Contact us via WhatsApp to check for a new availability.", "Fale com a Sakura": "Talk to Sakura", "Agende seu momento.": "Book your moment.", "Preencha o formulário e nossa equipe poderá confirmar o melhor horário para você.": "Fill out the form and our team can confirm the best time for you.", "Estamos esperando por você.": "We’re waiting for you.", "Telefone": "Phone", "Endereço": "Address", "Seu endereço aqui — Americana/SP": "Your address here — Americana/SP", "Horário": "Hours", "Nome": "Name", "WhatsApp": "WhatsApp", "Seu nome": "Your name", "Serviço": "Service", "Selecione": "Select", "Corte feminino": "Women's haircut", "Escova": "Blowout", "Coloração": "Coloring", "Mechas / iluminação": "Highlights / balayage", "Hidratação": "Hair treatment", "Limpeza de pele": "Facial cleansing", "Sobrancelhas": "Eyebrows", "Manicure": "Manicure", "Pedicure": "Pedicure", "Data": "Date", "Período": "Time of day", "Manhã": "Morning", "Início da tarde": "Early afternoon", "Final da tarde": "Late afternoon", "Observações": "Notes", "Alguma observação?": "Any notes?", "Solicitar agendamento": "Request appointment", "O horário será confirmado após o contato da equipe.": "The appointment time will be confirmed after our team contacts you.", "Inspire-se": "Get inspired", "Galeria Sakura": "Sakura Gallery", "Área preparada para receber fotos reais dos trabalhos, espaço e resultados do salão.": "A space prepared to showcase real photos of our work, the salon and its results.", "Foto destaque": "Featured photo", "Cabelos": "Hair", "Estética": "Beauty", "Unhas": "Nails", "Ambiente": "Salon", "Nossa essência": "Our essence", "Sobre a Sakura": "About Sakura", "Beleza, acolhimento e cuidado em cada detalhe.": "Beauty, warmth and care in every detail.", "Nossa história": "Our story", "Beleza que começa no cuidado.": "Beauty begins with care.", "A Sakura foi criada para ser um espaço onde beleza e acolhimento caminham juntos. A proposta é oferecer serviços personalizados em um ambiente leve, elegante e confortável.": "Sakura was created as a space where beauty and warmth go hand in hand. Our goal is to offer personalized services in a light, elegant and comfortable environment.", "Mais do que transformar cabelos, unhas ou pele, queremos que cada cliente saia se sentindo bem consigo mesma.": "More than transforming hair, nails or skin, we want every client to leave feeling good about themselves.", "Equipe especializada": "Specialized team", "Atendimento com hora marcada": "By appointment", "Avaliação personalizada": "Personalized consultation", "Ambiente acolhedor": "Welcoming environment", "15+ anos de história": "15+ years of history", "1.000+ atendimentos": "1,000+ appointments", "4.9 nota média": "4.9 average rating", "Menu de beleza": "Beauty menu", "Nossos serviços": "Our services", "Confira os principais serviços. Valores iniciais e sujeitos a avaliação conforme comprimento, técnica e necessidade.": "Check out our main services. Starting prices are subject to evaluation according to length, technique and individual needs.", "Todos": "All", "Cabelo": "Hair", "Corte + finalização": "Cut + finishing", "a partir de R$ 80": "from R$ 80", "Finalização e modelagem": "Finishing and styling", "a partir de R$ 60": "from R$ 60", "Cor personalizada": "Custom color", "sob consulta": "upon consultation", "Técnica personalizada": "Customized technique", "Tratamento nutritivo": "Nourishing treatment", "a partir de R$ 70": "from R$ 70", "Protocolo facial": "Facial protocol", "a partir de R$ 120": "from R$ 120", "Design e acabamento": "Design and finishing", "a partir de R$ 35": "from R$ 35", "Cutilagem + esmaltação": "Cuticle care + polish", "Cuidado completo": "Complete care", "a partir de R$ 45": "from R$ 45"};
  const htmlTranslations = {"Realce a sua <span>beleza.</span>": "Enhance your <span>beauty.</span>", "Mais que um salão. <span>Um momento para você.</span>": "More than a salon. <span>A moment just for you.</span>", "Pronta para o seu <span>momento Sakura?</span>": "Ready for your <span>Sakura moment?</span>", "Agende seu <span>momento.</span>": "Book your <span>moment.</span>", "Estamos esperando <span>por você.</span>": "We’re waiting <span>for you.</span>", "Beleza que começa no <span>cuidado.</span>": "Beauty begins with <span>care.</span>", "Nossos <span>serviços</span>": "Our <span>services</span>", "Sobre a <span>Sakura</span>": "About <span>Sakura</span>", "Galeria <span>Sakura</span>": "Sakura <span>Gallery</span>", "O que nossas <span>clientes</span> dizem": "What our <span>clients</span> say", "Perguntas <span>frequentes</span>": "Frequently <span>asked questions</span>", "15+<span>anos de história</span>": "15+ <span>years of history</span>", "1.000+<span>atendimentos</span>": "1,000+ <span>appointments</span>", "4.9<span>nota média</span>": "4.9 <span>average rating</span>", "Pronta para o seu <span style=\"color:#fff\">momento Sakura?</span>": "Ready for your Sakura moment?", "<b>15+</b><span>anos de história</span>": "15+ years of history", "<b>1.000+</b><span>atendimentos</span>": "1,000+ appointments", "<b>4.9</b><span>nota média</span>": "4.9 average rating"};

  function saveLanguage(lang) {
    try { localStorage.setItem("sakuraLanguage", lang); } catch (e) { /* file:// may restrict storage */ }
  }

  function getSavedLanguage() {
    try { return localStorage.getItem("sakuraLanguage") || "pt"; } catch (e) { return "pt"; }
  }

  function translate(lang) {
    const isEnglish = lang === "en";
    document.documentElement.lang = isEnglish ? "en" : "pt-BR";
    saveLanguage(lang);

    // Textos simples
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (!(key in translations)) return;
      const value = isEnglish ? translations[key] : key;

      // Labels com input/select/textarea: troca somente o texto direto do label.
      if (el.matches("label") && el.querySelector("input, select, textarea")) {
        const textNodes = Array.from(el.childNodes).filter(n => n.nodeType === Node.TEXT_NODE);
        if (textNodes.length) textNodes[0].nodeValue = value;
        return;
      }
      el.textContent = value;
    });

    // Textos que possuem <span>, <b>, etc. — preserva a formatação original.
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.dataset.i18nHtml;
      const value = isEnglish ? (htmlTranslations[key] || key) : key;
      el.innerHTML = value;
    });

    // Placeholders
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
      if (!el.dataset.placeholderPt) el.dataset.placeholderPt = el.getAttribute("placeholder");
      const pt = el.dataset.placeholderPt;
      const en = { "Seu nome":"Your name", "Alguma observação?":"Any notes?" };
      el.setAttribute("placeholder", isEnglish ? (en[pt] || pt) : pt);
    });

    // Selects: mantém os valores internos e traduz somente o texto visível.
    document.querySelectorAll("select option[data-i18n]").forEach(opt => {
      const key = opt.dataset.i18n;
      if (key in translations) opt.textContent = isEnglish ? translations[key] : key;
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    const title = document.querySelector("title");
    if (title) {
      const ptTitle = title.dataset.ptTitle || title.textContent;
      title.dataset.ptTitle = ptTitle;
      title.textContent = isEnglish
        ? ptTitle.replace("Sakura Cabelo e Estética", "Sakura Hair & Beauty").replace("Contato", "Contact").replace("Serviços", "Services").replace("Sobre", "About").replace("Galeria", "Gallery").replace("Avaliações", "Reviews")
        : ptTitle;
    }
  }

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => translate(btn.dataset.lang));
  });

  translate(getSavedLanguage());

  // ===== MENU MOBILE =====
  const menu = document.querySelector(".menu"), links = document.querySelector(".nav-links");
  if (menu) menu.addEventListener("click", () => links.classList.toggle("open"));
  document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

  // ===== FILTROS DE SERVIÇOS =====
  const filters = document.querySelectorAll(".filter"), services = document.querySelectorAll(".service");
  filters.forEach(btn => btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active")); btn.classList.add("active");
    const cat = btn.dataset.filter;
    services.forEach(s => s.style.display = (cat === "todos" || s.dataset.category === cat) ? "flex" : "none");
  }));

  const date = document.querySelector('input[type="date"]');
  if (date) date.min = new Date().toISOString().split("T")[0];

  const form = document.querySelector("#bookingForm");
  if (form) form.addEventListener("submit", e => {
    e.preventDefault();
    const d = new FormData(form);
    const msg = `Olá, Sakura! Meu nome é ${d.get("nome")}. Gostaria de solicitar um agendamento para ${d.get("servico")} no dia ${d.get("data")}. Período: ${d.get("horario")}. Observações: ${d.get("obs") || "nenhuma"}`;
    const number = "5519999999999"; // TROQUE pelo WhatsApp real
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`, "_blank");
    const toast = document.querySelector(".toast"); if (toast) { toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 3500) }
    form.reset(); if (date) date.min = new Date().toISOString().split("T")[0];
  });
});

/* Sakura Admin: dados editáveis */

// ===== DADOS EDITÁVEIS PELO PAINEL ADMINISTRATIVO =====
(function(){
  try{
    const d=JSON.parse(localStorage.getItem('sakuraSiteData')||'null');
    if(!d)return;
    document.querySelectorAll('[data-admin-field]').forEach(el=>{
      const k=el.dataset.adminField;
      if(d[k]!=null)el.textContent=d[k];
    });
    document.querySelectorAll('[data-admin-href]').forEach(el=>{
      const k=el.dataset.adminHref;
      if(d[k]){
        let value=d[k];
        if(k==='whatsapp' && !/^https?:\/\//i.test(value)) value='https://wa.me/'+value.replace(/\D/g,'');
        el.href=value;
      }
    });
    const hours=document.querySelectorAll('[data-admin-hours]');
    hours.forEach(el=>{
      const day=el.dataset.adminHours;
      if(day==='week')el.textContent=(d.weekOpen||'09:00')+'h – '+(d.weekClose||'19:00')+'h';
      if(day==='sat')el.textContent=(d.satOpen||'09:00')+'h – '+(d.satClose||'17:00')+'h';
    });
  }catch(e){console.warn('Dados do painel não puderam ser carregados.',e)}
})();
