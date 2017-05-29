import React from 'react';

const withKey = (Cmp, key = 'id') => props => (
	<Cmp key={props[key]} {...props} />
);

const Link = props => (
	<div className="lky-link-container">
		<div className="h-truncate">
			<a
				className="lky-link-link"
				target="_blank"
				rel="noopener noreferrer"
				href={props.url}
			>
				{props.title}
			</a>
		</div>
		<div>
			<button
				className="lky-link-button"
				onClick={() => { props.onClick(props.id); }}
			>
				Done
			</button>
		</div>
	</div>
);

const LinkListItem = withKey(Link);

const LinkList = ({ links, onDoneClick }) => (
	<div>
		{links.map(link => (
			<LinkListItem
				onClick={onDoneClick}
				{...link}
			/>
		))}
	</div>
);

export default LinkList;
