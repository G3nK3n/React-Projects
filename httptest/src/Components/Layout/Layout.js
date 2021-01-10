import React, { Component } from 'react';
//import Form from '../Form/Form';
import axios from '../../axios-test';

class Layout extends Component {

    state = {
        // persons: []
        name: '',
    };

    // componentDidMount () {
    //     axios.get('/users')
    //         .then(response => {
    //             console.log(response);
    //             this.setState({persons: response.data})
    //             //console.log(response.data);
    //         })
    // }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: this.state.name
        };

        axios.post('/users', {user})
            .then(response => {
                console.log(response);
                console.log(response.data);
            })
    }

    handleChange = event => {
        this.setState({name: event.target.value});
    }

    render() {
        // const testings = this.state.persons.map(test => {
        //     <p>{test.name}</p>
        // })
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person name: 
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Submit</button>

                </form>
                {/* {this.state.persons.map(person => (
                    <p>{person.name}</p>
                ))} */}
            </div>
        )
    }
}

export default Layout;