// Bangladeshi Currency Formatter
function formatBDT(amount) {
  return new Intl.NumberFormat("bn-BD", {
    style: "currency",
    currencyDisplay:"symbol",
    currency: "BDT",
  }).format(amount);
}

function timeAgo(date) {
  const now = Date.now();
  const diff = now - date.getTime();
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours   = Math.floor(minutes / 60);
  const days    = Math.floor(hours / 24);
  if (seconds < 60) return rtf.format(-seconds, "second");
  if (minutes < 60) return rtf.format(-minutes, "minute");
  if (hours < 24)   return rtf.format(-hours, "hour");
  return rtf.format(-days, "day");
}

function convertAndFormat(amount, from, to) {
  const rates = {
    USD: { EUR: 0.925 },
    EUR: { USD: 1.08 },
    BDT: { USD: 0.0091 },
    USD_BDT: 110
  };

  const converted = amount * (rates[from]?.[to] || 1); // default 1:1

  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "BDT",
  }).format(converted);
}

function getFullCalendarDate(date, locale) {
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    year: "2-digit",
    month: "long",
    day: "numeric"
  }).format(date);
}


//display region name

function RegoneName(locel="us",rigoneCode="BD"){
  return new Intl.DisplayNames(locel,{
    type:"region",
    style:"long"
  }).of(rigoneCode)
}



