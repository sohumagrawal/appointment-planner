import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments'
}

function App () {
    return (
        <Router>
            <div className="App">
                <nav>
                    <NavLink to={ROUTES.CONTACTS} activeClassName='active'>
                        Contacts
                    </NavLink>

                    <NavLink to={ROUTES.APPOINTMENTS} activeClassName='active'>
                        Appointments
                    </NavLink>

                </nav>
                <p>asldfjlasjdf</p>
            </div>
        </Router>
    )
}

export default App;