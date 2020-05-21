import React from 'react';

class MenuItem extends React.Component {

	onClick = () => {
		this.props.onClick(this.props.index);
	}
	
	render() {
		return (<button onClick={this.onClick}  className="pure-button-primary pure-menu-link">
			{`Player: ${this.props.step.player} => ${this.props.step.cords}`}
		</button>);
	}
}


export default MenuItem;