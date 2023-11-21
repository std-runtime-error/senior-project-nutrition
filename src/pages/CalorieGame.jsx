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
		{id: 4, src: "img/spaghet.jpg", description: 'spaghetti'},
		{id: 5, src: "img/mcdonaldsburger.jpg", description: 'burger'} 

	];

	const estimations = [
		{id: 0, answer: 50},
		{id: 1, answer: 60},
		{id: 2, answer: 70},
		{id: 3, answer: 80},
		{id: 4, answer: 550},
		{id: 5, answer: 800},

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
		4: 'Junk',
		5: 'Junk',
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
							  <span>Estimation {usedQuestions.length}</span>
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
