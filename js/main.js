// Calculate numbers

var elFormNumber = document.querySelector('.number-form');
var elFormNumberInput = document.querySelector('.number-form__input');
var elFormNumberArea = document.querySelector('.number-form__area');


elFormNumber.addEventListener('submit', function(evt){
    evt.preventDefault();
    var userNumber = elFormNumberInput.value.trim().split(' ');
    result = 0;

    for (var num of userNumber){
        result=result+Number(num);
    }
    
    elFormNumberArea.textContent = result;
})


// How is bigger

var elFormText = document.querySelector('.text-form');
var elFormTextInput = document.querySelector('.text-form__input');
var elFormTextArea = document.querySelector('.text-form__area');

elFormText.addEventListener('submit', function (evt){
    evt.preventDefault();

    var userText = elFormTextInput.value.trim().split(' ');
    // Use default element
    var mainText = userText[0];

    elFormTextArea.value = null;

    for (var abc of userText){
        if(mainText < abc){
            mainText = abc;
        }
    }

    elFormTextArea.textContent = mainText;
})