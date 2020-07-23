import React, { Component } from 'react';

    class Footer extends Component {
        constructor(props) {
            super(props);
        }

    render() {

        return (
            <footer className="site-footer">
                <nav className="navbar navbar-expand navbar-dark d-none d-md-block">
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
                            <li className="nav-item">
                                <a className="navbar-brand" href="#">
                                    <img id="navLogoBottom" src="/assets/images/logo.png" className="img-fluid" />
                                </a>
                            </li>
                            <li className="nav-text">
                                <p id="copyright">© 2020 Oberembt</p>
                            </li>
                        </ul>
                    </div>
                </nav>
            </footer>
        )
  }
}

export default Footer;
