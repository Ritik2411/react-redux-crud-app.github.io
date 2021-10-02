import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Add_contact from './Components/Add_contact';
import Display_contacts from './Components/Display_contacts';
import Update_contacts from './Components/Update_contacts';
import './App.css'

function App() {
  return (
    <Router>
      <div className="navbar">
        <div className="nav_container">
          <Link className="nav_brand" to="/">React Redux Contact App</Link>
        </div>                
      </div>
      <Switch>
        <Route path="/" exact>
          <Display_contacts/>
        </Route>

        <Route path="/addcontacts">
          <Add_contact/>
        </Route>

        <Route path="/updatecontacts/:id">
          <Update_contacts/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
