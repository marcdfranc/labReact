import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import AprovalCard from "./AprovalCard";

const App = () => {
	
	return (
		<div className="ui container comments">
			<AprovalCard>
				<div>
					<h4>Warning!</h4>
					Are you sure you want to do this?
				</div>
			</AprovalCard>
			<AprovalCard>
				<CommentDetail 
					avatar={faker.image.avatar()}
					author={faker.name.firstName()} 
					timeAgo={faker.date.weekday() + ' ' + faker.date.past().toLocaleTimeString()}
					postContent={faker.lorem.sentence()}
				/>
			</AprovalCard>
			<AprovalCard>
				<CommentDetail 
					avatar={faker.image.avatar()}
					author={faker.name.firstName()} 
					timeAgo={faker.date.weekday() + ' ' + faker.date.past().toLocaleTimeString()}
					postContent={faker.lorem.sentence()}
				/>
			</AprovalCard>
			<AprovalCard>
				<CommentDetail 
					avatar={faker.image.avatar()}
					author={faker.name.firstName()} 
					timeAgo={faker.date.weekday() + ' ' + faker.date.past().toLocaleTimeString()}
					postContent={faker.lorem.sentence()}
				/>
			</AprovalCard>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));

