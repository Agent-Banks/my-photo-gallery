import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import SampleData from '../sample-data.json'
export class PhotoList extends Component {
  render() {

    const theNameOfTheCategoryWeWantToLookAt = this.props.match.params
      .theNameOfTheCategoryWeWantToLookAt

      const category = SampleData[theNameOfTheCategoryWeWantToLookAt]
      const categoryPhotos = category.photos

    return (
      <div>
        <section>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                  {this.props.title}
                  </li>
                </ol>
              </nav>
            </section>
        <h5 className="title">{category.title}</h5>
        <p class="text">{category.description}</p>
        <section className="cards d-flex flex-row justify-content-center flex-wrap">
          {categoryPhotos.map(photo, index => (
             <Link to={`/${this.props.categoryType}/${photo.id}`}>
            <div class="card">
              <div class="card-body">
                <img src={photo.imageURL} class="card-img-top" alt="..." />
                <p class="card-text">{photo.title}</p>
              </div>
            </div>
            </Link>
          ))}
        </section>
      </div>
    )
  }
}
