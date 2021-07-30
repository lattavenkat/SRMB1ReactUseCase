import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import LandingPage from './components/landing/LandingPage';
import AdminLogin from './components/admin/adLogin/AdminLogin';
import ManagerLogin from './components/manager/manlogin/ManagerLogin';
import CheckerLogin from './components/checker/chlogin/CheckerLogin';
import VendorLogin from './components/vendor/venlogin/VendorLogin';
import AdminDashboard from './components/admin/adDashboard/AdminDashboard';
import CheckerDashboard from './components/checker/chdashboard/CheckerDashboard';
import VendorDashboard from './components/vendor/vendashboard/VendorDashboard';
import ManagerDashboard from './components/manager/mandashboard/ManagerDashboard';
import RequestGoods from './components/admin/adDashboard/RequestGoods';
import Warehouse from './components/admin/adDashboard/Warehouse';
import AddCredentials from './components/admin/adDashboard/AddCredentials';
import AdminAlerts from './components/admin/adDashboard/AdminAlerts';

const App=() => {
  return (
    <header>
      <Router>
        {/* <LandingPage /> */}
        {/* <AdminDashboard/> */}
        

        
          <Switch>
           <Route exact path="/"  component={LandingPage} /> 
            <Route path="/adminlogin" component={AdminLogin} />
            <Route path="/managerlogin" component={ManagerLogin} />
            <Route path="/checkerlogin" component={CheckerLogin} />
            <Route path="/vendorlogin" component={VendorLogin} />
            <Route path="/admindashboard" component={AdminDashboard} />
             <Route path="/checkerdashboard" component={CheckerDashboard} />
            <Route path="/vendordashboard" component={VendorDashboard} />
            <Route path="/managerdashboard" component={ManagerDashboard} />
            <Route path="/requestgoods" component={RequestGoods} />
            <Route path="/warehouse" component={Warehouse} />
            <Route path="/addcredentials" component={AddCredentials} />
            <Route path="/adminalerts" component={AdminAlerts} />
            <Route path="/landingpage" component={LandingPage} />
          </Switch>
        
        
      </Router>
    </header>

    
  );
}

export default App;
