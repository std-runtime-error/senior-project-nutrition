import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Progressbar from './Progress_bar'; 


export default function SimpleQuiz() {
	//Generates random int from min to max (inclusive). 	
	//Probably shouldn't hardcode the default parameter as 8
	function getRandNumInRange(min = 0, max = 8) {
		let x = Math.floor(Math.random() * (max - min) + min);
		return x;
	  }
	  //Returns a random int corresponding to a question that hasn't been displayed yet.
	  //If all questions have been displayed, returns (# of questions + 1)
	  function getRandomQuestion() {
		if (usedQuestions.length == quiz.length)
			return quiz.length+1;
		let x = getRandNumInRange();
		while(usedQuestions.includes(x))
			x = getRandNumInRange();
		const nextUsedQuestions = usedQuestions.slice();
		nextUsedQuestions.push(x);
		setUsedQuestions(nextUsedQuestions);
		return x;
	  }
	  
	const quiz = [
		{
			question: 'Which drink has the most caffeine?',
			answerList: [
				{answer: 'Coke', checkCorrect: false}, //33.3mg
				{answer: 'Pepsi', checkCorrect: false}, //33.3mg
				{answer: 'Energy drink', checkCorrect: false}, //91.2mg
				{answer: 'Coffee', checkCorrect: true}, //94.8mg
			],
		},

		{
			question: 'What nutrients do oranges have more than apples?',
			answerList: [
				{answer: 'Sugar', checkCorrect: false},
				{answer: 'Calcium', checkCorrect: true},
				{answer: 'Fat', checkCorrect: false},
				{answer: 'Sodium', checkCorrect: false},
			],
		},

		{
			question: 'Which food contains more fat?',
			answerList: [
				{answer: 'Egg', checkCorrect: false},
				{answer: 'Mayonnaise', checkCorrect: true},
			],
		},

		{
			question: 'Which meat has the most protein?',
			answerList: [
				{answer: 'Pork', checkCorrect: false}, //27g 
				{answer: 'Beef', checkCorrect: false}, //26g 
				{answer: 'Alligator', checkCorrect: true}, //46g 
				{answer: 'Duck', checkCorrect: false}, //19g 
			],
		},

		{
			question: 'Which of the following fruits has the lowest calories?',
			answerList: [
				{answer: 'Strawberry', checkCorrect: true}, //27kcal
				{answer: 'Watermelon', checkCorrect: false}, //30.4kcal
				{answer: 'Lemon', checkCorrect: false}, //28.9kcal
				{answer: 'Pineapple', checkCorrect: false}, //50kcal
			],
		},

		{
			question: 'What is incorrect about coke and diet coke?',
			answerList: [
				{answer: 'Coke has more sugar', checkCorrect: false},
				{answer: 'Diet coke has more caffeine', checkCorrect: false},
				{answer: 'Coke has more calcisum', checkCorrect: true},
				{answer: 'Diet coke has more sodium', checkCorrect: false},
			],
		},

		{
			question: 'What food has more iron?',
			answerList: [
				{answer: 'Broccoli', checkCorrect: false},
				{answer: 'Brussel sprout', checkCorrect: true},
			],
		},

		{
			question: 'Which has more carbohydrate?',
			answerList: [
				{answer: 'Wheat', checkCorrect: false},
				{answer: 'Rice', checkCorrect: true},
			],
		},

		{
			question: 'Which food has the most calcium?',
			answerList: [
				{answer: 'Milk', checkCorrect: false},
				{answer: 'Spinach', checkCorrect: false},
				{answer: 'Anchoby', checkCorrect: true},
				{answer: 'Cheese', checkCorrect: false},
			],
		},
	];
	const [questionNumber, setQuestionNumber] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(getRandNumInRange(0,quiz.length));
	const [usedQuestions, setUsedQuestions] = useState([currentQuestion.valueOf]);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [progressPercent, setProgressPercent] = useState(0);

	const handleAnswerOptionClick = (checkCorrect) => {
		if (checkCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = getRandomQuestion();
		if (nextQuestion < quiz.length) {
			setQuestionNumber(questionNumber+1);
			setCurrentQuestion(nextQuestion);
			setProgressPercent(((questionNumber+1)/quiz.length)*100);
		} else {
			setShowScore(true); 
		}
	};
	return (
		<div className='simplequiz'>
			{showScore ? (
				<div>
					<Progressbar className= 'question-progress-bar' progress={100} /> 
					<div className='score-section'>
						You scored {score} out of {quiz.length}!
					</div>
					<br />
					<center><Link to="/">Back to Game Menu</Link></center>
				</div>
			) : (
				<div>
					<div className='question-section'>
					<Progressbar className= 'question-progress-bar' progress={progressPercent} /> 
						<div className='question-count'>
							Question {questionNumber + 1}
						</div>
						<div className='question-text'>{quiz[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
						{quiz[currentQuestion].answerList.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.checkCorrect)}>{answerOption.answer}</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}