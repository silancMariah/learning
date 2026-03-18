let exams = [];

function addExam() {
    const course = document.getElementById("course").value;
    const date = document.getElementById("date").value;
    const type = document.getElementById("type").value;

    exams.push({ course, date, type });

    const months = [
        "januari", "februari", "mars", "april", "maj",
        "juni", "juli", "augusti", "september",
        "oktober", "november", "december"
    ];

    exams.sort((a, b) => {
        const monthA = a.date.split(" ")[1];
        const monthB = b.date.split(" ")[1];
        return months.indexOf(monthA) - months.indexOf(monthB);
    });

    const container = document.getElementById("months");
    container.innerHTML = "";

    months.forEach(month => {
        const monthDiv = document.createElement("div");
        monthDiv.id = month;
        monthDiv.className = "month-box";
        monthDiv.innerHTML = `
            <h2>${month}</h2>
            <div class="month-exams"></div>
        `;
        container.appendChild(monthDiv);
    });

    exams.forEach(exam => {
        const newExam = document.createElement("div");
        newExam.className = "schedule-card";

        if(course==="" || date === "" || typ === ""){
            alert ("fyll i allt");
            return;
        }
        newExam.innerHTML = `
            <h3>${exam.course}</h3>
            <span>${exam.type}</span>
            <p>${exam.date}</p>
        `;

        const alreadyExist = exams.some(exam => 
            exam.course === course &&
            exam.date === date && 
            exam.type === type
        );

        if(alreadyExist){
            alert("denna tenta finns redan!")
            return
        }

        const month = exam.date.split(" ")[1];
        const monthDiv = document.getElementById(month);
        const examsContainer = monthDiv.querySelector(".month-exams");

        examsContainer.appendChild(newExam);
    });
}