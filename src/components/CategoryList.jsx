import React, { Component } from 'react'
import SampleData from '../sample-data.json'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

class Category extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h2>
            <Link to={`/${this.props.categoryName}`}>{this.props.title}</Link>
          </h2>
          <p>{this.props.description}</p>
        </div>
        <img
          class="card-img-top"
          src={this.props.imageURL}
          alt={this.props.title}
        />
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
        </section>
      </div>
    )
  }
}
