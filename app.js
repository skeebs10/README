//Questions in Array
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
    
$(() => {

//Cached Dom Nodes////

const $startButton = $('.start-btn');
const $nextButton = $('next-btn');
const $questionContainerElement = $('question-container');
const $questionElement = $('question');
const $answerButtonsElement = $('answer-buttons');
const $progressBarFull = $('#progressBarFull');
const $beanScore = $('#score');



/////Player Class ////////////////////

class Player {
    constructor(name, beans) {
        this.name = name;
        this.beans = beans; //beans mean points
    }
}

///////The Point is to have to have more Beans than the Barista Expertista to be Queen Bean!

const barista1 = new Player('Barista 1', 3); ////you the user starts with 3 beans
const barista2= new Player('Barista 2', 0); //Barista 2 is the Barista Expertista, you want to come on top!



}
(if points.length === 0) &&  {
    alert(Sorry Try Again!){
    } else if ()
}
you 
barista



