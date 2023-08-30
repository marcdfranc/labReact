import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BoardCell } from '../../features/BoardCell'

interface Props {
	table: string[][],
	onCellClick : (i: number, x: number) => void
}

export const Board = ({table, onCellClick} : Props) => {
    return (<>
			<Container>
				{table.map((row, i) => (
					<Row key={`row-${i}`} className='p-3'>
						{row.map((col, j) => (
							<Col key={`cell_${i}-${j}`}>
								<BoardCell
									player={col}
									onCellClick={onCellClick}
									positionX={i}
									positionY={j}
								/>
							</Col>
						))}
					</Row>
				))}
			</Container>
		</>
  	)
}
