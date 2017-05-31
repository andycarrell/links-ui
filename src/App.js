import React, { Component } from 'react';

import LinkList from './LinkList';

import { mockLinks } from './mockLinks';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.onDoneClick = this.onDoneClick.bind(this);

		this.state = {
			links: [],
			loading: false,
		};
	}

	componentWillMount() {
		this.setState(() => ({ loading: true }));
	}

	componentDidMount() {
		this.setState(() => ({
			loading: false,
			links: mockLinks,
		}));
	}

	onDoneClick(id) {
		this.setState(({ links: prevLinks }) => ({
			links: prevLinks.filter(l => l.id !== id)
		}));
	}

	render() {
		const list = this.state.loading || (
			<LinkList
				links={this.state.links}
				onDoneClick={this.onDoneClick}
			/>
		);

		return (
			<div>
				<div className="lky-header">
					<h2>Links</h2>
				</div>
				<div className="lky-body">
					<div className="lky-input-container">
						<div className="h-fullwidth">
							<div className="lky-input-wrapper">
								<div>Title</div>
								<input className="lky-input" />
							</div>
							<div className="lky-input-wrapper">
								<span>Link</span>
								<input className="lky-input" />
							</div>
						</div>
						<button className="lky-link-button">
							Save
						</button>
					</div>
					{list}
				</div>
			</div>
		);
	}
}

export default App;
