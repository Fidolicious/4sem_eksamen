document.addEventListener("DOMContentLoaded", function() {
  const yearSelect = document.getElementById("year");
  const monthSelect = document.getElementById("month");
  const daySelect = document.getElementById("day");
  const errorElement = document.getElementById("error");
  
  const months = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'];

  (function populateMonths() {
    for (let i = 0; i < months.length; i++) {
      const option = document.createElement('option');
      option.textContent = months[i];
      monthSelect.appendChild(option);
    }
    monthSelect.value = "Januar";
  })();

  let previousDay;

  function populateDays(month) {
    while (daySelect.firstChild) {
      daySelect.removeChild(daySelect.firstChild);
    }
    
    let dayNum;
    let year = yearSelect.value;

    if (month === 'Januar' || month === 'Marts' || month === 'Maj' || month === 'Juli' || month === 'August' || month === 'Oktober' || month === 'December') {
      dayNum = 31;
    } else if (month === 'April' || month === 'Juni' || month === 'September' || month === 'November') {
      dayNum = 30;
    } else {
      if (new Date(year, 1, 29).getMonth() === 1) {
        dayNum = 29;
      } else {
        dayNum = 28;
      }
    }

    for (let i = 1; i <= dayNum; i++) {
      const option = document.createElement("option");
      option.textContent = i;
      daySelect.appendChild(option);
    }
    
    if (previousDay) {
      daySelect.value = previousDay;
      
      if (daySelect.value === "") {
        daySelect.value = previousDay - 1;
      }
      if (daySelect.value === "") {
        daySelect.value = previousDay - 2;
      }
      if (daySelect.value === "") {
        daySelect.value = previousDay - 3;
      }
    }
  }

  function populateYears() {
    let year = new Date().getFullYear();

    for (let i = 0; i < 101; i++) {
      const option = document.createElement("option");
      option.textContent = year - i;
      yearSelect.appendChild(option);
    }
    yearSelect.value = year;
  }

  populateDays(monthSelect.value);
  populateYears();

  yearSelect.onchange = function () {
    const selectedYear = parseInt(yearSelect.value);
    const selectedMonth = monthSelect.value;
    const selectedDay = daySelect.value;

    const currentDate = new Date();
    const minimumDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());

    const selectedDate = new Date(selectedYear, months.indexOf(selectedMonth), selectedDay);

    if (selectedDate > minimumDate) {
      errorElement.textContent = "Du skal være mindst 18 år gammel.";
    } else {
      errorElement.textContent = "";
    }

    populateDays(monthSelect.value);
  };

  monthSelect.onchange = function () {
    const selectedYear = parseInt(yearSelect.value);
    const selectedMonth = monthSelect.value;
    const selectedDay = daySelect.value;

    const currentDate = new Date();
    const minimumDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());

    const selectedDate = new Date(selectedYear, months.indexOf(selectedMonth), selectedDay);

    if (selectedDate > minimumDate) {
      errorElement.textContent = "Du skal være mindst 18 år gammel.";
    } else {
      errorElement.textContent = "";
    }

    populateDays(monthSelect.value);
  };

  daySelect.onchange = function () {
    const selectedYear = parseInt(yearSelect.value);
    const selectedMonth = monthSelect.value;
    const selectedDay = daySelect.value;

    const currentDate = new Date();
    const minimumDate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());

    const selectedDate = new Date(selectedYear, months.indexOf(selectedMonth), selectedDay);

    if (selectedDate > minimumDate) {
      errorElement.textContent = "Du skal være mindst 18 år gammel.";
    } else {
      errorElement.textContent = "";
    }
  };
});
