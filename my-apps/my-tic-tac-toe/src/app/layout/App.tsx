import React, { useState } from 'react';
import './App.scss';
import { MainNav } from './MainNav';
import { Board } from './Board';
import { Alert } from 'react-bootstrap';


function App() {
	const [playerX, setPlayerX] = useState(true)
	const [show, setshow] = useState(false);
	const [messageTitle, setMessageTitle] = useState('Congratulations player X!');
	const [message, setMessage] = useState("You win this battle, but let's try again to see how good you are.");
	const [variant, setVariant] = useState('info');


	const [table, setTable] = useState([
		['', '', ''],
		['', '', ''],
		['', '', '']
	]);

	const showMessage = (error: boolean) => { 
		if (error) {
			setMessageTitle('Oh! Bad move');
			setMessage('It looks like this cell is already selected, please try another one.');
			setVariant('danger');
			setshow(true);
		} else {
			setMessageTitle(`Congratulations player ${playerX? "X" : "O"}!`);
			setMessage("You win this battle, but let's try again to see how good you are.");
			setVariant('info');
			setshow(true);
		}
	}

	const onCellClick = (i: number, j: number) => {
		if (table[i][j] !== '') {
			showMessage(true);
			return;
		}

		let tmpTable = table;
		console.log(table);
		if (playerX) {
			tmpTable[i][j] = "X"
		} else {
			tmpTable[i][j] = "O"
		}

		setTable(tmpTable);

		if (checkWinner()) {
			showMessage(false);
		} 

		setPlayerX(!playerX);
	}

	const checkWinner = () : boolean => {
		const currentPlayer = playerX? "X" : "O";

		let horizontalWin = false;
		let verticalWin = false;
		let transversalWin = true;

		let index = 2;

		for (let i = 0; i < table.length; i++) {		
			horizontalWin = true;		
			for (let j = 0; j < table[i].length; j++) {				
				if (horizontalWin && table[i][j] !== currentPlayer) {
					horizontalWin = false;
				}		
				
				if (transversalWin && j === index && table[i][j] !== currentPlayer) {					
					transversalWin = false;
				}
			}
			index--;
			if (horizontalWin) return true;				
		}

		if (transversalWin) return true;

		transversalWin = true;

		for (let i = 0; i < table.length; i++) {		
			verticalWin = true;			
			for (let j = 0; j < table[i].length; j++) {				
				if (verticalWin && table[j][i] !== currentPlayer) {
					verticalWin = false;
				}				
				if (transversalWin && i === j && table[j][i] !== currentPlayer) transversalWin = false;				
			}
			if (verticalWin) return true;				
		}
		return transversalWin;
	}	

	const onStarGame = () => {
		setTable([
			['', '', ''],
			['', '', ''],
			['', '', '']
		]);

		setPlayerX(true);
		setshow(false);
	}


	return (
		<>
			<MainNav onStartGameClick={onStarGame} />
			<Alert show={show} variant={variant} dismissible onClose={() => setshow(false)} >
				<Alert.Heading>{messageTitle}</Alert.Heading>
				<p>{message}</p>
			</Alert>
			<Board
				table={table}
				onCellClick={onCellClick}
			/>
		</>
	);
}

export default App;
