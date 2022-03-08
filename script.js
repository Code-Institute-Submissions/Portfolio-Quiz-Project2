function result(){
    let score = 0;

    let resultView = document.getElementById('result');

    let question1Input = document.getElementsByName('Question1');
    let question1Output = document.getElementsByClassName('q1');
    let correctIcon = "<i class='fas fa-check-circle'></i>";
    let inCorrectIcon = "<i class='fas fa-times-circle'></i>";
        

    for(let i=0; i<question1Input.length; i++){
        if(question1Input[i].checked){
            console.log("Question1: checked value: " + question1Input[i].value);
            if(question1Input[i].value === 'correct') {
                question1Output[i].innerHTML = correctIcon;
                score++;
            } else {
                question1Output[i].innerHTML = inCorrectIcon;
            }
        } else {
            if(question1Input[i].value === 'correct') {
                question1Output[i].innerHTML = correctIcon;
            } else {
                question1Output[i].innerHTML = inCorrectIcon;
            }
        }
    }

    let question2Input = document.getElementsByName('Question2');
    let question2Output = document.getElementsByClassName('q2');

    for(let i=0; i<question2Input.length; i++){
        if(question2Input[i].checked){
            console.log("Question2: checked value: " + question2Input[i].value);
            if(question2Input[i].value === 'correct') {
                question2Output[i].innerHTML = correctIcon;
                score++;
            } else {
                question2Output[i].innerHTML = inCorrectIcon;
            }
        } else {
            if(question2Input[i].value === 'correct') {
                question2Output[i].innerHTML = correctIcon;
            } else {
                question2Output[i].innerHTML = inCorrectIcon;
            }
        }
    }

    let question3Input = document.getElementsByName('Question3');
    let question3Output = document.getElementsByClassName('q3');

    for(let i=0; i<question3Input.length; i++){
        if(question3Input[i].checked){
            console.log("Question3: checked value: " + question3Input[i].value);
            if(question3Input[i].value === 'correct') {
                question3Output[i].innerHTML = correctIcon;
                score++;
            } else {
                question3Output[i].innerHTML = inCorrectIcon;
            }
        } else {
            if(question3Input[i].value === 'correct') {
                question3Output[i].innerHTML = correctIcon;
            } else {
                question3Output[i].innerHTML = inCorrectIcon;
            }
        }
    }

    let question4Input = document.getElementsByName('Question4');
    let question4Output = document.getElementsByClassName('q4');

    for(let i=0; i<question4Input.length; i++){
        if(question4Input[i].checked){
            console.log("Question4: checked value: " + question4Input[i].value);
            if(question4Input[i].value === 'correct') {
                question4Output[i].innerHTML = correctIcon;
                score++;
            } else {
                question4Output[i].innerHTML = inCorrectIcon;
            }
        } else {
            if(question4Input[i].value === 'correct') {
                question4Output[i].innerHTML = correctIcon;
            } else {
                question4Output[i].innerHTML = inCorrectIcon;
            }
        }
    }

    let question5Input = document.getElementsByName('Question5');
    let question5Output = document.getElementsByClassName('q5');

    for(let i=0; i<question5Input.length; i++){
        if(question5Input[i].checked){
            console.log("Question5: checked value: " + question5Input[i].value);
            if(question5Input[i].value === 'correct') {
                question5Output[i].innerHTML = correctIcon;
                score++;
            } else {
                question5Output[i].innerHTML = inCorrectIcon;
            }
        } else {
            if(question5Input[i].value === 'correct') {
                question5Output[i].innerHTML = correctIcon;
            } else {
                question5Output[i].innerHTML = inCorrectIcon;
            }
        }
    }

    let question6Input = document.getElementsByName('Question6');
    let question6Output = document.getElementsByClassName('q6');

    for(let i=0; i<question6Input.length; i++){
        if(question6Input[i].checked){
            console.log("Question6: checked value: " + question6Input[i].value);
            if(question6Input[i].value === 'correct') {
                question6Output[i].innerHTML = correctIcon;
                score++;
            } else {
                question6Output[i].innerHTML = inCorrectIcon;
            }
        } else {
            if(question6Input[i].value === 'correct') {
                question6Output[i].innerHTML = correctIcon;
            } else {
                question6Output[i].innerHTML = inCorrectIcon;
            }
        }
    }

    let question7Input = document.getElementsByName('Question7');
    let question7Output = document.getElementsByClassName('q7');

    for(let i=0; i<question7Input.length; i++){
        if(question7Input[i].checked){
            console.log("Question7: checked value: " + question7Input[i].value);
            if(question7Input[i].value === 'correct') {
                question7Output[i].innerHTML = correctIcon;
                score++;
            } else {
                question7Output[i].innerHTML = inCorrectIcon;
            }
        } else {
            if(question7Input[i].value === 'correct') {
                question7Output[i].innerHTML = correctIcon;
            } else {
                question7Output[i].innerHTML = inCorrectIcon;
            }
        }
    }

    let question8Input = document.getElementsByName('Question8');
    let question8Output = document.getElementsByClassName('q8');

    for(let i=0; i<question8Input.length; i++){
        if(question8Input[i].checked){
            console.log("Question8: checked value: " + question8Input[i].value);
            if(question8Input[i].value === 'correct') {
                question8Output[i].innerHTML = correctIcon;
                score++;
            } else {
                question8Output[i].innerHTML = inCorrectIcon;
            }
        } else {
            if(question8Input[i].value === 'correct') {
                question8Output[i].innerHTML = correctIcon;
            } else {
                question8Output[i].innerHTML = inCorrectIcon;
            }
        }
    }

    let question9Input = document.getElementsByName('Question9');
    let question9Output = document.getElementsByClassName('q9');

    for(let i=0; i<question9Input.length; i++){
        if(question9Input[i].checked){
            console.log("Question9: checked value: " + question9Input[i].value);
            if(question9Input[i].value === 'correct') {
                question9Output[i].innerHTML = correctIcon;
                score++;
            } else {
                question9Output[i].innerHTML = inCorrectIcon;
            }
        } else {
            if(question9Input[i].value === 'correct') {
                question9Output[i].innerHTML = correctIcon;
            } else {
                question9Output[i].innerHTML = inCorrectIcon;
            }
        }
    }

    let question10Input = document.getElementsByName('Question10');
    let question10Output = document.getElementsByClassName('q10');

    for(let i=0; i<question10Input.length; i++){
        if(question10Input[i].checked){
            console.log("Question10: checked value: " + question10Input[i].value);
            if(question10Input[i].value === 'correct') {
                question10Output[i].innerHTML = correctIcon;
                score++;
            } else {
                question10Output[i].innerHTML = inCorrectIcon;
            }
        } else {
            if(question10Input[i].value === 'correct') {
                question10Output[i].innerHTML = correctIcon;
            } else {
                question10Output[i].innerHTML = inCorrectIcon;
            }
        }
    }
    let name = document.getElementById('name1').value;
    resultView.innerHTML = "Welldone " + name + ", you have total scored " + score + "/10" ;
} 