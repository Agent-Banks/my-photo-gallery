import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import SampleData from './sample-data.json'
import CategoryList from './components/CategoryList'
import { PhotoList } from './components/PhotoList'
import { PhotoDetails } from './components/PhotoDetails'

class App extends Component {
  render() {
    return (
      <Router>
        <body>
          <Header />
          <main>
            <Route exact path="/">
              <CategoryList />
            </Route>
            <Route
                exact
                path="/:theNameOfTheCategoryWeWantToLookAt"
                component={PhotoList}
              />
              <Route
                path="/:theNameOfTheCategoryWeWantToLookAt/:arrayIndexOfThePhoto"
                component={PhotoDetails}
              />
          </main>
        </body>
      </Router>
    )
  }
}

export default App
