import React from 'react'
import Toolbar from './components/Toolbar/Toolbar'
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder'
import CheckOut from './components/CheckOut/CheckOut'
import NotFound from './components/NotFound/NotFound'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const app = () => {

  return (
    <Router>
      <div>
        <Toolbar />

        <Switch>
          <Route exact path='/' component={BurgerBuilder} />
          <Route exact path='/checkout' component={CheckOut} />
          <Route exact path='/burgerbuilder' component={BurgerBuilder} />
          <Route component={NotFound} />
        </Switch>

      </div>

    </Router>

  )
}

export default app