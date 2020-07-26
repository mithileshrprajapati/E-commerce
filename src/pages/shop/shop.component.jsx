import React from "react";
import ShopData from "./ShopData";
import { CollectionPreview } from "../../component/collection-preview/collectionPreview.componenet";

class ShopPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Collections: ShopData,
		};
	}
	render() {
		const { Collections } = this.state;
		return (
			<div className="shop-page">
				{Collections.map(({ id, ...otherCollectionPreviews }) => (
					<CollectionPreview key={id} {...otherCollectionPreviews} />
				))}
			</div>
		);
	}
}
export default ShopPage;
