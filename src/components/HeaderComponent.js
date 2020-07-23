import React, { Component }  from 'react';

class Header extends Component {
        constructor(props) {
            super(props);
        }

    render() {
        return (
            <header>
                <div className="jumbotron jumbotron-fluid bg-secondary">
                    <div className="container">
                        <div className="row row-content">
                            <div className="col-sm-6 text-center">
                                <h1 id="jumbotronText">Ten Tenets for a Happier Life</h1>
                            </div>
                            <div className="col">
                                <a className="navbar-brand d-flex justify-content-center" href="#">
                                    <img id="navLogoTop" src="/assets/images/logo.png" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-sm navbar-dark sticky top">
                    <div className="container">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">GAME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">HOW TO PLAY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-text" id="loginText">
                                <a role="button" id="loginButton">
                                    <i className="fa fa-sign-in"></i> LOGIN
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;