import React, { Component } from 'react'
import SampleData from '../sample-data.json'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

export default class CategoryList extends Component {
  render() {
    const pandaCategoryTitle = SampleData.pandas.title
    const pandaCategoryText = SampleData.pandas.description
    const firstPandaImage = SampleData.pandas.photos.find(
      (photo, index) => index === 0
    )
    const miniaturesCategoryTitle = SampleData.miniatures.title
    const miniaturesCategoryText = SampleData.miniatures.description
    const firstMiniatureImage = SampleData.miniatures.photos.find(
      (photo, index) => index === 0
    )
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
          <div class="card">
            <div class="card-body">
              <Link to="/pandas">
                <h5 class="card-title">{pandaCategoryTitle}</h5>{' '}
              </Link>
              <p class="card-text">{pandaCategoryText}</p>
              <img
                src={firstPandaImage.imageURL}
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </section>
        <section className="cards d-flex flex-row justify-content-center flex-wrap">
          <div class="card">
            <div class="card-body">
              <Link to="/miniatures">
                <h5 class="card-title">{miniaturesCategoryTitle}</h5>
              </Link>
              <p class="card-text">{miniaturesCategoryText}</p>
              <img
                src={firstMiniatureImage.imageURL}
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </section>
      </div>
    )
  }
}
