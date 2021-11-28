import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Switch, useLocation } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import { NotFound } from './components/Common';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { TrackOrderPage } from './pages/TrackOrderPage';
import { ToastContainer } from 'react-toastify';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function App() {
  let query = useQuery();
  return (
    <div>


      <Switch>
        <Route path="/" exact component={HomePage} />

        <Route path="/products" component={ProductPage} />


        <Route path="/checkout" component={CheckoutPage} />


        <Route path="/cart" component={CartPage} />

        <Route path="/orders" component={TrackOrderPage} />

        <Route component={NotFound} />

      </Switch>
      <ToastContainer newestOnTop={true}
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
}

export default App;
