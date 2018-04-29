import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import MovieResults from './Components/MovieResults/MovieResults'
import userList from './Components/userList/userList'

export default(
  <HashRouter>
      <Switch>
        <Route exact path='/' component={MovieResults}/>
        <Route path='/user-list' component={userList}/>
      </Switch>
  </HashRouter>
)