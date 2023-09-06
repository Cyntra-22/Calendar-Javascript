const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const calendarContainer = document.getElementById("calendar-container");
const prevMonthButton = document.getElementById("prev-month-btn");
const nextMonthButton = document.getElementById("next-month-btn");

const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let currentMonthIndex = 0;

function showMonthOf2023(monthIndex) {
  const currentYear = 2023;
  const daysInMonth = daysOfMonth[monthIndex];
  const monthName = monthNames[monthIndex];

  calendarContainer.innerHTML = "";

  const header = document.createElement("h2");
  header.textContent = `${monthName} ${currentYear}`;
  calendarContainer.appendChild(header);

  const table = document.createElement("table");
  table.classList.add("calendar-table");

  const headerRow = document.createElement("tr");
  for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
    const th = document.createElement("th");
    th.textContent = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
      dayOfWeek
    ];
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  const firstDay = new Date(currentYear, monthIndex, 1).getDay();

  let currentDate = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");
      if (j === 0) {
        cell.style.color = "red";
      }
      if (i === 0 && j < firstDay) {
        cell.textContent = "";
      } else if (currentDate <= daysInMonth) {
        cell.textContent = currentDate;
        currentDate++;
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  calendarContainer.appendChild(table);
}

showMonthOf2023(currentMonthIndex);

prevMonthButton.addEventListener("click", () => {
  if (currentMonthIndex > 0) {
    currentMonthIndex--;
    showMonthOf2023(currentMonthIndex);
  }
});

nextMonthButton.addEventListener("click", () => {
  if (currentMonthIndex < 11) {
    currentMonthIndex++;
    showMonthOf2023(currentMonthIndex);
  }
});
