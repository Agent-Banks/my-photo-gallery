import React, { Component } from 'react';
import SampleData from '../sample-data.json'
import { BrowserRouter as Link } from 'react-router-dom'


export class PhotoDetails extends Component {
  render() {
    const theNameOfTheCategoryWeWantToLookAt = this.props.match.params
    .theNameOfTheCategoryWeWantToLookAt

  const arrayIndexOfThePhoto = this.props.match.params.arrayIndexOfThePhoto

  const category = SampleData[theNameOfTheCategoryWeWantToLookAt]

  const categoryPhotos = category.photos

  const photo = categoryPhotos[arrayIndexOfThePhoto]

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
            <li class="breadcrumb-item">
              <Link  class="breadcrumb-item"  to={`/${theNameOfTheCategoryWeWantToLookAt}`}>
                {category.title}
              </Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
            <Link class="breadcrumb-item active" aria-current="page"
              to={`/${theNameOfTheCategoryWeWantToLookAt}/${arrayIndexOfThePhoto}`}
            >
              {photo.title}
            </Link>
          </li>
          </ol>
        </nav>
      </section>
    <div className="container d-flex flex-column align-items-center">
      <h3 className="title">{photo.title}</h3>
      <figure className="image">
        <img src={photo.imageURL} alt={photo.title} width="1000" />
      </figure>
      <p className="is-small">
        <a href={photo.sourceURL}>Source</a>
      </p>
    </div>
    </div>
  )
}
}