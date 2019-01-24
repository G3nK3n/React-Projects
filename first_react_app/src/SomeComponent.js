import React, { Component } from 'react';

export default class SomeComponent extends Component {

    constructor(props) {

        super(props);

        this.state = {editing:false};

        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this)

    }

    edit()
    {
       this.setState({editing:true});
    }

    save()
    {
       this.props.updateTextComment((this.refs.newText).value, this.props.index);
       this.setState({editing:false});
    }

    remove()
    {
        this.props.deleteFromBoard(this.props.index);
    }

    renderNormal() {
        return(
            <div>
                <div>{this.props.children}</div>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.remove}>Remove</button>
            </div>
        );
    }

    renderForm() {
        return(
            <div>
                <textarea ref="newText" defaultValue={this.props.children}></textarea>
                <button onClick={this.save}>Save</button>
            </div>
        );
    }

    render()
    {
        if(this.state.editing){
            return this.renderForm();
        }
        else{
            return this.renderNormal();
        }
    }    




}