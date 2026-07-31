/* ---------- HTML Elements ---------- */

const questionText = document.getElementById("question");
const progressText = document.getElementById("progress");
const answerButtons = document.querySelectorAll(".answer-btn");

const quizContainer = document.querySelector(".quiz-container");

const resultScreen = document.getElementById("result");
const restartButton = document.getElementById("restart-btn");


/* ---------- Quiz Variables ---------- */

let currentQuestion = 0;

let chosenAnswers = [];

let scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
};


/* ---------- Questions ---------- */

const questions = [

{
    question: `You've just finished a long day at work/school. You're tired, so you plug in your earbuds and board a crowded bus for the ride home.

As you find a place to stand, you notice someone looking disoriented and leaning heavily onto a pole.

What do you do?`,

    answers: [

        {
            text: "Take off my earbuds, approach them, and ask if they need help.",
            scores: { E: 2 }
        },

        {
            text: "Wait and approach them only if nobody else does first.",
            scores: { E: 1 }
        },

        {
            text: "Continue my commute unless they ask me directly.",
            scores: { I: 1 }
        },

        {
            text: "Ignore them and focus on getting home.",
            scores: { I: 2 }
        }

    ]
},

{
    question: `The commuter quietly asks,

"Can you help me get to ______ station?"`,

    answers: [

        {
            text: "Accompany them to make sure they reach the correct stop safely.",
            scores: { P: 2 }
        },

        {
            text: "Clearly explain the route and ensure they understand before leaving.",
            scores: { P: 1 }
        },

        {
            text: "Give directions and let them figure out the rest.",
            scores: { J: 1 }
        },

        {
            text: "Tell them to check the station map and continue on my way.",
            scores: { J: 2 }
        }

    ]
},

{
    question: `As you arrive at the MRT station to transfer, you notice another commuter looking around repeatedly at the station signs.`,

    answers: [

        {
            text: "Observe which signs they're looking at before offering help.",
            scores: { S: 2 }
        },

        {
            text: "Watch for a moment to understand what they might need.",
            scores: { S: 1 }
        },

        {
            text: "Think about why they might be confused before approaching them.",
            scores: { N: 1 }
        },

        {
            text: "Try to guess what they need before approaching them, and offer assistance accordingly.",
            scores: { N: 2 }
        }

    ]
},

{
    question: `As you're walking through the MRT gantry, you notice a child who didn't make it through in time and is now stuck outside.`,

    answers: [

        {
            text: "Bring them to the Passenger Service Centre.",
            scores: { J: 2 }
        },

        {
            text: "Stay with them until a parent, guardian or staff member arrives.",
            scores: { J: 1 }
        },

        {
            text: "Wait nearby for a short while to see if anyone will come before deciding what to do.",
            scores: { P: 1 }
        },

        {
            text: "Walk through the gantry, as someone else will help.",
            scores: { P: 2 }
        }

    ]
},

{
    question: `A commuter using a wheelchair is waiting to board the train, but the priority boarding door is being blocked by other commuters.`,

    answers: [

        {
            text: "Assess the situation and help create space so they may board safely before continuing my journey.",
            scores: { J: 2 }
        },

        {
            text: "Wait nearby until the crowd clears.",
            scores: { J: 1 }
        },

        {
            text: "Give them space and step in only if they ask.",
            scores: { P: 1 }
        },

        {
            text: "Continue boarding. Station staff or others will assist if needed.",
            scores: { P: 2 }
        }

    ]
},

{
    question: `You board the MRT and manage to get a seat just as an elderly passenger boards the train. You're tired too.`,

    answers: [

        {
            text: "Immediately stand up and offer them my seat.",
            scores: { S: 2 }
        },

        {
            text: "Observe whether they're struggling before offering it.",
            scores: { S: 1 }
        },

        {
            text: "They might prefer to remain standing. Stay seated unless they ask.",
            scores: { N: 1 }
        },

        {
            text: "Assume someone else who needs the seat more will decide whether to offer theirs.",
            scores: { N: 2 }
        }

    ]
}

,

{
    question: `A passenger sitting nearby begins to look pale and dizzy.`,

    answers: [

        {
            text: "Approach them and ask if they would like assistance.",
            scores: { S: 2 }
        },

        {
            text: "Observe their condition before deciding how to assist.",
            scores: { S: 1 }
        },

        {
            text: "Consider what might be causing their discomfort and what they may need.",
            scores: { N: 1 }
        },

        {
            text: "Stay nearby and offer assistance if they ask.",
            scores: { N: 2 }
        }

    ]
},

{
    question: `A few minutes later, the train suddenly stops between stations.

Everyone sighs. A passenger near you becomes visibly distressed and starts crying.`,

    answers: [

        {
            text: "Reassure them and help calm them down while waiting for announcements.",
            scores: { E: 2 }
        },

        {
            text: "Listen to announcements first and see how the situation develops.",
            scores: { E: 1 }
        },

        {
            text: "Keep to myself unless they ask for assistance.",
            scores: { I: 1 }
        },

        {
            text: "Stay out of it and wait for the train to move again.",
            scores: { I: 2 }
        }

    ]
},

{
    question: `The train starts moving again and quickly arrives at your destination.

You are about to be late due to the breakdown earlier.

As everyone prepares to get off, someone is knocked over in the rush.`,

    answers: [

        {
            text: "Immediately stop to help them up and check if they are injured.",
            scores: { F: 2 }
        },

        {
            text: "Look around to see if someone else will help before stepping in.",
            scores: { F: 1 }
        },

        {
            text: "Assist them only if they seem seriously hurt, if nobody else does, or if it won't make me late.",
            scores: { T: 1 }
        },

        {
            text: "Step around them and continue towards the exit.",
            scores: { T: 2 }
        }

    ]
},

{
    question: `Outside the station, an elderly commuter is struggling to carry heavy NTUC FairPrice shopping bags up the stairs.`,

    answers: [

        {
            text: "Approach them and offer to help carry the bags upstairs.",
            scores: { F: 2 }
        },

        {
            text: "Wait and see if anyone will step in first before making a decision.",
            scores: { F: 1 }
        },

        {
            text: "Assist them, but only if they ask me first.",
            scores: { T: 1 }
        },

        {
            text: "Continue on my way.",
            scores: { T: 2 }
        }

    ]
},

{
    question: `A commuter accidentally leaves their water bottle on the bus while getting off the bus.`,

    answers: [

        {
            text: "Quickly get their attention before they leave.",
            scores: { E: 2 }
        },

        {
            text: "Call out if they don't notice after a moment.",
            scores: { E: 1 }
        },

        {
            text: "Continue as I was, as they'll realise it later.",
            scores: { I: 1 }
        },

        {
            text: "Watch them leave without it, and continue my journey.",
            scores: { I: 2 }
        }

    ]
},

{
    question: `Just before you reach home, you notice someone accidentally drop their bag, and their belongings scatter across the pavement.`,

    answers: [

        {
            text: "Stop and help pick everything up, even if it makes me reach home later.",
            scores: { F: 2 }
        },

        {
            text: "Assist them if nobody else nearby reacts.",
            scores: { F: 1 }
        },

        {
            text: "Point out the dropped items and continue walking.",
            scores: { T: 1 }
        },

        {
            text: "Walk past them and continue home.",
            scores: { T: 2 }
        }

    ]
}

];


/* ---------- Shuffle Answers ---------- */

function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];

    }

    return shuffled;

}


/* ---------- Load Question ---------- */

function loadQuestion() {

    const current = questions[currentQuestion];

    progressText.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    questionText.textContent = current.question;

    const shuffledAnswers = shuffleArray(current.answers);

    answerButtons.forEach((button, index) => {

        const answer = shuffledAnswers[index];

        button.style.display = "block";

        button.textContent = answer.text;

        button.onclick = () => {

            chosenAnswers.push(answer.text);

            for (const trait in answer.scores) {
                scores[trait] += answer.scores[trait];
            }

            currentQuestion++;

            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                showResult();
            }

        };

    });

}

/* ---------- Calculate MBTI ---------- */

function getMBTI() {

    let mbti = "";

    mbti += scores.E >= scores.I ? "E" : "I";
    mbti += scores.S >= scores.N ? "S" : "N";
    mbti += scores.T >= scores.F ? "T" : "F";
    mbti += scores.J >= scores.P ? "J" : "P";

    return mbti;

}


/* ---------- MBTI → Result ---------- */

const results = {

    "INFP": "images/tapioca_kueh_harmony.png",
    "INTJ": "images/pulut_inti_harmony.png",
    "INFJ": "images/cream_cracker_harmony.png",
    "INTP": "images/murukku_harmony.png",

    "ENFP": "images/kueh_lapis_harmony.png",
    "ENTJ": "images/jalebi_harmony.png",
    "ENTP": "images/curry_puff_harmony.png",
    "ENFJ": "images/kueh_salat_harmony.png",

    "ISFJ": "images/eyeglass_candy_harmony.png",
    "ISFP": "images/ondeh_ondeh_harmony.png",
    "ISTJ": "images/vadai_harmony.png",
    "ISTP": "images/ang_ku_kueh_harmony.png",

    "ESFJ": "images/chee_kueh_harmony.png",
    "ESFP": "images/iced_gem_harmony.png",
    "ESTJ": "images/rice_cracker_harmony.png",
    "ESTP": "images/samosa_harmony.png"

};


/* ---------- Show Result ---------- */

function showResult() {

    const mbti = getMBTI();

    const resultImage = document.getElementById("result-image");

    quizContainer.style.display = "none";

    resultScreen.style.display = "flex";

    resultImage.src = results[mbti];

    resultImage.alt = mbti;

}


/* ---------- Restart Quiz ---------- */

restartButton.addEventListener("click", () => {

    currentQuestion = 0;

    chosenAnswers = [];

    scores.E = 0;
    scores.I = 0;
    scores.S = 0;
    scores.N = 0;
    scores.T = 0;
    scores.F = 0;
    scores.J = 0;
    scores.P = 0;

    resultScreen.style.display = "none";
    quizContainer.style.display = "block";

    loadQuestion();

});


/* ---------- Start Quiz ---------- */

loadQuestion();
