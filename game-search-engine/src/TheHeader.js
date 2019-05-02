import React, { Component } from 'react';

export default class TheHeader extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">Search Games</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            {/*<li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#">Disabled</a>
                            </li>
                            */}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}