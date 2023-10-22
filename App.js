import React, { useState } from 'react';

export default function App() { 
	const images = [
		{id: 1, src: "img/apple.png", description: 'apple'},
		{id: 2, src: "img/banana.png", description: 'banana'},
		{id: 3, src: "img/orange.png", description: 'orange'},
		{id: 4, src: "img/grape.png", description: 'grape'} 
	];

	const estimations = [
		{id: 1, answer: 50},
		{id: 2, answer: 60},
		{id: 3, answer: 70},
		{id: 4, answer: 80},
	];

	const [currentQuestion, setEstimationNum] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [inputText, setValue] = useState('');
	const checkChangedValue = (e) => {
    	setValue(e.target.value);
  	};

	const clickEnter = () => {
		//Set the 5% margin
		let marginOfError = 0.05;
		let lowerVal = estimations[currentQuestion].answer * (1-marginOfError);
		let upperVal = estimations[currentQuestion].answer * (1+marginOfError);

		if (inputText >= lowerVal && inputText <= upperVal) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		setValue('');
		if (nextQuestion < estimations.length) {
			setEstimationNum(nextQuestion);
		} 
		else {
			setShowScore(true);
		}	
	}; 
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {estimations.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Estimation {currentQuestion + 1}</span>
						</div>
						<div className='print-image'>
							<img src={images[currentQuestion].src} alt={images[currentQuestion].description} width='160' height='160'/>
						</div>
						<div className='inputBox'>
							<input onChange={checkChangedValue} value={inputText} placeholder='Type your answer'/>
						</div>
      				<div className='enter-button'>
						<button onClick={() => clickEnter(inputText)}>Enter</button>
					</div>
      				<div className='showInput'>
        				<b>Your Input Value: {inputText} kcal</b>
      				</div>
    				</div>
				</>
			)}
		</div>
	);
}
