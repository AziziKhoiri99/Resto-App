import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { NavbarComponent, Footer, Hasil, Login } from './components'
import { Home, Sukses, Stepper, Admin } from './pages'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main className='mt-5'>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sukses" component={Sukses} exact />
            <Route path="/hasil" component={Hasil} exact />
            <Route path="/stepper" component={Stepper} exact />
            <Route path="/admin" component={Admin} exact />
            <Route path="/login" component={Login} exact />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    )
  }
}
