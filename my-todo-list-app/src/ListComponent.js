import React, { Component } from 'react';

export default class ListComponent extends Component {

    constructor(props){
        super(props);

        this.state = {editing:false}

        this.renderEdit = this.renderEdit.bind(this);
        this.renderNormal = this.renderNormal.bind(this);
        this.deleteFromList = this.deleteFromList.bind(this);
        this.editList = this.editList.bind(this);
        this.saveList = this.saveList.bind(this);

    }

    deleteFromList() {
        this.props.removeFromList(this.props.index);
    }

    editList() {
        this.setState({editing:true});
    }

    saveList() {
        this.props.updateTheList((this.refs.newText).value, this.props.index);
        this.setState({editing:false});
    }

    renderEdit() {
        return(
            <div className="editList">
                <textarea ref="newText" defaultValue={this.props.children}></textarea>
                <button onClick={this.saveList}>Save</button>
            </div>
        );
    }

    renderNormal() {
        return (
            <div className="eachList">
                <p>{this.props.children}</p>
                <button onClick={this.editList}>Edit</button>
                <button onClick={this.deleteFromList}>Remove</button>
            </div>
        );
    }

    render() {
        if(this.state.editing){
            return this.renderEdit();
        }
        else {
            return this.renderNormal();
        }
    }

}