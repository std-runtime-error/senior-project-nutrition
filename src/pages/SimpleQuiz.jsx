import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Progressbar from './Progress_bar'; 

export function sum(a, b) { //sample unit test
  return a + b;
}

export default function SimpleQuiz() {
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
	  
	const quiz = [
		{
			question: 'Which drink has the most caffeine?',
			answerList: [
				{answer: 'Coke', checkCorrect: false}, //33.3mg
				{answer: 'Pepsi', checkCorrect: false}, //33.3mg
				{answer: 'Energy drink', checkCorrect: false}, //91.2mg
				{answer: 'Coffee', checkCorrect: true}, //94.8mg
			],
			explanation: 'Coffee has a surprisingly high amount of caffeine (~100mg). This is slightly more most energy drinks (~90mg) and over 3x as much as Coke/Pepsi!(30mg) ',
		},

		{
			question: 'What nutrients do oranges have more than apples?',
			answerList: [
				{answer: 'Sugar', checkCorrect: false},
				{answer: 'Calcium', checkCorrect: true},
				{answer: 'Fat', checkCorrect: false},
				{answer: 'Sodium', checkCorrect: false},
			],
			explanation: 'Oranges contain 40mg of calcium! (6% of your daily needs). This is almost 4x more than an apple!',
		},

		{
			question: 'Which food contains more fat?',
			answerList: [
				{answer: 'Egg', checkCorrect: false},
				{answer: 'Mayonnaise', checkCorrect: true},
			],
			explanation: 'A single tablespoon of mayo contains a whopping 10g of fat and 100 calories! This is nearly 1/5 for most daily recommended amount of fat!',
		},

		{
			question: 'Which meat has the most protein?',
			answerList: [
				{answer: 'Pork', checkCorrect: false}, //27g  23g /3  oz
				{answer: 'Beef', checkCorrect: false}, //26g  22g g / 3 oz
				//{answer: 'Alligator', checkCorrect: true}, //46g 
				{answer: 'Chicken', checkCorrect: false}, // 23g / 3 oz
				{answer: 'Soybeans', checkCorrect: true}, // 31 g / 3oz
			],
			explanation: 'Soybeans contain 31 g of protein per 3 oz serving, the other meats contain about 23g for the same amount!',
		},

		{
			question: 'Which of the following fruits has the lowest calories?',
			answerList: [
				{answer: 'Strawberry', checkCorrect: true}, // 49 calories / cup
				{answer: 'Watermelon', checkCorrect: false}, // 47
				{answer: 'Lemon', checkCorrect: false}, // 61
				{answer: 'Pineapple', checkCorrect: false}, //82
			],
			explanation: 'Pineapple has the most calories at 82 cals / cup! For comparison, watermelon has roughly half that at 47.',
		},

		{
			question: 'Which statement is incorrect about coke and diet coke?',
			answerList: [
				{answer: 'Coke has more sugar', checkCorrect: false},
				{answer: 'Coke has more calcium', checkCorrect: true},
				{answer: 'Diet coke has more caffeine', checkCorrect: false},
				{answer: 'Diet coke has more sodium', checkCorrect: false},
			],
			explanation: 'Diet coke has more caffeine and sodium compared to regular Coke. Also, it contains no sugar since it uses an artifical sweetner called aspartame. However, neither contain any calcium',
		},

		{
			question: 'What food has more iron?',
			answerList: [
				{answer: 'Broccoli', checkCorrect: false}, // 0.7mg / 1 cup
				{answer: 'Brussel sprout', checkCorrect: true}, //1.23 
			],
			explanation: 'Brussel sprouts contain nearly double at 1.25mg / cup!',
		},

		{
			question: 'Wheat has more carbs than rice',
			answerList: [
				{answer: 'True', checkCorrect: false}, // 17 g
				{answer: 'False', checkCorrect: true}, //45 g per cup
			],
			explanation: 'Rice has significantly more carbs at 45g per cup compared to 17 for the same amount of wheat.',
		},

		{
			question: 'Which food has the most calcium?',
			answerList: [
				{answer: 'Milk', checkCorrect: false}, // 305 mg per cup
				{answer: 'Spinach', checkCorrect: false}, //30 mg per cup
				{answer: 'Oranges', checkCorrect: false}, // 72 mg per cup
				{answer: 'Bread', checkCorrect: true}, // 78 mg per slice
			],
			explanation: 'Milk has by far the most calcium at 305 mg per cup. The next closest is bread at 78 mg per slice.',
		},
		{
			question: 'High fiber has lots of benefits to human health. What are the benefits of a high fiber diet?',
			answerList: [
				{answer: 'Helps lower cholesterol levels', checkCorrect: false},
				{answer: 'Helps in controlling blood sugar', checkCorrect: false},
				{answer: 'Maintains bowel health', checkCorrect: false},
				{answer: 'All of the above', checkCorrect: true},
			],
			explanation: '',
		},
		{
			question: 'Why is Olive oil healthier than butter?',
			answerList: [
				{answer: 'It has less sugar', checkCorrect: false},
				{answer: 'It has less calories', checkCorrect: false},
				{answer: 'It’s made of unsaturated fats instead of saturated', checkCorrect: true},
				{answer: 'It has less fat', checkCorrect: false},
			],
			explanation: '',
		},
		{
			question: 'What is an advantage of Fast Food?',
			answerList: [
				{answer: 'It is in the name (it is fast)', checkCorrect: true},
				{answer: 'High blood pressure', checkCorrect: false},
				{answer: 'High Sodium', checkCorrect: false},
				{answer: 'Raise Cholesterol', checkCorrect: false},
			],
			explanation: '',
		},
		{
			question: 'What are the reasons to maintain proper vitamin B12 levels in your diet?',
			answerList: [
				{answer: 'Good blood and nerve cell health', checkCorrect: false},
				{answer: 'Helps in making DNA', checkCorrect: false},
				{answer: 'Formation of red blood cells', checkCorrect: false},
				{answer: 'All of the above', checkCorrect: true},
			],
			explanation: '',
		},
		{
			question: 'What are the reasons to maintain proper vitamin C levels in your diet?',
			answerList: [
				{answer: 'Protection against immune system deficiencies', checkCorrect: false},
				{answer: 'Lower risk of cardiovascular disease', checkCorrect: false},
				{answer: 'Protection against skin wrinkling', checkCorrect: false},
				{answer: 'All of the above', checkCorrect: true},
			],
			explanation: '',
		},
		{
			question: 'Raisins have more carbs than Oats (per oz)',
			answerList: [
				{answer: 'True', checkCorrect: true},
				{answer: 'False', checkCorrect: false},
			],
			explanation: '',
		},
		{
			question: 'Raisins have more carbs than Oats (per oz)',
			answerList: [
				{answer: 'Milk', checkCorrect: false},
				{answer: 'Spinach', checkCorrect: false},
				{answer: 'Oranges', checkCorrect: false},
				{answer: 'Bread', checkCorrect: true},
			],
			explanation: '',
		},
		{
			question: 'Wasabi and Soy Sauce both have what in common?',
			answerList: [
				{answer: 'High sodium', checkCorrect: true},
				{answer: 'High sugar', checkCorrect: false},
				{answer: 'High cholesterol', checkCorrect: false},
				{answer: 'High fat', checkCorrect: false},
			],
			explanation: '',
		},
		{
			question: 'HDL cholesterol (good cholesterol) is raised by which of the following foods',
			answerList: [
				{answer: 'Oatmeal', checkCorrect: true},
				{answer: 'Broccoli', checkCorrect: false},
				{answer: 'Low-fat milk', checkCorrect: false},
				{answer: 'Potatoes', checkCorrect: false},
			],
			explanation: '',
		},
		{
			question: 'What is the ideal amount of trans-fat you should ingest daily?',
			answerList: [
				{answer: '0 g', checkCorrect: true},
				{answer: '10 g', checkCorrect: false},
				{answer: '5 g', checkCorrect: false},
				{answer: '1 g', checkCorrect: false},
			],
			explanation: '',
		},
		{
			question: 'What is not correct as a symptom that occurs in the body when protein is lacking?',
			answerList: [
				{answer: 'muscle loss', checkCorrect: false},
				{answer: 'Reduced skin elasticity', checkCorrect: false},
				{answer: 'thinning of hair', checkCorrect: false},
				{answer: 'deterioration of vision', checkCorrect: true},
			],
			explanation: '',
		},
		{
			question: 'What is not a symptom of excessive caffeine intake?',
			answerList: [
				{answer: 'Insomnia', checkCorrect: false},
				{answer: 'Increasing heart rate', checkCorrect: false},
				{answer: 'Increasing appetite', checkCorrect: true},
				{answer: 'excessive gastric acid', checkCorrect: false},
			],
			explanation: '',
		},
		{
			question: 'What is a possible advantage of high carb diets?',
			answerList: [
				{answer: 'Increased weight gain', checkCorrect: true},
				{answer: 'Increased risk of cardiovascular disease', checkCorrect: false},
				{answer: 'Lower quality of sleep', checkCorrect: false},
				{answer: 'Fatigue and inconsistent energy levels', checkCorrect: false},
			],
			explanation: '',
		},
		{
			question: 'What are the side effects of low Vitamin D levels?',
			answerList: [
				{answer: 'Muscle Fatigue', checkCorrect: false},
				{answer: 'Less immune effectiveness', checkCorrect: false},
				{answer: 'Fatigue/Lower quality of sleep', checkCorrect: false},
				{answer: 'All of the above', checkCorrect: true},
			],
			explanation: '',
		},
	];
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [questionNumber, setQuestionNumber] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(getRandNumInRange(0,quiz.length));
	const [usedQuestions, setUsedQuestions] = useState([currentQuestion]);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [progressPercent, setProgressPercent] = useState(0);
	const [showAnswer, setShowAnswer] = useState(false);

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
			<div className='simplequiz'>
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
						<div className='question-section'>
						<Progressbar className= 'question-progress-bar' progress={progressPercent} /> 
							<div className='question-count'>
								Question {questionNumber + 1}
							</div>
							<div className='question-text'>{quiz[currentQuestion].question}</div>
						</div>
						<div className='answer-section'>
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
						<div className='answer-explanation'>
							<h3><i class="fa-solid fa-circle-info fa-xl"></i>&nbsp;&nbsp;More Info:</h3>
							{quiz[currentQuestion].explanation}
						</div>
					</div>
					)}
			</div>
		</div>
	);
}