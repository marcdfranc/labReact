import React from 'react';
import Cell from './Cell';
import ControlPanel from './ControlPanel';
import MessagePanel from './MessagePanel';

class Board extends React.Component {	
	state = {
		table: [
			[null, null, null],
			[null, null, null],
			[null, null, null]
		],
		player: "X",
		winner: null,
		steps: [],
		history: [],
		typeWin: null
	};

	renderCells() {
		return this.state.table.map((row, i) => {
			return row.map((col, j) => {
				return (<div className="cell" key={`${i}|${j}`}>
					<Cell
						onCellClick={this.onCellClick}
						content={col}
						row={i}
						col={j}
						decoration={this.getStyle(i, j)}
					/>
				</div>);
			});
		});
	}

	onCellClick = (row, col) => {
		if (this.state.winner) {
			return;
		}

		let table = this.state.table.slice();
		let steps = this.state.steps.slice();
		let newPlayer = this.state.player;

		const h = [];
		this.state.history.forEach((x, i) => {
			h[i] = [];
			x.forEach(y => h[i].push(y.slice()));
		});

		if (!table[row][col]) {
			table[row][col] = this.state.player;
			h.push(table);

			steps = [...steps, {
				cords: `${row};${col}`,
				player: newPlayer
			}];
			newPlayer = this.state.player === "X"? "O" : "X";
		}

		this.setState({
			table: table,
			player: newPlayer,
			steps: steps,
			history: h
		});

		this.checkWinner();
	}

	onNewClick = () => {		
		this.setState({
			table: [
				[null, null, null],
				[null, null, null],
				[null, null, null]
			],
			player: "X",
			steps: [],
			winner: null,
			typeWin: null,
			history: []
		});
	}

	onHistoryClick = (history, steps) => {
		this.setState({
			table: history[history.length - 1],
			history: history,
			player: steps[steps.length - 1].player,
			steps: steps
		});
		console.log(steps);
		console.log(history);
	}

	checkWinner() {
		const xLeftWin = [];
		const xRightWin = [];
		let winner = '';
		let typeWin = '';

		this.state.table.forEach((row, i) => {
			switch (i) {
				case 0:
					xLeftWin.push(row[0]);
					xRightWin.push(row[2])
				break;

				case 1:
					xLeftWin.push(row[1]);
					xRightWin.push(row[1]);
				break;

				default:
					xRightWin.push(row[0])
					xLeftWin.push(row[2]);
				break;
			}
		});

		if (xLeftWin.filter(x => x === "X").length === 3) {
			winner = "X";
			typeWin = 'dl';
		} else if (xRightWin.filter(x => x === "X").length === 3) {
			winner = "X";
			typeWin = 'dr';			
		} else if(xLeftWin.filter(y => y === "O").length === 3) {
			winner = "O";
			typeWin = 'dl';
		} else if (xRightWin.filter(y => y === "O").length === 3) {
			winner = "O";
			typeWin = 'dr';
		}
		
		// winner by row
		if (this.state.table.filter(x => x.filter(y => y === "X").length === 3).length > 0) {
			winner = "X";
			typeWin = 'r';
		} else if (this.state.table.filter(x => x.filter(y => y === "O").length === 3).length > 0) {
			winner = "O";
			typeWin = 'r';
		}

		// winner by col by row
		if (this.state.table.filter(x => x[0] === "X").length === 3
		|| this.state.table.filter(x => x[1] === "X").length === 3
		|| this.state.table.filter(x => x[2] === "X").length === 3) {
			winner = "X";
			typeWin = 'c';
		} else if (this.state.table.filter(x => x[0] === "O").length === 3
		|| this.state.table.filter(x => x[1] === "O").length === 3
		|| this.state.table.filter(x => x[2] === "O").length === 3) {
			winner = "O";
			typeWin = 'c';
		}

		if (winner) {
			this.setState({winner: winner });
			this.setState({typeWin: typeWin});
		}
	}

	getStyle(row, col) {
		let className = '';
		switch (this.state.typeWin) {
			case 'dl':
				if (row === col) {
					return 'win';
				}
				break;
			case 'dr' :
				if ((row === 0 && col === 2) || (row === 1 && col === 1) || (row === 2 && col === 0)) {
					return 'win';
				}
			break

			case 'r' :
				this.state.table.forEach((x, i) => {
					if (x.filter(y => y === this.state.winner).length === 3 && i === row) {
						className = 'win';
					}
				});
				break

			case 'c' :
				for (let i = 0; i < 4; i++) {
					if (this.state.table.filter(x => x[i] === this.state.winner).length === 3 && i === col) {
						className = 'win';
					}
				}
			break

			default:
				return className;
		}
		return className;
	}

	getMessage() {
		if (this.state.winner) {
			return `Player "${this.state.winner}" wins!`;
		} else {
			return '';
		}
	}

	render() {
		return (<div className="board">
			<div className="table">
				{this.renderCells()}
			</div>
			<div className="control-panel">
				<ControlPanel 
					steps={this.state.steps} 
					player={this.state.player === "X"? "O" : "X"}
					history={this.state.history}
					onNewClick={this.onNewClick}
					onHistoryClick={this.onHistoryClick}
				/>
			</div>
			<MessagePanel msg={this.getMessage()} />
		</div>);
	}
}

export default Board;