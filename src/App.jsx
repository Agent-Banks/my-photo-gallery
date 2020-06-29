import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import SampleData from './sample-data.json'
import CategoryList from './components/CategoryList'
import { PhotoList } from './PhotoList'
import { PhotoDetails } from './PhotoDetails'

class App extends Component {
  render() {
    const pandasToRender = (
      <PhotoList
        title={SampleData.pandas.title}
        description={SampleData.pandas.description}
        photos={SampleData.pandas.photos}
        categoryType="pandas"
        key="pandas"
      />
    )

    const miniaturesToRender = (
      <PhotoList
        title={SampleData.miniatures.title}
        description={SampleData.miniatures.description}
        photos={SampleData.miniatures.photos}
        categoryType="pandas"
        key="pandas"
      />
    )

    return (
      <Router>
        <body>
          <Header />
          <main>
            <section>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="#">Library</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Data
                  </li>
                </ol>
              </nav>
            </section>
            <Route exact path="/">
              <CategoryList />
            </Route>
            <Route exact path="/pandas">{pandasToRender}</Route>
            <Route exact path="/miniatures">{miniaturesToRender}</Route>
            <Route
              exact
              path={'/:categoryType/:id'}
              component={PhotoDetails}
            ></Route>
          </main>
        </body>
      </Router>
    )
  }
}

export default App
