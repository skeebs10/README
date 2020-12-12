$(() => {
    // Questions in Array
    const questions = [
        {
            image: "images/Espresso.png",
            answers: [
                { text: 'Espresso', correct: true, points: 0},
                { text: 'Cortado', correct: false, points: -1 },
            ]
        },
        {
            image: "images/Americano.png",
            answers: [
                { text: 'Affogato', correct: false, points: -1},
                { text: 'Americano', correct: true, points: 0 },
            ]
        },
        {
            image:"images/Cafe au Lait.png",
            answers: [
                { text: 'Affogato', correct: false, points: -1},
                { text: 'Cafe au Lait', correct: true, points: 0 },
            ]
        },
        {
            image: "images/Caffe Breve.png" ,
            answers: [
                { text: 'Breve', correct: true, points: 0 },
                { text: 'Cold Brew', correct: false, points: -1},
            ]
        },
        {
            image: "images/Caffe Latte.png" ,
            answers: [
                { text: 'Caffe Latte', correct: true, points: 0 },
                { text: 'Irish Coffee', correct: false, points: -1 },
            ]
        },
        {
            image: "images/Caffe Mocha.png",
            answers: [
                { text: 'Lungo', correct: false, points: -1 },
                { text: 'Caffe Mocha', correct: true, points: 0},
            ]
        },
        {
            image: "images/Espresso con Panna.png",
            answers: [
                { text: 'Con Panna', correct: true, points: 0 },
                { text: 'Flat White', correct: false, points: -1 }
            ]
        },
        {
            image: "images/Espresso Macchiato.png" ,
            answers: [
                { text: "Machiato", correct: true, points: 0},
                { text: 'Mocha', correct: false, points: -1 },
            ]
        },
        {
            image: "images/Flat White.png",
            answers: [
                { text: 'Doppio', correct: false, points: -1},
                { text: 'Flat White', correct: true, points: 0 },
            ]
        },
        {
            image: "images/Red Eye.png" ,
            answers: [
                { text: 'Red Eye', correct: true, points: 0 },
                { text: 'Ristretto', correct: false, points: -1 },
            ]
        }
    ]

    // Cached Dom Nodes
    let $questions = questions;
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
    const highestIndex = $questions.length -1;
    let currentQuestionIndex = 0;

    // Player Class

    class Player {
        constructor(name, beans) {
            this.name = name;
            this.bean = bean; //beans are points
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
        $nextButton.remove('hide');

        $btn1.addClass('show');
        $btn2.addClass('show');
        $imageContainer.addClass('show');
        $nextButton.addClass('show');

        setNextQuestion();
    }

    function showQuestion(q) {
        console.log("next")
        console.log(q);
    };

    const setNextQuestion = () => {
        showQuestion(currentQuestionIndex);
    }