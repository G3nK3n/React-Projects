import React, { Component } from 'react';
import ListComponent from './ListComponent';

export default class FullList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todo: []
        }

        this.addList = this.addList.bind(this);
        this.removeList = this.removeList.bind(this);
        this.eachList = this.eachList.bind(this);
        this.updateList = this.updateList.bind(this);
    
    }

    addList() {
        var arr = this.state.todo;
        arr.push((this.refs.someText).value);
        this.setState({todo:arr});
    }

    removeList(i) {
        var arr = this.state.todo;
        arr.splice(i, 1);
        this.setState({todo:arr});
    }

    updateList(addText, i) {
        var arr = this.state.todo;
        arr[i] = addText;
        this.setState({todo:arr});
    }

    eachList(text, i) {
        return (
            <ListComponent key={i} index={i} updateTheList={this.updateList} removeFromList={this.removeList}>
                {text}
            </ListComponent>
        );
    }

    render() {
        return(
            <div>
                <h1>ToDo List</h1>
                <p>NOW USE CSS AND BOOTSTRAP</p>
                <form>
                    <label>ToDo</label>
                    <input ref="someText" type="text" />
                    <button type="button" onClick={this.addList}>Add</button>
                </form>
                

                <h2> Full List </h2>
                <div>
                    {this.state.todo.map(this.eachList)} 
                    {/* Creates same amount of components as the elements in the array */}
                </div>
            </div>
        );
    }

}