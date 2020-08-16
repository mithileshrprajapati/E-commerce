import React from "react";
import { CollectionPreview } from "../../component/collection-preview/collectionPreview.componenet";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../component/Redux/shop/shop.selector";

const CollectionOverview = ({ Collections }) => (
	<div className="collection-overview">
		{Collections.map(({ id, ...otherCollectionPreviews }) => (
			<CollectionPreview key={id} {...otherCollectionPreviews} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	Collections: selectCollectionForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
