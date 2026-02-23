import React from 'react';

const MessagePanel = ({msg}) => {
	if(msg){
		return (<div className="msg">
			<h1>{msg}</h1>
		</div>);
	} else {
		return <div></div>;
	}
}

export default MessagePanel;