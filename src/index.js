import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Main from './Main.js'
import Header from './Header.js'

import { getURL, getPatID }  from './utils/smart_setup.js'

const FHIR = window.FHIR;

const FHIR_Client = FHIR.client({
  serviceUrl: getURL(),
  auth: {
        type: 'none'
  }

});

const Context_FHIR_Client = FHIR.client({
  serviceUrl: getURL(),
  patientId: getPatID(),

});

// const Main = () => (
//   <main>
//     <Switch>
// {/*      <Route exact path='/' component={Home}/>
//       <Route path='/roster' component={Roster}/>
//       <Route path='/schedule' component={Schedule}/> */}
//     </Switch>
//   </main>
// )

// const Header = () => (
//   <header>
//     <nav>
//       <ul>
//         <li><Link to='/'>Home</Link></li>
//         <li><Link to='/roster'>Roster</Link></li>
//         <li><Link to='/schedule'>Schedule</Link></li>
//       </ul>
//     </nav>
//   </header>
// )

const App = () => (
  <div>
    <Header api={FHIR_Client.api} ptapi={Context_FHIR_Client.api} />
    <Main api={FHIR_Client.api} ptapi={Context_FHIR_Client.api} />
  </div>
)

ReactDOM.render((
    <BrowserRouter basename="/">
  	    <App />
    </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();

