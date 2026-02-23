import React from 'react';

class SearchBar extends React.Component {
	state = {term: ''};

	onChange = (e) => {
		this.setState({term: e.target.value });
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.term);
	}

	render() {
		return (<div className="search-bar ui segment">
			<form onSubmit={this.onSubmit} className="ui form">
				<div className="field">
					<label htmlFor="video-input">Video Search</label>
					<input 
						id="video-input" 
						value={this.state.term} text="text" 
						onChange={this.onChange}
					/>
				</div>
			</form>
		</div>);
	}
}

export default SearchBar;