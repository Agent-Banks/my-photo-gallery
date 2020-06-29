import React, { Component } from 'react';
import SampleData from '../sample-data.json'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'


export class PhotoDetails extends Component {
  render() {
    const theNameOfTheCategoryWeWantToLookAt = this.props.match.params
    .theNameOfTheCategoryWeWantToLookAt

  const arrayIndexOfThePhoto = this.props.match.params.arrayIndexOfThePhoto

  console.log(
    `I would love to see the photo with index ${arrayIndexOfThePhoto} from the category ${theNameOfTheCategoryWeWantToLookAt}`
  )

  const category = SampleData[theNameOfTheCategoryWeWantToLookAt]

  const categoryPhotos = category.photos

  const photo = categoryPhotos[arrayIndexOfThePhoto]

  return (
    <div className="container">
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="/">
              <span className="icon">
                <i className="fas fa-home" aria-hidden="true" />
              </span>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to={`/${theNameOfTheCategoryWeWantToLookAt}`}>
              {category.title}
            </Link>
          </li>
          <li className="is-active">
            <Link
              to={`/${theNameOfTheCategoryWeWantToLookAt}/${arrayIndexOfThePhoto}`}
            >
              {photo.title}
            </Link>
          </li>
        </ul>
      </nav>
      <h3 className="title">{photo.title}</h3>
      <figure className="image">
        <img src={photo.imageURL} alt={photo.title} />
      </figure>
      <p className="is-small">
        <a href={photo.sourceURL}>Source</a>
      </p>
    </div>
  )
}
}