import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage-component'
import './App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/topics" component={TopicsList} /> */}
        {/* <Route exact path="/topics/:topicId" component={TopicDetail} /> */}
      </Switch>
    </div>
  )
}

export default App
