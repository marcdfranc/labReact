import React from 'react';
import MenuItem from './MenuItem';

class ControlPanel extends React.Component {

	renderMenuItens = () => {		
		return this.props.steps.map((step, i) => {
			return (<li key={i} className="pure-menu-item pure-menu-selected">
				<MenuItem 
					step={step}
					index={i}
					onClick={this.onHistoryClick}
				/>
			</li>);
			
		});
	}

	onHistoryClick = (index) => {
		 this.props.onHistoryClick(this.props.history.slice(0, index + 1), this.props.steps.slice(0, index + 1));
	}

	render() {
		// console.log(this.props);
		return (<div>
			<button onClick={this.props.onNewClick} className="pure-button pure-button-primary">New Game</button>
			<div className="menu">
				<div className="pure-menu custom-restricted-width">
					<ul className="pure-menu-list">
						{this.renderMenuItens()}
					</ul>
				</div>
			</div>
		</div>);
	}
}

export default ControlPanel;