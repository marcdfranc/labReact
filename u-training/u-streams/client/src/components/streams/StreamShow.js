import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from "../../actions";
import flv from 'flv.js';

class StreamShow extends React.Component {

	constructor(props) {
		super(props);
		this.videoRef = React.createRef();
	}

	componentDidMount() {
		if (!this.props.stream) {
			const { id } = this.props.match.params;
			this.props.fetchStream(id);
		}
		this.buildPlyer();
	}
	
	componentDidUpdate() {
		this.buildPlyer();
	}

	componentWillUnmount() {
		this.player.destroy();
	}

	buildPlyer() {
		const urlFlv = `http://localhost:8000/live/${this.props.match.params.id}.flv`;
		
		console.log(urlFlv);

		if (this.player || !this.videoRef.current) {
			return;
		} else {
			console.log('Passou por aqui');

			this.player = flv.createPlayer({
				type: 'flv',
				url: urlFlv
			});

			this.player.attachMediaElement(this.videoRef.current);
			this.player.load();
		}
	}

	render() {
		if (!this.props.stream){
			return <div>Loading...</div>
		}

		const {title, description} = this.props.stream;

		return (<div>
			<video ref={this.videoRef} style={{ width: '100%'}} controls />
			<h1>{title}</h1>
			<h5>{description}</h5>
		</div>);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
}


export default connect(mapStateToProps, {fetchStream})(StreamShow);