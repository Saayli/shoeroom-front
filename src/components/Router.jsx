import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import ProductList from './ProductList';
import Cart from './Cart';

const RouterDom = () => {
    return (
        <Router>
            <Switch>
                <Route path="/cart" component={Cart} />
                <Route path="/" component={ProductList} />
            </Switch>
        </Router>
    )
}
export default RouterDom;