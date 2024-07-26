import React, { useState } from 'react';
import ReplayButton from './ReplayButton';

function Game() {
    const [choices] = useState(['Rock', 'Paper', 'Scissors']);
    const [userChoice, setUserChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [result, setResult] = useState('');
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    const handleGame = (choice) => {
        setUserChoice('');
        setComputerChoice('Computer is thinking...');
        setResult('');
        setGameStarted(true);
        setUserChoice(choice);

        const randomComputerChoice = choices[Math.floor(Math.random() * choices.length)];

        setTimeout(() => {
            setComputerChoice(randomComputerChoice);
            const gameResult = getResult(choice, randomComputerChoice);
            setResult(gameResult);
        }, 1000);
    };

    const getResult = (player, computer) => {
        if (player === computer) return 'tie';

        if (
            (player === 'Rock' && computer === 'Scissors') ||
            (player === 'Paper' && computer === 'Rock') ||
            (player === 'Scissors' && computer === 'Paper')
        ) {
            const newScore = userScore + 1;
            setUserScore(newScore);
            if (newScore > highScore) {
                setHighScore(newScore);
            }
            return 'win';
        }
        setComputerScore(computerScore + 1);
        return 'lose';
    };

    const getResultColor = () => {
        if (result === 'win') return 'text-green-500';
        if (result === 'lose') return 'text-red-500';
        if (result === 'tie') return 'text-yellow-500';
        return 'text-white';
    };

    const getResultText = () => {
        if (result === 'win') return 'You Win!';
        if (result === 'lose') return 'Computer Wins!';
        if (result === 'tie') return 'It\'s a tie!';
        return '';
    };

    const handleReplay = () => {
        setUserScore(0);
        setComputerScore(0);
        setGameStarted(false);
        setResult('');
        setUserChoice('');
        setComputerChoice('');
    };

    return (
        <div className='grid place-content-center h-screen'>
            {result === 'lose' ? (
                    <ReplayButton onReplay={handleReplay} />
            ) : (
                <>
                    <h1 className='text-white text-3xl font-bold font-serif hover:underline text-center'>Rock Paper Scissors</h1>
                    <div className='flex gap-5 justify-around mt-10'>
                        <button onClick={() => handleGame('Rock')} id='rock' className='border border-transparent rounded-lg transition-all duration-200 hover:border-gray-500 p-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hand-grab cursor-pointer hover:scale-110 transition-transform duration-200" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M8 11v-3.5a1.5 1.5 0 0 1 3 0v2.5" />
                                <path d="M11 9.5v-3a1.5 1.5 0 0 1 3 0v3.5" />
                                <path d="M14 7.5a1.5 1.5 0 0 1 3 0v2.5" />
                                <path d="M17 9.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
                            </svg>
                        </button>
                        <button onClick={() => handleGame('Paper')} id='paper' className='border border-transparent rounded-lg transition-all duration-200 hover:border-gray-500 p-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-neutral cursor-pointer hover:scale-110 transition-transform duration-200" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2zm-7 -7h.01m3.99 0h.01m-4.01 3h4" />
                            </svg>
                        </button>
                        <button onClick={() => handleGame('Scissors')} id='scissors' className='border border-transparent rounded-lg transition-all duration-200 hover:border-gray-500 p-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-scissors cursor-pointer hover:scale-110 transition-transform duration-200" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M8.6 8.6l10.4 10.4" />
                                <path d="M8.6 15.4l10.4 -10.4" />
                            </svg>
                        </button>
                    </div>

                    {gameStarted && (
                        <div className={`text-xl font-bold font-serif place-content-center text-center mt-10 ${getResultColor()}`}>
                            <p>You chose: {userChoice}</p>
                            <p>Computer chose: {computerChoice}</p>
                            <div className='mt-4 text-2xl underline'>
                                <p>Final result: {getResultText()}</p>
                            </div>
                            <div className='mt-4'>
                                <p>User score: {userScore}</p>
                                <p>Computer score: {computerScore}</p>
                                <p>High score: {highScore}</p>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Game;
