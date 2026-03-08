import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const buttonText = {text: 'Click on me'};
	const labelText = 'Enter Name: ';

	return <div>
		<label className="label" htmlFor="name">{labelText}</label>
		<input id="name" type="text" />
		<button style={{ backgroundColor: 'blue', color: 'white' }}>
			{buttonText.text}
		</button>
	</div>;
}


ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);