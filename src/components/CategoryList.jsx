import React, { Component } from 'react'
import SampleData from '../sample-data.json'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'


class Category extends Component {
  render() {
    return (
      <div className="column">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <h2>
                <Link to={`/${this.props.categoryName}`}>
                  {this.props.title}
                </Link>
              </h2>
              <p>{this.props.description}</p>
            </div>
          </div>
          <div className="card-image">
            <figure className="image">
              <img src={this.props.imageURL} alt={this.props.title} />
            </figure>
          </div>
        </div>
      </div>
    )
  }
}

export default class CategoryList extends Component {
  render() {
    const categoryNames = Object.keys(SampleData)

    return (
      <div>
        <section>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link class="breadcrumb-item" to="/">
                Home
              </Link>
            </li>
          </ol>
        </nav>
        </section>
        <section className="cards d-flex flex-row justify-content-center flex-wrap">
        <div className="columns is-mobile">
          {categoryNames.map((categoryName, index) => {
            const categoryDetails = SampleData[categoryName]
            const firstPhoto = categoryDetails.photos[0]

            return (
              <Category
                key={index}
                categoryName={categoryName}
                title={categoryDetails.title}
                description={categoryDetails.description}
                imageURL={firstPhoto.imageURL}
              />
            )
          })}
        </div>
        </section>
      </div>
    )
  }
}
