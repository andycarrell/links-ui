import React, { Component } from 'react';

import LinkList from './LinkList';

import { mockLinks } from './mockLinks';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

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

	render() {
		return (
			<div className="app">
				<div className="app-header">
					<h2>Links</h2>
				</div>
				<br />
				{this.state.loading ||
					<LinkList links={this.state.links} />
				}
			</div>
		);
	}
}

export default App;
