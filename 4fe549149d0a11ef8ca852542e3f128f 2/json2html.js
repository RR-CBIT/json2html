// json2html.js
export default function json2html(data) {
  // Extract all unique keys from the array of objects
  const allKeys = Array.from(new Set(data.flatMap(Object.keys)));

  // Start building the HTML table
  let html = `<table data-user="rahulreddyg9939@gmail.com">`;

  // Add the table header
  html += "<thead><tr>";
  allKeys.forEach(key => {
    html += `<th>${key}</th>`;
  });
  html += "</tr></thead>";

  // Add the table body
  html += "<tbody>";
  data.forEach(row => {
    html += "<tr>";
    allKeys.forEach(key => {
      html += `<td>${row[key] !== undefined ? row[key] : ""}</td>`;
    });
    html += "</tr>";
  });
  html += "</tbody>";

  // Close the table tag
  html += "</table>";

  return html;
}
