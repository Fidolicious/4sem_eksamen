document.addEventListener("DOMContentLoaded", function() {
  // skaber reference til drop til dropdown
  const yearSelect = document.getElementById("year");
  const monthSelect = document.getElementById("month");
  const daySelect = document.getElementById("day");
  const errorMessage = document.getElementById("errorMessage");
  const months = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'];

  // Månederne er altid det samme
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
    // sletter alle "children" fra dage og dropdown hvis disse eksistere 
    while (daySelect.firstChild) {
      daySelect.removeChild(daySelect.firstChild);
    }

    // Antallet af dage pr måned
    let dayNum;
    // Hent nuværende år
    let year = yearSelect.value;

    if (month === 'Januar' || month === 'Marts' || month === 'Maj' || month === 'Juli' || month === 'August' || month === 'Oktober' || month === 'December') {
      dayNum = 31;
    } else if (month === 'April' || month === 'Juni' || month === 'September' || month === 'November') {
      dayNum = 30;
    } else {
      // Check for skudår
      if (new Date(year, 1, 29).getMonth() === 1) {
        dayNum = 29;
      } else {
        dayNum = 28;
      }
    }
    // indsætter korrekte dage i day feltet
    for (let i = 1; i <= dayNum; i++) {
      const option = document.createElement("option");
      option.textContent = i;
      daySelect.appendChild(option);
    }

    // Sæt den valgte dag imens værdien bevares hvis den eksistere
    if (previousDay) {
      if (previousDay <= dayNum) {
        daySelect.value = previousDay;
      } else {
        daySelect.value = "";
      }
    }
  }

  function populateYears() {
    // Hent det nuværende år som tal
    let year = new Date().getFullYear();

    // Lad de forrige 100 år være en mulighed, så alle aldre er mulige
    for (let i = 0; i < 101; i++) {
      const option = document.createElement("option");
      option.textContent = year - i;
      yearSelect.appendChild(option);
    }

    yearSelect.value = year; // Sæt grundværdien for året

    // Skriv fejlmeldingen når året
    yearSelect.onchange = function() {
      if (yearSelect.value !== yearSelect.firstElementChild.value) {
        populateDays(monthSelect.value);
        checkAge();
      }
    };
  }

  function checkAge() {
    const selectedYear = parseInt(yearSelect.value);
    const selectedMonth = monthSelect.value;
    const selectedDay = parseInt(daySelect.value);

    // Hent nuværende dato
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    // Bregn alder
    let age = currentYear - selectedYear;

    // Check om fødselsdagen har været i år
    if (currentMonth < months.indexOf(selectedMonth) + 1 || (currentMonth === months.indexOf(selectedMonth) + 1 && currentDay < selectedDay)) {
      age--;
    }

    // Hvis fejlmelding hvis personens alder er under 16 og de har valgt et nyt år
    if (selectedYear !== parseInt(yearSelect.firstElementChild.value) && age < 16) {
      errorMessage.textContent = "Du skal mindst være 16 år for at være medlem af kundeklubben.";
    } else {
      errorMessage.textContent = ""; // Fjern fejlmelding
    }
  }

  populateDays(monthSelect.value);
  populateYears();

  monthSelect.onchange = function() {
    populateDays(monthSelect.value);
    checkAge();
  };

  daySelect.onchange = function() {
    previousDay = parseInt(daySelect.value);
    checkAge();
  };
});
