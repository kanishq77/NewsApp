import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
export class News extends Component {
	constructor() {
		super();
		// console.log("Hello this is a constructor from news component");
		this.state = {
			articles: [],
			loading: true,
			page: 1,
		};
	}
	async componentDidMount() {
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6b6580dc28144d97a87cf61366ed4104&page=1&pageSize=${this.props.pageSize}`;

		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
	}
	handlePrevClick = async () => {
		let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6b6580dc28144d97a87cf61366ed4104&page=${
			this.state.page - 1
		}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			page: this.state.page - 1,
			articles: parsedData.articles,
			loading: false,
		});
	};
	handleNextClick = async () => {
		if (
			this.state.page + 1 >
			Math.ceil(this.state.totalResults / this.props.pageSize)
		) {
		} else {
			let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6b6580dc28144d97a87cf61366ed4104&page=${
				this.state.page + 1
			}&pageSize=${this.props.pageSize}`;
			this.setState({ loading: true });
			let data = await fetch(url);
			let parsedData = await data.json();
			this.setState({
				page: this.state.page + 1,
				articles: parsedData.articles,
				loading: false,
			});
		}
	};

	render() {
		return (
			<div className="container my-3">
				<h1 className="text-center">Top Headlines</h1>
				{this.state.loading && <Spinner />}
				<div className="row">
					{!this.state.loading &&
						this.state.articles.map((element) => {
							return (
								<div className="col md-3" key={element.url}>
									<Newsitem
										title={
											element.title
												? element.title.slice(0, 50)
												: ""
										}
										description={
											element.description
												? element.description.slice(
														0,
														60
												  )
												: ""
										}
										imgurl={
											element.urlToImage
												? element.urlToImage
												: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFYzSZutY2kS3ZPj7N44jYgKC4cgKFYHAC7cL2ZzN4Rm8xbm_chQBKc4pY6ncf5S0tMg&usqp=CAU"
										}
										newsurl={element.url}
									></Newsitem>
								</div>
							);
						})}
				</div>
				<div className="container d-flex  justify-content-between my-4">
					<button
						disabled={this.state.page <= 1}
						type="button"
						className="btn btn-dark "
						onClick={this.handlePrevClick}
					>
						&larr; Prev
					</button>
					<button
						disabled={
							this.state.page + 1 >
							Math.ceil(
								this.state.totalResults / this.props.pageSize
							)
						}
						type="button"
						className="btn btn-dark "
						onClick={this.handleNextClick}
					>
						Next &rarr;
					</button>
				</div>
			</div>
		);
	}
}

export default News;
