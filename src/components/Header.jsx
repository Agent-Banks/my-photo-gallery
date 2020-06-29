import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
export default class Header extends Component {
  render() {
    return (
      <header className="jumbotron jumbotron-fluid">
        <div class="container">
          <Link to="/">
            <h1 class="display-4">Fluid jumbotron</h1>{' '}
          </Link>
          <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </header>
    )
  }
}
