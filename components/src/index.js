import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// ./ => currently directory
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentText="Nice blog post!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                author="Alex" 
                timeAgo="Today at 2:00AM" 
                commentText="Great subject!" 
                avatar={faker.image.avatar()}/>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" commentText="I like the writing!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
        
    );
 }


// show my App component in the div with id=root in the root index.html
 ReactDOM.render(<App />, document.querySelector('#root'));