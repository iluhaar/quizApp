import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the scientific name of a butterfly?',
			answerOptions: [
				{ answerText: 'Apis', isCorrect: false },
				{ answerText: 'Coleoptera', isCorrect: false },
				{ answerText: 'Formicidae', isCorrect: false },
				{ answerText: 'Rhopalocera', isCorrect: true },
			],
		},
		{
			questionText: 'How hot is the surface of the sun?',
			answerOptions: [
				{ answerText: '101,300 K', isCorrect: false },
				{ answerText: '12,130 K', isCorrect: false },
				{ answerText: '5,778 K', isCorrect: true },
				{ answerText: 'T1,233 K', isCorrect: false },
			],
		},
		{
			questionText: 'How many time zones are there in Russia?',
			answerOptions: [
				{ answerText: '8', isCorrect: false },
				{ answerText: '11', isCorrect: true },
				{ answerText: '10', isCorrect: false },
				{ answerText: '12', isCorrect: false },
			],
		},
		{
			questionText: 'Who are the actors in The Internship?',
			answerOptions: [
				{ answerText: 'Ben Stiller, Jonah Hill', isCorrect: false },
				{ answerText: 'Courteney Cox, Matt LeBlanc', isCorrect: false },
				{ answerText: 'Kaley Cuoco, Jim Parsons', isCorrect: false },
				{ answerText: 'Vince Vaughn, Owen Wilson', isCorrect: true },
			],
		},
		{
			questionText: 'What is the capital of Spain?',
			answerOptions: [
				{ answerText: 'Berlin', isCorrect: false },
				{ answerText: 'Madrid', isCorrect: true },
				{ answerText: 'Buenos Aires', isCorrect: false },
				{ answerText: 'San Juan', isCorrect: false },
			],
		},
		{
			questionText: 'What is 65 times 52?',
			answerOptions: [
				{ answerText: '117', isCorrect: false },
				{ answerText: '3120', isCorrect: true },
				{ answerText: '3380', isCorrect: false },
				{ answerText: '3520', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const startNewGame = () => {
		setScore(0);
		setCurrentQuestion(0);
		setShowScore(0);

	}

	const answerHandler = (isCorrect) => {
		if (isCorrect === true) {
			// alert('Correct')
			setScore(score + 1);
			console.log(score);
		}

		const newQuestion = currentQuestion + 1;
		if (newQuestion < questions.length) {
			setCurrentQuestion(newQuestion);
		}
		else {
			setShowScore(true);
		}
	}

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}
					<button onClick={startNewGame}> Start New Game</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => <button onClick={() => answerHandler(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
					</div>
				</>
			)}
		</div>
	);
}
