import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router';
import { Footer } from '../../components/Common/Footer';
import { Header } from '../../components/Common/Header';
import { ProductDetail } from './components/ProductDetail/ProductDetail';
import { ListPage } from './ListPage';


export function ProductPage() {
  const match = useRouteMatch();
  return (
    <div>
      <Header />
      <Switch>
        <Route path={match.url} component={ListPage} exact />
      </Switch>
      <Switch>
        <Route path={`${match.url}/:slug`} component={ProductDetail}/>
      </Switch>
      
      <Footer />
    </div>

  )
}
