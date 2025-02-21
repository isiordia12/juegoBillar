"use strict";

let questionManager = {
    questions: [
        { question: "1)  -3x + 48 = -72", answer: "40" },
        { question: "2)  7n - 21 = -49", answer: "-4" },
        { question: "3)  9m - 36 = -81", answer: "-5" },
        { question: "4)  30y + 120 = 270", answer: "5" },
        { question: "5)  12z + 144 = -156", answer: "-25" },
        { question: "6)  22m + 44 = 126", answer: ["82/22", "3.7"] },
        { question: "8)  -130x + 58 = -1,202", answer: ["1260/13", "9.6"] },
        { question: "9)  -40w + 30 = -140", answer: ["170/40", "4.2"] },
        { question: "10)  35k + 320 = 35", answer: ["-285/35", "-8.1"] },
        { question: "11)  8m - 15 = 735", answer: "90" },
        { question: "12)  48n + 32 = 272", answer: "5" },
        { question: "13)   15x + 70 = -40", answer: ["-110/15", "-7.3" ]},
        { question: "14)   18d + 36 = 512", answer: ["476/18", "26.4"] },
        { question: "15)  -55x + 35 = -180", answer: ["215/55", "3.9"] },
        { question: "16)  -8y + 48 = 72", answer: ["-24/8", "-3" ]},
        { question: "17)  36x - 12 = 6", answer: ["18/36", "9/18", "3/6", "0.5"] },
        { question: "18)   7z + 85 = 134", answer: ["-49/7", "-7" ]},
        { question: "19)  -122x + 11 = 133", answer: ["-122/122", "-1"] },
        { question: "20)  36x + 50 = 86", answer: ["36/36", "1"] },
        { question: "7)  42s + 7 = 511", answer: "12" }
    ],
    usedQuestions: [],

    getRandomQuestion: function() {
        if (this.questions.length === 0) {
            this.questions = this.usedQuestions;
            this.usedQuestions = [];
        }
        let randomIndex = Math.floor(Math.random() * this.questions.length);
        let selectedQuestion = this.questions.splice(randomIndex, 1)[0];
        this.usedQuestions.push(selectedQuestion);
        return selectedQuestion;
    }
};

window.askQuestion = function() {
    const q = questionManager.getRandomQuestion();
    
    // Muestra el modal con la pregunta
    document.getElementById("questionText").innerText =  q.question;
    document.getElementById("questionModal").style.display = "block";

    // Función para verificar la respuesta
    window.checkAnswer = function() {
        const userAnswer = document.getElementById("userAnswer").value.trim().toLowerCase();
        if (userAnswer === q.answer.toLowerCase()) {
            alert("¡Correcto! Ahora puedes jugar.");
            document.getElementById("questionModal").style.display = "none";
            canShoot = true;
        } else {
            alert("Incorrecto. Inténtalo de nuevo.");
            document.getElementById("userAnswer").value = ""; // Limpia la respuesta
        }
    };
};
