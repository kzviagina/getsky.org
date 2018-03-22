import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import LatestAdverts from './LatestAdverts';
import SearchAdverts from './SearchAdverts';
import Registration from './Registration';
import Login from './Login';
import PostingsBuy from './PostingsBuy';
import AdvertDetails from './AdvertDetails';

const Routes = ({ match }) => {
    return (
        <Switch>
            <Route path={`/search`} component={SearchAdverts} />
            <Route path={`/register`} component={Registration} />
            <Route path={`/login`} component={Login} />
            <Route path={`/postings/buy`} component={PostingsBuy} />
            <Route path={`/post/:id`} component={AdvertDetails} />
            <Route path={`/`} component={LatestAdverts} />
        </Switch>
    );
};

Routes.propTypes = {
    match: PropTypes.shape({
        url: PropTypes.string.isRequired,
    }).isRequired,
};

export default Routes;
