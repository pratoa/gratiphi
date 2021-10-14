export function formatDate(date, language) {
  var displayDate = new Date(date);
  var month = displayDate.toLocaleString(language, { month: "long" });
  var year = displayDate.toLocaleString(language, { year: "numeric" });
  var day = displayDate.toLocaleString(language, { day: "numeric" });
  return `${day} ${month} ${year}`;
}
