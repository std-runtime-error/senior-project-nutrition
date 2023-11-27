import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Progressbar from './Progress_bar'; 

export function sum(a, b) { //sample unit test
  return a + b;
}

export default function FoodLabelGame() {
	//Generates random int from min to max (exclusive). 	
	//Probably shouldn't hardcode the default parameter as 8
	function getRandNumInRange(min = 0, max = quiz.length) {
		let x = Math.floor(Math.random() * (max - min) + min);
		return x;
	  }
	  //Returns a random int corresponding to a question that hasn't been displayed yet.
	  //If all questions have been displayed, returns (# of questions + 1)
	  function getRandomQuestion() {
		if (usedQuestions.length === quiz.length)
			return quiz.length+1;
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
		{id: 0, src: 'img/nutrition-label-banana.png', description: 'banana'},
		{id: 1, src: 'img/nutrition-label-apple.png', description: 'apple'},
		{id: 2, src: 'img/nutrition-label-pear.png', description: 'pear'},
	]
	  
	const quiz = [
		{
			question: 'Using this food label, how much Sodium does one medium Banana have?',
			answerList: [
				{answer: 'None', checkCorrect: false},
				{answer: '0.4g', checkCorrect: false}, 
				{answer: '1.2mg', checkCorrect: true}, 
			],
			explanation: 'According to the food label, one medium banana has 1.2mg of Sodium.',
		},
		{
			question: 'Say that you typically consume 1,500 calories a day. How much of your daily value of Dietary Fiber would be given in one medium apple?',
			answerList: [
				{answer: '9%', checkCorrect: false},
				{answer: '16%', checkCorrect: false}, 
				{answer: '21%', checkCorrect: true}, 
			],
			explanation: 'Daily values are based on 2,000 calories a day. Since you would eat 25% less than that, each medium apple would give you 25% more of your daily value of Dietary Fiber.',
		},
		{
			question: 'Using this food label, how many calories would you consume if you ate 3 medium Pears?',
			answerList: [
				{answer: '101', checkCorrect: false},
				{answer: '303', checkCorrect: true}, 
				{answer: '0.3', checkCorrect: false}, 
			],
			explanation: 'According to the food label, each medium pear has 101 calories. If you ate 3 medium pears, you would consume 303 calories.',
		}
	];
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [usedQuestions, setUsedQuestions] = useState([currentQuestion]);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [progressPercent, setProgressPercent] = useState(0);
	const [showAnswer, setShowAnswer] = useState(false);
	const [showIntro, setShowIntro] = useState(false);

	const handleAnswerOptionClick = (checkCorrect, currSelectedAnswer) => {
		if (checkCorrect) {
			setScore(score + 1);
		}
		setShowAnswer(true);
		setSelectedAnswer(currSelectedAnswer);
		document.documentElement.style.setProperty("--explanationTransition", "0.7s");
		document.documentElement.style.setProperty("--explanationOpacity", "1");
	};

	const nextQuestion = () => {

		const nextQuestion = getRandomQuestion();
		if (nextQuestion < quiz.length) {
			setQuestionNumber(questionNumber+1);
			setCurrentQuestion(nextQuestion);
			setProgressPercent(((questionNumber+1)/quiz.length)*100);
			setShowAnswer(false);
			setSelectedAnswer(null);
		} else {
			setShowScore(true); 
		}
		document.documentElement.style.setProperty("--explanationTransition", "0s");
		document.documentElement.style.setProperty("--explanationOpacity", "0");
	};

	const restartGame = () => {
		setQuestionNumber(0);
		setCurrentQuestion(getRandNumInRange(0,quiz.length));
		setUsedQuestions([currentQuestion.valueOf]); 
		setShowScore(false);
		setScore(0);
		setShowAnswer(false);
	};

	return (
		<div>
			<div className='foodlabelgame'>
				{showScore ? (
					<div>
						<Progressbar className= 'question-progress-bar' progress={100} /> 
						<div className='score-section'>
							You scored {score} out of {quiz.length}!
						</div>
						<br />
						<div className='restart-game'>
							<center><button onClick={() => restartGame()}>Restart the Game</button></center>
						</div>	
						<br />
							<center><Link to="/">Back to Game Menu</Link></center>
					</div>
				) : (
					<div>

						<div className='foodLabelIntroSection' style={{display: showIntro ? 'none' : 'block'}}>
							<h1 align='center'>Food Label Game</h1>
							<br/>
							<div className='game-instructions'>
								<div>

									<p>In this game, you will learn the basics of reading 
									food labels!
									<br/><br/>
									The top of the label shows the serving size. In this example,
									the serving size is one medium apple. The amount in grams 
									is also displayed
									<br/><br/>
									Next, the label shows the number of calories per serving.
									In this example, there are 95 calories in one medium apple.
									<br/><br/>
									The rest of the label shows each the nutrients in the food.
									For example, one medium apple has 0.3 grams of total fat.
									Notice the "% Daily Value" column. This displays estimated
									percentages of how much a serving would satisfy a person's
									daily nutrient needs. These percentages are based on a 2,000
									calorie a day diet, which may not reflect your own needs.
									<br/><br/>
									Here are a few questions to test your knowledge of food labels!
									</p>
								</div>
								<img src='img/nutrition-label-apple.png' width='240' height='auto'/>
							</div>
							<br/>
							<button onClick={() => setShowIntro(true)}>Start Game</button>
						</div>

						<div className='question-section' style={{display: showIntro ? 'block' : 'none'}}>
						<Progressbar className= 'question-progress-bar' progress={progressPercent} style={{display: showIntro ? 'block' : 'none'}}/> 
							<div className='question-count' style={{display: showIntro ? 'block' : 'none'}}>
								Question {questionNumber + 1}
							</div>
							<div className="game-instructions">
								<div className='question-text'>{quiz[currentQuestion].question}</div>
								<img src={images[currentQuestion].src} alt={images[currentQuestion].description} width='250' height='auto'/>
							</div>
						</div>
						<div className='answer-section' style={{display: showIntro ? 'block' : 'none'}}>
							{quiz[currentQuestion].answerList.map((answerOption) => (
								<button 
								className = {`${
									showAnswer
									? answerOption.checkCorrect
										? 'correct-answer'
										: showAnswer && (answerOption.answer === selectedAnswer) ?
										 'wrong-answer'
								 	 : ''
									: ''
								}`}
								onClick={() => handleAnswerOptionClick(answerOption.checkCorrect, answerOption.answer)}>{answerOption.answer}</button>
							)
							)
						}
						{showAnswer &&
							(<div>
								<br/>
								<button onClick={() => nextQuestion()}>Next
								</button>
							</div>)
						}
						</div>
						<div className='answer-explanation' style={{display: showIntro ? 'block' : 'none'}}>
							<h3><i class="fa-solid fa-circle-info fa-xl"></i>&nbsp;&nbsp;More Info:</h3>
							{quiz[currentQuestion].explanation}
						</div>
					</div>
					)}
			</div>
		</div>
	);
}