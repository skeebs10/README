$(() => {
    // Questions in Array
    const questions = [
        {
            image: "images/Espresso.png",
            answers: [
                { text: 'Espresso', correct: true, points: 0},
                { text2: 'Cortado', correct2: false, points2: -1 },
            ]
        },
        {
            image: "images/Americano.png",
            answers: [
                { text: 'Affogato', correct: false, points: -1},
                { text2: 'Americano', correct2: true, points2: 0 },
            ]
        },
        {
            image:"images/Cafe au Lait.png",
            answers: [
                { text: 'Affogato', correct: false, points: -1},
                { text2: 'Cafe au Lait', correct2: true, points2: 0 },
            ]
        },
        {
            image: "images/Caffe Breve.png" ,
            answers: [
                { text: 'Breve', correct: true, points: 0 },
                { text2: 'Cold Brew', correct2: false, points2: -1},
            ]
        },
        {
            image: "images/Caffe Latte.png" ,
            answers: [
                { text: 'Caffe Latte', correct: true, points: 0 },
                { text2: 'Irish Coffee', correct2: false, points2: -1 },
            ]
        },
        {
            image: "images/Caffe Mocha.png",
            answers: [
                { text: 'Lungo', correct: false, points: -1 },
                { text2: 'Caffe Mocha', correct2: true, points2: 0},
            ]
        },
        {
            image: "images/Espresso con Panna.png",
            answers: [
                { text: 'Con Panna', correct: true, points: 0 },
                { text2: 'Flat White', correct2: false, points2: -1 }
            ]
        },
        {
            image: "images/Espresso Macchiato.png" ,
            answers: [
                { text: "Machiato", correct: true, points: 0},
                { text2: 'Mocha', correct2: false, points2: -1 },
            ]
        },
        {
            image: "images/Flat White.png",
            answers: [
                { text: 'Doppio', correct: false, points: -1},
                { text2: 'Flat White', correct2: true, points2: 0 },
            ]
        },
        {
            image: "images/Red Eye.png" ,
            answers: [
                { text: 'Red Eye', correct: true, points: 0 },
                { text2: 'Ristretto', correct2: false, points2: -1 },
            ]
        }
    ]

    // Cached Dom Nodes
    const $startButton = $('#start-btn');
    const $nextButton = $('#next-btn');
    const $questionImage = $('#question-image');
    const $answerButtons= $('#answer-buttons');
    const $progressBarFull = $('#progressBarFull'); //////not sure yet///
    const $points= $('#bean');
    const $btn1= $('#btn1');
    const $btn2= $('#btn2');
    const $imageContainer= $('#imageContainer');


    // Variables
    const highestIndex = questions.length;
    let currentQuestionIndex = 0;
    let isCorrect = false;

    // Player Class
    class Player {
        constructor(name, beans) {
            this.name = name;
            this.beans = beans.toString(); //beans are points
        }
    }

    // The Point is to have to have more Beans than the Barista Expertista to be Queen Winner!
    const barista1 = new Player('Barista 1', 3); // You, the user, starts with 3 beans.
    const barista2= new Player('Barista 2', 0); // Barista 2 is the Barista Expertista. You want to come on top!


    // Start Game
    const startGame = () => {
        $startButton.addClass('hide');

        $btn1.remove('hide');
        $btn2.remove('hide');
        $imageContainer.remove('hide');

        $btn1.addClass('show');
        $btn2.addClass('show');
        $imageContainer.addClass('show');

        setNextQuestion();
    }

    function showQuestion(q) {
        console.log("next")
        console.log(q);
        $btn1.html(questions[q]["answers"][0]['text']);
        $btn2.html(questions[q]["answers"][1]['text2']);
    };

    const setNextQuestion = () => {
        showQuestion(currentQuestionIndex);
    }

    const setChoice1 = () => {
/*        alert(questions[currentQuestionIndex]["answers"][0]['correct']);*/
        if(currentQuestionIndex >= highestIndex) {
            alert("YOU WON!");
        }else{
            isCorrect = questions[currentQuestionIndex]["answers"][0]['correct'];
            $nextButton.click();
        }
    }
    const setChoice2 = () => {
/*        alert(questions[currentQuestionIndex]["answers"][1]['correct2']);*/
        if(currentQuestionIndex >= highestIndex) {
            alert("YOU WON!");
        }else{
            isCorrect = questions[currentQuestionIndex]["answers"][1]['correct2'];
            $nextButton.click();
        }
    }


    // Show Next Image
    const nextImg = () => {
        currentQuestionIndex++;

        if(currentQuestionIndex >= highestIndex && barista1.beans > 0) {
            alert("YOU WON!");
        }else if(currentQuestionIndex < highestIndex){
            if(barista1.beans <= 0){
                alert("You lost.")
            }else{
                let tempImg = questions[currentQuestionIndex]["image"];
                $imageContainer.attr("src", tempImg);
                showQuestion(currentQuestionIndex);
                if(isCorrect){

                }else{
                    barista1.beans = barista1.beans - 1;
                    $points.html("<h3>" + barista1.beans + "</h3>")
                    if(barista1.beans <= 0){
                        alert("You lost.")
                    }
                }

            }
        }


/*
        if(currentQuestionIndex < highestIndex) {
            currentQuestionsIndex ++;
        } else {
            currentQuestionIndex = 0;
        }

        questions.eq(currentImgIndex).css('display', 'block');


        showQuestion(question);

     //Loop over each card in the array and add event listener to flip cards
     questions.forEach(question => {
         question.on('click') () => {
             game.flipCard(question);
         })
     })
*/


/*     (if points.length === 0) &&  {
         alert(Sorry Try Again!){
         } else if ()
     }*/

     // You barista if you get 0 points before game is over you lose and barista wins

/*
     checkPoints(bartisa1, barista2)
         if(barista1)
*/


    }

        // EVENT LISTENERS
        $startButton.on('click', startGame)
        $nextButton.on('click', nextImg);
        $btn1.on('click', setChoice1);
        $btn2.on('click', setChoice2);
});






