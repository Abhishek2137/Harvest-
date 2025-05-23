import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import About from './views/about'
import Services from './views/services'
import Events from './views/events'
import Contact from './views/contact'
import Login from './views/login'
import Register from './views/register'
import Donate from './views/donate'
import Volunteer from './views/volunteer'
import Gallery from './views/gallery'
import Blog from './views/blog'
import FAQ from './views/faq'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} exact path="/about" />
        <Route component={Services} exact path="/services" />
        <Route component={Events} exact path="/events" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Login} exact path="/login" />
        <Route component={Register} exact path="/register" />
        <Route component={Donate} exact path="/donate" />
        <Route component={Volunteer} exact path="/volunteer" />
        <Route component={Gallery} exact path="/gallery" />
        <Route component={Blog} exact path="/blog" />
        <Route component={FAQ} exact path="/faq" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
