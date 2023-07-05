const statement = document.getElementById('statement');
const optionButtons = document.getElementById('options').children;
const explanation = document.getElementById('explanation');

const fact = {
    statement: `typeof ['dog', 'cat', 'bunny'] === "array"`,
    answer: false,
    explanation: `The typeof operator returns "object" for arrays.`
}

statement.textContent = fact.statement;
    
const disable = button => button.setAttribute('disabled', '');
const enable = button => button.removeAttribute('disabled');


const isCorrect = guess => guess === fact.answer.toString();

for (let button of optionButtons) {
    button.addEventListener('click', e => {
        explanation.textContent = fact.explanation;
        for (let button of optionButtons) {
            disable(button);
        }
        if (isCorrect(button.value)) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
    } 
)}