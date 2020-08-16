import React from "react";
import MenuItem from "../menu-item/menu-item.componenet";
import "./directory.style.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../component/Redux/directory/directory.selector";
const Directory = ({ sections }) => (
	<div className="directory-items">
		{sections.map(({ id, ...otherSections }) => (
			<MenuItem key={id} {...otherSections} />
		))}
	</div>
);
const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
