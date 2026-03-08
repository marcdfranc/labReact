import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner";

class App extends React.Component {
	// optional state initialization outside the constructor
	state = {
		lat: null,
		errorMessage: ''
	};

	/*constructor (props) {
		super(props);

		// THIS IS ONLY TIME TO DO DIRECT ASSIGNMENT TO STATE
		this.state = {
			lat: null,
			errorMessage: ''
		};
	}*/
	
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({lat: position.coords.latitude}),
			(err) => this.setState({errorMessage: err.message})
		);
	}

	/* componentDidUpdate() {
		console.log('My componente was just updated - re-rendered');
	}*/

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		} else if(this.state.lat && !this.state.errorMessage) {
			return <SeasonDisplay lat={this.state.lat} />;
		} else {
			return <Spinner message="Please accept location request." />;
		}
	}

	// React says we have to define render!!!
	render() {
		return <div className="border red">
			{this.renderContent()}
		</div>
	}
}

ReactDOM.render(<App />, document.getElementById('root'));