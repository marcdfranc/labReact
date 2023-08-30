import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

interface Props {
	player: string,
	positionX: number,
	positionY: number
	onCellClick : (i: number, x: number) => void
}

export const BoardCell = ({ player, onCellClick, positionX, positionY }: Props) => {
	const [classStyle, setclassStyle] = useState("");
	const [color, setColor] = useState("");
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	useEffect(() => {
		renderizeButton(player);
		setX(positionX);
		setY(positionY);
	}, [player, positionX, positionY])


	const renderizeButton = (itemSelected: string) => {
		switch (itemSelected) {
			case "X":
				setclassStyle("bi bi-x-lg");
				setColor("outline-danger");
				break;

			case "O":
				setclassStyle("bi bi-record");
				setColor("outline-primary");
				break;

				default:
					setclassStyle("");
					setColor("outline-secondary");
				break;
		}
	}

	
	return (
		<Card className='align-items-center'>
			<Card.Body>
				<Button variant={color} onClick={() => onCellClick(x, y)}>
					{classStyle === "" ? ("...") : (<i className={classStyle}></i>)}
				</Button>
			</Card.Body>
		</Card>
	)
}
