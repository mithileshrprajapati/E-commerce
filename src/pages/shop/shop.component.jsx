import React from "react";
import CollectionOverview from "../../component/collection-overview/collection-overview.component";
import { Route } from "react-router-dom";
import {
	firestore,
	convertCollectionSnapshotToMap,
} from "../../component/firebase/firebase.utils";
import CollectionPage from "../../pages/CollectionPage/CollectionPage.component";
import { connect } from "react-redux";
import { updateCollections } from "../../component/Redux/shop/shop.Action.js";
import WithSpinner from "../../component/with-spinner/with-spinner.component";
//import FormInput from "../../component/form-input/form-input.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
	state = {
		loading: true,
	};
	unsubcriberFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

	 collectionRef.get().then(snapshot => {
				const collectionsMap = convertCollectionSnapshotToMap(snapshot);
				updateCollections(collectionsMap);
				this.setState({ loading: false });
			}
		);
	}
	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionMap) =>
		dispatch(updateCollections(collectionMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
