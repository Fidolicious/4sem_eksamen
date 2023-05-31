document.addEventListener("DOMContentLoaded", function() {
    //Skaber reference til dropdown
    const yearSelect = document.getElementById("year");
    const monthSelect = document.getElementById("month");
    const daySelect = document.getElementById("day");

    const months = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'];

    //Månederne er altid de samme
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
        //Sletter alle "children" fra dage dropdown
        //hvis disse ikke eksistere:
        while (daySelect.firstChild) {
            daySelect.removeChild(daySelect.firstChild);
        }
        //Antallet af dage pr måned
        let dayNum;
        //Hent nuværende år
        let year = yearSelect.value;

        if (month === 'Januar' || month === 'Marts' || month === 'Maj' || month === 'Juli' || month === 'August' || month === 'Oktober' || month === 'December') {
            dayNum = 31;
        } else if (month === 'April' || month === 'Juni' || month === 'September' || month === 'November') {
            dayNum = 30;
        } else {
            //Tjek for skudår
            if (new Date(year, 1, 29).getMonth() === 1) {
                dayNum = 29;
            } else {
                dayNum = 28;
            }
        }
        //Indsætter korrekte dage i day feltet
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
        //henter nuværende åreq
        let year = new Date().getFullYear();
        //gør de sidste 100 år mulige at vælge i dropdown (selv Birthe på 100år kan være med)
        for (let i = 0; i < 101; i++) {
            const option = document.createElement("option");
            option.textContent = year - i;
            yearSelect.appendChild(option);
        }
        yearSelect.value = year; //Sætter en grundværdi for året.
    }

    populateDays(monthSelect.value);
    populateYears();

    yearSelect.onchange = function () {
        populateDays(monthSelect.value);
    };
    monthSelect.onchange = function () {
        populateDays(monthSelect.value);
    };
daySelect.onchange = function() {
    previousDay = daySelect.value;
};
});
