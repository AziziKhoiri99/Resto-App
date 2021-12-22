import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { NavbarComponent, Footer } from './components'
import { Home, Sukses, Stepper } from './pages'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main className='mt-5'>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sukses" component={Sukses} exact />
            <Route path="/stepper" component={Stepper} exact />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    )
  }
}
