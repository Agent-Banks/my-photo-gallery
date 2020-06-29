import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import SampleData from '../sample-data.json'

class PhotoListPhoto extends Component {
  render() {
    return (
      <div key={this.props.index} className="column is-one-third">
        <div class="card">
            <div class="card-body d-flex flex-column align-items-center">
                <Link
                  to={`/${this.props.theNameOfTheCategoryWeWantToLookAt}/${this.props.index}`}
                >
                  <img
                  class="card-img-top"
                    src={this.props.photo.imageURL}
                    alt={this.props.photo.title}
                  />
                </Link>
                <figcaption>
                  <Link
                    to={`/${this.props.theNameOfTheCategoryWeWantToLookAt}/${this.props.index}`}
                  >
                    {this.props.photo.title}
                  </Link>
                </figcaption>
          </div>
        </div>
      </div>
    )
  }
}

export class PhotoList extends Component {
  render() {

    const theNameOfTheCategoryWeWantToLookAt = this.props.match.params
      .theNameOfTheCategoryWeWantToLookAt

      const category = SampleData[theNameOfTheCategoryWeWantToLookAt]
      const categoryPhotos = category.photos

    return (
      <div>
        <section className="d-flex justify-content-center">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-light">
            <li class="breadcrumb-item">
              <Link to="/">
                Home
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              <Link  class="breadcrumb-item active" aria-current="page" to={`/${theNameOfTheCategoryWeWantToLookAt}`}>
                {category.title}
              </Link>
            </li>
          </ol>
        </nav>
            </section>
           
            <h3 className="title pl-4">{category.title}</h3>
        <h4 className="subtitle pl-5">{category.description}</h4>
        <section className="cards d-flex flex-row justify-content-center flex-wrap">
          {categoryPhotos.map((photo, index) => (
            <PhotoListPhoto
              key={index}
              index={index}
              photo={photo}
              theNameOfTheCategoryWeWantToLookAt={
                theNameOfTheCategoryWeWantToLookAt
              }
            />
          ))}
        </section>
      </div>
    )
  }
}
