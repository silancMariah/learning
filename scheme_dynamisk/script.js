let exams = [];

function addExam() {
    event.preventDefault();
    const course = document.getElementById("course").value;
    const date = document.getElementById("date").value;
    const type = document.getElementById("type").value;

    const months = [
        "januari", "februari", "mars", "april", "maj",
        "juni", "juli", "augusti", "september",
        "oktober", "november", "december"
    ];

    if (course === "" || date === "" || type === "") {
        alert("Fyll i allt");
        return;
    }

    const monthFromInput = date.split(" ")[1];
    if (!months.includes(monthFromInput)) {
        alert("Skriv datum typ: 10 april");
        return;
    }

    const alreadyExists = exams.some(exam =>
        exam.course === course &&
        exam.date === date &&
        exam.type === type
    );

    if (alreadyExists) {
        alert("Denna tenta finns redan!");
        return;
    }

    exams.push({ course, date, type });

    exams.sort((a, b) => {
        const monthA = a.date.split(" ")[1];
        const monthB = b.date.split(" ")[1];
        return months.indexOf(monthA) - months.indexOf(monthB);
    });

    const container = document.getElementById("months");
    const icon = document.getElementBy
    container.innerHTML = "";

    const usedMonths = [];

    exams.forEach(exam => {
        const month = exam.date.split(" ")[1];

        if (!usedMonths.includes(month)) {
            const monthDiv = document.createElement("div");
            monthDiv.id = month;
            monthDiv.className = "month-box";
            monthDiv.innerHTML = `
                <h2>${month}</h2>
                <div class="month-exams"></div>
            `;
            container.appendChild(monthDiv);

            usedMonths.push(month);
        }
        function edit(month) {
            alert("Du klickade på " + month);
        }

        const newExam = document.createElement("div");
        newExam.className = "schedule-card";

        newExam.innerHTML = `
            <h3>${exam.course}</h3>
            <span>${exam.type}</span>
            <p>${exam.date}</p>
            <button-icon onclick="edit('month')"><img src = "public/edit.png" class="icons"></button-icon>
        `;

        const monthDiv = document.getElementById(month);
        const examsContainer = monthDiv.querySelector(".month-exams");

        examsContainer.appendChild(newExam);
    });
}