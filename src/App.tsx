import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.scss'
import Home from './pages/Layout/index'
import Login from './pages/Login/index'

export default function App() {
  return (
    <Router>
      <div className="app">
		  <Switch>
			  <Route path='/' exact render={() => <Redirect to='/home' />} />
		  	<Route path='/home' component={Home} />
		  	<Route path='/login' component={Login} />
		  </Switch>
	  </div>
    </Router>
  )
}
