import React, { useState } from 'react';

export default function App() {
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

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (checkCorrect) => {
		if (checkCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quiz.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {quiz.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							Question {currentQuestion + 1}
						</div>
						<div className='question-text'>{quiz[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
						{quiz[currentQuestion].answerList.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.checkCorrect)}>{answerOption.answer}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}