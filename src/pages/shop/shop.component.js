import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { updateCollections } from '../../redux/shop/shop.actions'
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component{
  state = {
    loading: true
  };
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    //quando collectionref mudar ou quando este codigo rodar pela primeira vez
    //isso e executado
    collectionRef.onSnapshot(async snapshot =>{
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap); //Este componente é que sabe quando que os collections foram atualizados
      this.setState({ loading: false });
    });
  }

  render(){
    const {match} = this.props;
    const {loading} = this.state;
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path }`}
                   render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/> }
                   />
            <Route
                render={ (props) => <CollectionPageWithSpinner isLoading={loading} {...props}/> }
                path={`${match.path}/:collectionId`}  />
        </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
