import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: '1086373743901-ov133it784fkioknl5kvj0qe8e0r6i8f.apps.googleusercontent.com',
				scope: 'email'
			}).then(() => {
				this.auth = window.gapi.auth2.getAuthInstance();
				this.onAuthChange(this.auth.isSignedIn.get());
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}
	
	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	}

	onSignInClick = () => {
		console.log("Sign In");
		this.auth.signIn();
	}
	
	onSignOutClick = () => {
		console.log(this.auth);
		
		this.auth.signOut();
	}

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (<button onClick={this.onSignOutClick} className="ui red google button">
				<i className="google icon"/>
				Sign out
			</button>);
		} else {
			return (<button onClick={this.onSignInClick} className="ui red google button">
				<i className="google icon"/>
				Sign in with google
			</button>);			
		}
	}

	render() { 
		return (<div>
			{this.renderAuthButton()}
		</div>);
	}
}
 
const mapStateToProps = state => {
	return {
		isSignedIn: state.auth.isSignedIn
	};
}

export default connect(mapStateToProps, {signIn, signOut })(GoogleAuth);