import React from "react";


export class Home extends React.Component {
    render() {
        return (
            <div className="container-slide">
                <div className="card bg-dark text-white">
                    <img className="card-img" src="../../images/img.jpg" alt="Card image"></img>
                    <div className="card-img-overlay">
                        <h5 className="card-title">Hello, World!</h5>
                        <p className="card-text">Learning by example...</p>
                    </div>
                </div>

                {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-thumbnail" src="../../images/img.jpg" alt="First slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="img-thumbnail" src="../../images/img2.jpg" alt="Second slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="img-thumbnail" src="../../images/img3.jpg" alt="Third slide"></img>
                        </div>
                    </div>
                </div> */}
                <hr />
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">About me</h5>
                        <p className="card-text">xxxxxxxxxxxxxxxxxxxxxxxx</p>
                        <div className="card w-25">
                            <div className="card-body">
                            <h5 className="card-title">Contact me</h5>
                                <p className="card-text">Linkedin</p>
                                <p className="card-text">Twitter</p>
                                <p className="card-text">GitHub</p>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    };
} 