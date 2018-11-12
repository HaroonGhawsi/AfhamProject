import React from "react";
import { Link } from "react-router";


export class Projects extends React.Component {
    render() {
        return (
            <div className="container">
                <header className="masthead">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="site-heading">
                                    <h1>Projects!</h1>
                                    <span className="subheading">A list of Projects developed till now.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container-content">
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">Project One</a>
                                    </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">Project Two</a>
                                    </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">Project Three</a>
                                    </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">Project Four</a>
                                    </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">Project Five</a>
                                    </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">Project Six</a>
                                    </h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x"></i>
                                                <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x"></i>
                                                <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x"></i>
                                                <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <p className="copyright text-muted">Copyright &copy; Haroon Ghawsi 2018</p>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
} 