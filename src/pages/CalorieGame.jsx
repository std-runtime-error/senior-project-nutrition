import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Progressbar from './Progress_bar'; 
import FoodReference from './FoodReference';

export default function CalorieGame() { 

	function getRandNumInRange(min = 0, max = estimations.length) {
		let x = Math.floor(Math.random() * (max - min) + min);
		return x;
	  }
	  //Returns a random int corresponding to a question that hasn't been displayed yet.
	  //If all questions have been displayed, returns (# of questions + 1)
	  function getRandomQuestion() {
		if (usedQuestions.length === estimations.length)
			return estimations.length+1;
		let x = getRandNumInRange();
		while(usedQuestions.includes(x))
			x = getRandNumInRange();
		const nextUsedQuestions = usedQuestions.slice();
		nextUsedQuestions.push(x);
		setUsedQuestions(nextUsedQuestions);
		return x;
	}
	
	const images = [
		{id: 0, src: "img/apple.png", description: 'apple'},
		{id: 1, src: "img/banana.png", description: 'banana'},
		{id: 2, src: "img/orange.png", description: 'orange'},
		{id: 3, src: "img/grape.png", description: 'grape'},

		{id: 4, src: "img/broccoli_half_cup.jpg", description: "broccoli"},
		{id: 5, src: "img/brussel_sprouts.jpg", description: "brussel sprouts"},
		{id: 6, src: "img/carrots_one_cup.jpg", description: "carrots"},
		{id: 7, src: "img/kale_one_cup.jpg", description: "kale"},
		{id: 8, src: "img/onion.jpg", description: "onion"},

		{id: 9, src: "img/mcdonaldsburger.jpg", description: 'burger'}, 
		{id: 10, src: "img/largedrink.jpg", description: 'Large Coke'}, 
		{id: 11, src: "img/fries.jpg", description: 'Large Fries'}, 
		{id: 12, src: "img/mocha.PNG", description: 'Dunkin Frozen Mocha Coffee w/ Cream'}, 
		{id: 13, src: "img/nuggets.jpg", description: '20 piece nuggets + 3 ranch'}, 
		{id: 14, src: "img/salad.jpg", description: 'McDonalds Southwest Salad w/ Crispy Chicken'}, 


	];

	const estimations = [
		{id: 0, answer: 50},
		{id: 1, answer: 60},
		{id: 2, answer: 70},
		{id: 3, answer: 80},
		{id: 4, answer: 15}, //broccoli: 0.5 cup or 44g
		{id: 5, answer: 60}, //brussel sprouts: 8 sprouts or 168g
		{id: 6, answer: 52}, //carrots: 1 cup or 128g
		{id: 7, answer: 36}, //kale: 1 cup or 130g
		{id:8, answer: 41}, //onion: one medium onion or 94g
		{id: 9, answer: 550},
		{id: 10, answer: 380},
		{id: 11, answer: 510},
		{id: 12, answer: 800},
		{id: 13, answer: 1160},
		{id: 14, answer: 430},

	];

	const [currentQuestion, setEstimationNum] = useState(getRandNumInRange(0, estimations.length));
	const [usedQuestions, setUsedQuestions] = useState([currentQuestion]);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [inputText, setValue] = useState('');
	const checkChangedValue = (e) => {
    	setValue(e.target.value);
  	};

	  const foodTypeMapping = {
		0: 'Fruit',
		1: 'Fruit',
		2: 'Fruit',
		3: 'Fruit',
		
		4: 'Vegetable',
		5: 'Vegetable',
		6: 'Vegetable',
		7: 'Vegetable',
		8: 'Vegetable',

		9: 'Junk',
		10: 'Junk',
		11: 'Junk',
		12: 'Junk',
		13: 'Junk',
		14: 'Junk',

		// Add more mappings as needed
	  };

	  function calculatePoints(guess, trueAnswer, marginOfErrorForNone) {
		const minVal = (trueAnswer*marginOfErrorForNone);  
		guess /= minVal;
		trueAnswer /= minVal;
		const percentageDifference = Math.round(Math.abs((guess - trueAnswer))*100)/100;
	//console.log(`Guess: ${guess}, true answer: ${trueAnswer}, percent diff: ${percentageDifference}`);
		const points = Math.round(pointsPerQuestion * (1 - Math.pow(percentageDifference, 2)));
		return Math.max(points, 0);
	  }

	const pointsPerQuestion = 10;
	const clickEnter = () => {

		let marginOfErrorForNone = 0.5;

		let pointsEarned = calculatePoints(inputText,estimations[currentQuestion].answer,marginOfErrorForNone)
		setScore(score + pointsEarned);

		const nextQuestion = getRandomQuestion();
		setValue('');

		if (nextQuestion < estimations.length) {
			setEstimationNum(nextQuestion);
		}
		setValue('');
		if (usedQuestions.length == estimations.length) {
			setShowScore(true);
		}	
	}; 
	return (
		<div>
			<div className='caloriegame'>
			  {showScore ? (
				  <div className='score-section'>
					  You scored {score} out of {estimations.length*pointsPerQuestion}
				  </div>
			  ) : (
				  <React.Fragment>
					  <div className='question-section'>
					  	<div className='question-count'>
							  <span>{images[currentQuestion].description}</span>
							</div>
							<div className='print-image' align='center'>
								<img src={images[currentQuestion].src} alt={images[currentQuestion].description} width='160' height='auto'/>
							</div>
							<div className='inputBox' align='center'>
								<input onChange={checkChangedValue} value={inputText} placeholder='Type your answer'/>
							</div>
							<br/>
						<div className='enter-button'>
							<button onClick={() => clickEnter(inputText)}>Enter</button>
						</div>
						<div className='showInput'>
							<b>Your Input Value: {inputText} kcal</b>
						</div>
						</div>
					</React.Fragment>
				)}
			</div>
		<br/>
		<FoodReference game={"CalorieGame" + foodTypeMapping[estimations[currentQuestion].id]} />
		</div>
	);
}
