import React from 'react';
import { Link } from "react-router";

import { NewPost } from "./NewPost";

export class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidePost: false
        }
    }

    handleNewPostClick = () => {
        console.log("hidePost: ", this.state.hidePost);
        if (!this.state.hidePost) {
            this.setState({
                hidePost: true
            })
        }
        else {
            this.setState({
                hidePost: false
            });
        }
    }


    render() {
        return (
            <div className="container">
                <header className="masthead">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="site-heading">
                                    <h1>Tech Blog</h1>
                                    <span className="subheading">A Blog to explore technologies for full stack development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container-content">
                    <div className="clearfix">
                        <button className="btn btn-primary float-right" onClick={this.handleNewPostClick.bind(this)}>New Post</button>
                    </div>
                    {this.state.hidePost ? <NewPost/> : null}



                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="post-preview">
                                <Link to={"/post"}>
                                    <h2 className="post-title">
                                        Man must explore, and this is exploration at its greatest
              </h2>
                                    <h3 className="post-subtitle">
                                        Problems look mighty small from 150 miles up
              </h3>
                                </Link>
                                <p className="post-meta">Posted by
              <a href="#"> Haroon Ghawsi </a>
                                    on September 24, 2018</p>
                            </div>
                            <hr />
                            <div className="post-preview">
                                <Link to={"post"}>
                                    <h2 className="post-title">
                                        I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
              </h2>
                                </Link>
                                <p className="post-meta">Posted by
              <a href="#"> Haroon Ghawsi </a>
                                    on September 18, 2018</p>
                            </div>
                            <hr />
                            <div className="post-preview">
                                <Link to={"post"}>
                                    <h2 className="post-title">
                                        Science has not yet mastered prophecy
              </h2>
                                    <h3 className="post-subtitle">
                                        We predict too much for the next year and yet far too little for the next ten.
              </h3>
                                </Link>

                                <p className="post-meta">Posted by
              <a href="#"> Haroon Ghawsi </a>
                                    on August 24, 2018</p>
                            </div>
                            <hr />
                            <div className="post-preview">
                                <Link to={"post"}>
                                    <h2 className="post-title">
                                        Failure is not an option
              </h2>
                                    <h3 className="post-subtitle">
                                        Many say exploration is part of our destiny, but it’s actually our duty to future generations.
              </h3>
                                </Link>
                                <p className="post-meta">Posted by
              <a href="#"> Haroon Ghawsi </a>
                                    on July 8, 2018</p>
                            </div>
                            <hr />
                            <div className="clearfix">
                                <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
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