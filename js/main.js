document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');
    const cardInner = document.getElementById('card-inner');
    const questionText = document.getElementById('question-text');
    const diceButton = document.getElementById('dice-button');

    const getRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        return questions[randomIndex];
    };

    const updateCard = () => {
        cardContainer.classList.add('fade-out');
        setTimeout(() => {
            cardInner.classList.remove('initial-card-animation');
            const randomQuestion = getRandomQuestion();
            questionText.innerText = randomQuestion;
            cardContainer.classList.remove('fade-out');
            cardContainer.classList.add('fade-in');
        }, 500); // Animation duration
    };

    const setInitialState = () => {
        questionText.innerText = "";
        cardInner.style.borderColor = '#FFFFFF';
        cardInner.classList.add('initial-card-animation');
        cardInner.classList.remove('fade-in');
        cardInner.classList.remove('fade-out');
    };
    
    setInitialState();

    const diceIcon = document.querySelector('.dice-icon');

    // Event for the dice button
    diceButton.addEventListener('click', () => {
        diceIcon.classList.add('is-rolling');
        setTimeout(() => {
            updateCard();
            diceIcon.classList.remove('is-rolling');
        }, 1000); // The dice animation lasts 1s
    });
});