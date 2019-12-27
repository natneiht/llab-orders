import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import CustomerFormInput from './components/CustomerFormInput';
import AdminLogin from './containers/AdminLogin';
import OrderManager from './containers/OrderManager';
import SearchPage from './containers/SearchPage';

function App() {
  return (
    <div className="App">
				<BrowserRouter>
					{/* <PrimarySearchAppBar /> */}
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/login" component={AdminLogin} />
						<Route exact path="/manager" component={OrderManager} />
						<Route exact path="/search" component={SearchPage} />
						{/* <Route component={NotFound} /> */}
						
					</Switch>
					{/* <Footer /> */}
				</BrowserRouter>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
