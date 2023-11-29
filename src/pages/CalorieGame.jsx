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
		if (usedQuestions.length === quizLength)
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
		//fruit
		{id: 0, src: "img/apple.png", description: '1 Medium Apple'},
		{id: 1, src: "img/banana.png", description: '1 Medium Banana'},
		{id: 2, src: "img/orange.png", description: '1 Medium Orange'},
		{id: 3, src: "img/grape.png", description: '1 Cup of Grape' },
		{id: 4, src: "img/watermelon.png", description: '1 Cup of Diced Watermelon'},

		{id: 5, src: "img/broccoli_half_cup.jpg", description: "1 Cup of Broccolis"},
		{id: 6, src: "img/brussel_sprouts.jpg", description: "1 Cup of Brussel Sprouts"},
		{id: 7, src: "img/carrots_one_cup.jpg", description: "1 Cup of Carrots"},
		{id: 8, src: "img/kale_one_cup.jpg", description: "1 Cup of Kale"},
		{id: 9, src: "img/onion.jpg", description: "1 Medium Onion"},

		{id: 10, src: "img/mcdonaldsburger.jpg", description: 'McDonalds Double Quarter Pounder'}, 
		{id: 11, src: "img/largedrink.jpg", description: 'Large Coke (32 oz)'}, 
		{id: 12, src: "img/fries.jpg", description: 'Large Fries'}, 
		{id: 13, src: "img/mocha.PNG", description: 'Dunkin Frozen Mocha Coffee w/ Cream (32 oz)'}, 
		{id: 14, src: "img/nuggets.jpg", description: '20 piece nuggets + 3 ranch'}, 
		{id: 15, src: "img/salad.jpg", description: 'McDonalds Southwest Salad w/ Crispy Chicken'}, 
		// Carbohydrate 
		{id:16, src: "img/WhiteRice.jpeg", description: "1/2 Cup of WhiteRice"},
		{id:17, src: "img/SweetPotato.png", description: "1 Medium SweetPotato"},
		{id:18, src: "img/Potato.png", description: "1 Medium Potato"},
		{id:19, src: "img/WhiteBread.jpg", description: "1 Slice of WhiteBread"},
		{id:20, src: "img/Doughnut.png", description: "1 Medium Doughnut"},
	];

	const estimations = [
		//fruit
		{id: 0, answer: 95}, //all these are based on a serving
		{id: 1, answer: 105},
		{id: 2, answer: 45},
		{id: 3, answer: 62}, //1 serving is a cup or 16 - grapes
		{id: 4, answer: 86},
		
		{id: 5, answer: 15}, //broccoli: 0.5 cup or 44g
		{id: 6, answer: 60}, //brussel sprouts: 8 sprouts or 168g
		{id: 7, answer: 52}, //carrots: 1 cup or 128g
		{id: 8, answer: 36}, //kale: 1 cup or 130g
		{id: 9, answer: 41}, //onion: one medium onion or 94g
		{id: 10, answer: 550},
		{id: 11, answer: 380},
		{id: 12, answer: 510},
		{id: 13, answer: 800},
		{id: 14, answer: 1160},
		{id: 15, answer: 430},
		{id: 16, answer: 160}, // 1/2 cup of White rice
		{id: 17, answer: 110}, // 1 Sweet Potato
		{id: 18, answer: 110}, // 1 Potatoe
		{id: 19, answer: 98}, // 1 slice of White bread
		{id: 20, answer: 190} // 1 Doughnut

	];
	const quizLength = 5;
	const [currentQuestion, setEstimationNum] = useState(getRandNumInRange(0, estimations.length));
	const [usedQuestions, setUsedQuestions] = useState([currentQuestion]);
	const [showScore, setShowScore] = useState(false);
	const [pointsAwarded, setPointsAwarded] = useState(0);
	const [showingAnswer, setShowingAnswer] = useState(false);
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
		4: 'Fruit',
		
		5: 'Vegetable',
		6: 'Vegetable',
		7: 'Vegetable',
		8: 'Vegetable',
		9: 'Vegetable',

		10: 'Junk',
		11: 'Junk',
		12: 'Junk',
		13: 'Junk',
		14: 'Junk',
		15: 'Junk',

		16: 'Carbohydrate',
		17: 'Carbohydrate',
		18: 'Carbohydrate',
		19: 'Carbohydrate',
		20: 'Carbohydrate'
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

		if (!showingAnswer) {
			let marginOfErrorForNone = 0.5;

			let pointsEarned = calculatePoints(inputText,estimations[currentQuestion].answer,marginOfErrorForNone)
			
			setPointsAwarded(pointsEarned);
			setScore(score + pointsEarned);

				
			document.documentElement.style.setProperty("--explanationTransition", "0.7s");
			document.documentElement.style.setProperty("--explanationOpacity", "1");
			setShowingAnswer(true);
		} else {
			setPointsAwarded(0);
			const nextQuestion = getRandomQuestion();
			setValue('');

			if (nextQuestion < estimations.length) {
				setEstimationNum(nextQuestion);
			}
			setValue('');
			if (usedQuestions.length == quizLength) {
				setShowScore(true);
			}	
			document.documentElement.style.setProperty("--explanationTransition", "0s");
			document.documentElement.style.setProperty("--explanationOpacity", "");
			setShowingAnswer(false);
		}
	}; 
	// Restart the game
	const restartGame = () => {
		setEstimationNum(getRandNumInRange(0,estimations.length));
		setUsedQuestions([currentQuestion]); 
		setShowScore(false);
		setScore(0);
		setShowingAnswer(false);
		setPointsAwarded(0);
		setValue('');
	};
	return (
		<div>
			<div className='caloriegame'>
			  {showScore ? (
				  <div>
				  	<Progressbar className= 'question-progress-bar' progress={100} /> 
				  <div className='score-section'>
					You scored {score} out of {quizLength * 10}!
				  </div>
				  <br />
				  <div className='restart-game'>
					<center><button onClick={() => restartGame()}>Restart the Game</button></center>
				  </div>	
				  <br />
					<center><Link to="/">Back to Game Menu</Link></center>
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
							<button onClick={() => clickEnter(inputText)}>
							{showingAnswer &&
							(<div>
								Next
							</div>)
						} {!showingAnswer &&
							(<div>
								Enter
							</div>)
						}
								</button>
						</div>
						<div className='showInput'>
							<b>Your Input Value: {inputText} calories</b>
						</div>
						</div>
						<div className='answer-explanation'>
							<h3><i class="fa-solid fa-circle-info fa-xl"></i>&nbsp;&nbsp;Answer:</h3>
							<div>Points awarded: {pointsAwarded}  / 10 !</div>
							<div>Correct answer: {estimations[currentQuestion].answer}</div>
						</div>
					</React.Fragment>
				)}
			</div>
		<br/>
		<FoodReference game={"CalorieGame" + foodTypeMapping[estimations[currentQuestion].id]} />
		</div>
	);
}
