import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Home from './components/pages/Home'
import ViewBooks from './components/pages/admin/ViewBooks'
import AddBook from './components/pages/admin/AddBook'
import EditBook from './components/pages/admin/EditBook'
import Login from './components/pages/admin/Login'
import FeaturedBooks from './components/pages/FeaturedBooks'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/featuredbooks' component={FeaturedBooks} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/viewbooks' component={ViewBooks} />
        <PrivateRoute path='/addbook' component={AddBook} />
        <PrivateRoute path='/editbook' component={EditBook} />
      </Switch>
    </Router>
  )
}

export default App
