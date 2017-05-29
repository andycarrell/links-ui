import React from 'react';

const withKey = (Cmp, key = 'id') => props => (
	<Cmp key={props[key]} {...props} />
);

const LinkItem = props => (
	<div className="lky-link">
		<a
			className="lky-link-text"
			target="_blank"
			rel="noopener noreferrer"
			href={props.url}
		>
			{props.title}
		</a>
	</div>
);

const LinkList = ({ links }) => (
	<div>{links.map(withKey(LinkItem))}</div>
);

export default LinkList;
