let lessons = [
    { title: "Lesson 1: Basics", content: "Welcome to the basics of the language!" },
    { title: "Lesson 2: Vocabulary", content: "Here you will learn some vocabulary." },
];

let achievements = [
    "Completed Lesson 1",
    "Scored 80% in Quiz 1",
];

let forumPosts = [];

function loadLesson() {
    let lessonContent = "";
    lessons.forEach(lesson => {
        lessonContent += `<h3>${lesson.title}</h3><p>${lesson.content}</p>`;
    });
    document.getElementById('lesson-content').innerHTML = lessonContent;
}

function startQuiz() {
    let quizContent = "<h3>Quiz: Basic Vocabulary</h3>";
    quizContent += "<p>What does 'Hola' mean?</p>";
    quizContent += `<button onclick="submitAnswer('Hello')">Hello</button>`;
    quizContent += `<button onclick="submitAnswer('Goodbye')">Goodbye</button>`;
    document.getElementById('quiz-content').innerHTML = quizContent;
}

function submitAnswer(answer) {
    if (answer === "Hello") {
        alert("Correct!");
        achievements.push("Scored 100% in Vocabulary Quiz");
        updateAchievements();
    } else {
        alert("Try again!");
    }
}

function updateAchievements() {
    let achievementList = achievements.join("<br>");
    document.getElementById('achievement-list').innerHTML = achievementList;
}

function postMessage() {
    const message = document.getElementById('forum-post').value;
    if (message) {
        forumPosts.push(message);
        updateForum();
        document.getElementById('forum-post').value = ""; // Clear input
    }
}

function updateForum() {
    document.getElementById('forum-messages').innerHTML = forumPosts.map(post => `<p>${post}</p>`).join("");
}
