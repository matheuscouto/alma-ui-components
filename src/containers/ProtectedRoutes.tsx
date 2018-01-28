import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

import { isLoggedIn } from 'selectors';
import { IRootState } from 'routes';

import Home from 'routes/home/container';
import Movies from 'routes/movies/container';
import Wishlist from 'routes/wishlist/container';

import Header from 'components/Header';

interface IProps {
  data: IRootState;
}

const ProtectedRoutes = (props: IProps) => {
  const { data: { login } } = props;

  if (isLoggedIn(login)) {
    return (
      <>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/movies/now_playing" component={Movies} />
        <Route exact path="/movies/top_rated" component={Movies} />
        <Route exact path="/wishlist" component={Wishlist} />
      </>
    );
  } else {
    return <Redirect to="/login" />;
  }
};

function mapStateToProps(state: IRootState) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(ProtectedRoutes);
