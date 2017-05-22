import React from 'react';

const LinkItem = props => (
	<a
		href={props.url}
		target="_blank"
		rel="noopener noreferrer"
	>
		{props.title}
	</a>
);

const LinkList = ({ links }) => (
	<div id="list">
		{links.map(link => (
			<div key={link.id}>
				<LinkItem {...link} />
				<br />
				<br />
			</div>
		))}
	</div>
);

export default LinkList;
