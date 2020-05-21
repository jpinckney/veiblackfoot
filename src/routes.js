import React from 'react'

import { Switch, Route } from 'react-router-dom'

import NewEquip from './components/NewEquip'
import UsedEquip from './components/UsedEquip'
import ValleyIrrigation from './components/ValleyIrrigation'
import Contact from './components/Contact'
import Home from './components/Home'

export default (

<Switch>
  <Route exact path ='/' component={Home}/>
  <Route path ='/new-equipment' component={NewEquip}/>
  <Route path ='/used-equipment' component={UsedEquip}/>
  <Route path ='/valley-irrigation' component={ValleyIrrigation}/>
  <Route path ='/contact' component={Contact}/>
</Switch >

)