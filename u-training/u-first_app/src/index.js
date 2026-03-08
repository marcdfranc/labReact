import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function transform(offset) {
	const cos = Math.cos(offset);
	const sin = Math.sin(offset);
	
	console.log(cos);
	return {
		transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`
	 };
}

class App extends React.Component {
	
	constructor (props) {
		super(props);
		this.state = {
			styleOne: {},
			styleTwo: {}
		};
	}

	onMouseMove(event) {
		this.setState({
			styleOne : transform(event.clientX / event.clientY),
			styleTwo : transform(event.clientX / event.clientY)
		});
	}

	render() {
		return <div onMouseMove={ (event) => this.onMouseMove(event) } >
			<div className="panel" style={this.state.styleOne}/>
			<div className="panel" style={this.state.styleTwo}/>
		</div>;
	}
}

ReactDOM.render(
	<React.StrictMode>
	  <App />
	</React.StrictMode>,
	document.getElementById('root')
  );

