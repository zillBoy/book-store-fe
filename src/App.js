import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Home from './components/pages/Home'
import ViewBooks from './components/pages/admin/ViewBooks'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <PrivateRoute path='/viewbooks' component={ViewBooks} />
      </Switch>
    </Router>
  )
}

export default App
