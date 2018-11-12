import React from "react";


export class NewPost extends React.Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>Post Title</label>
                        <input className="form-control" placeholder="Enter Title" />
                        <small id="emailHelp" className="form-text text-muted">Title should be short and meaningful.</small>
                    </div>
                    <div className="form-group">
                        <label>Post Subtitle</label>
                        <input className="form-control" placeholder="Enter Subtitle" />
                        <small className="form-text text-muted">Subtitle should be short and meaningful.</small>
                    </div>
                    <div className="form-group">
                        <label>Post Content</label>
                        <textarea className="form-control" placeholder="Post Content" rows="10" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}