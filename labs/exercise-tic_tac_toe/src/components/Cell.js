import React from 'react';

class Cell extends React.Component {
	
	onClick = (e) => {
		this.props.onCellClick(this.props.row, this.props.col);
	}

	render() {
		const content = this.props.content? this.props.content : <p>&nbsp;</p>;
		return (<div className={this.props.decoration}>
			<button onClick={this.onClick}>{content}</button>
		</div>);
	}
}



export default Cell;