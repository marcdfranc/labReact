export interface BoardItem {
	color: string,
	icon: string | null,
	x: number
	y: number
}

export interface Game {
	boardItems : string[][]
}


export class Game implements Game {
	boardItems : string[][] = [
		['', '', ''],
		['', '', ''],
		['', '', '']
	];
	
	constructor() {
		
	}
}