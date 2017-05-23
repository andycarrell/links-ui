import React from 'react';

const LinkItem = props => (
	<a
		className="lky-link-text"
		target="_blank"
		rel="noopener noreferrer"
		href={props.url}
	>
		{props.title}
	</a>
);

const LinkList = ({ links }) => (
	<div>
		{
			links.map(link => (
				<div className="lky-link" key={link.id}>
					<LinkItem {...link} />
				</div>
			))
		}
	</div>
);

export default LinkList;
