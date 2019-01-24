import React, { Component } from 'react';
import TheComponent from './SomeComponent';

export default class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: [] 
            //Creating array for the names of the games
        }

        this.eachComments = this.eachComments.bind(this);
        this.removeComment = this.removeComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.addComment = this.addComment.bind(this);        
    }

    addComment() {
        var arr = this.state.comments;
        arr.push((this.refs.someText).value);
        this.setState({comments:arr});
    }

    removeComment(i) {
        var arr = this.state.comments;
        arr.splice(i, 1);
        this.setState({comments:arr});
    }

    updateComment(addText, i) {
        var arr = this.state.comments;
        arr[i] = addText;
        this.setState({comments:arr});
    }

    eachComments(text, i) {
        return (
            <TheComponent key={i} index={i} updateTextComment={this.updateComment} deleteFromBoard={this.removeComment}>
                {text}
            </TheComponent>);
    }

    render() {
        return(
            <div>
                <button onClick={this.addComment.bind(null, 'Something')}>Add New</button>
                <textarea ref="someText"></textarea>
                <div>
                    {this.state.comments.map(this.eachComments)}
                </div>
            </div>
        );
    }
}