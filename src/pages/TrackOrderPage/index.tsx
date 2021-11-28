import * as React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router';
import { Footer } from '../../components/Common/Footer';
import { Header } from '../../components/Common/Header';
import { OrderDetail } from './OrderDetail';
import { OrderList } from './OrderList';
import { TrackOrder } from './TrackOrder';

export interface TrackOrderPageProps {
}

export function TrackOrderPage(props: TrackOrderPageProps) {
    const match = useRouteMatch();
    return (
        <>
            <Header />
            <Switch>
                <Route path={match.url} component={TrackOrder} exact/>
            </Switch>
            <Switch>
                <Route path={`${match.url}/list/:orderId`} component={OrderDetail}/>
            </Switch>
            <Switch>
                <Route path={`${match.url}/list`} component={OrderList} exact/>
            </Switch>
            <Footer />
        </>
    );
}
