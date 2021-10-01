export function formatDate(date) {
  var displayDate = new Date(date);
  var month = displayDate.toLocaleString("es", { month: "long" });
  var year = displayDate.toLocaleString("es", { year: "numeric" });
  var day = displayDate.toLocaleString("es", { day: "numeric" });
  return `${day} ${month} ${year}`;
}
