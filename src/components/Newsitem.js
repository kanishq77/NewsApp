import React, { Component } from "react";

export class Newsitem extends Component {
	render() {
		let { title, description, imgurl, newsurl } = this.props;
		return (
			<div
				className="card my-3"
				style={{ width: "19rem", height: "27rem	" }}
			>
				<img src={imgurl} className="card-img-top" alt="..." />
				<div className="card-body d-flex flex-column">
					<h5 className="card-title">{title}...</h5>
					<p className="card-text">{description}...</p>
					<a
						href={newsurl}
						rel="noreferrer"
						target="_blank"
						className="btn btn-smi  btn-dark mt-auto"
					>
						Read more
					</a>
				</div>
			</div>
		);
	}
}

export default Newsitem;
