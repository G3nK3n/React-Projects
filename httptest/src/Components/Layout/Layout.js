import React, { Component } from 'react';
import Form from '../Form/Form';
import axios from '../../axios-test';

class Layout extends Component {

    state = {
        name: 'Ken',
        desc: 'Another Test'
    }

    someHandler = () => {
        
        const names = {
            name: this.state.name, 
            desc: this.state.desc
        }
        axios.post('/names.json', names)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    render() {
        return(
            <div>
                <Form clicked={this.someHandler}/>
            </div>
        )
    }
}

export default Layout;