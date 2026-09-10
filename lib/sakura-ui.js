
/* Sakura Local UI Library
   Small helpers used by the pages. No external CDN is required. */
window.SakuraUI = {
  todayISO() { return new Date().toISOString().split("T")[0]; },
  whatsapp(number, message) {
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank");
  }
};
