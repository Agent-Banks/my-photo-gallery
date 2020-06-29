import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
export class PhotoList extends Component {
  render() {
    return (
      <div>
        <h5 className="title">{this.props.title}</h5>
        <p class="text">{this.props.description}</p>
        <section className="cards d-flex flex-row justify-content-center flex-wrap">
          {this.props.photos.map(photo => (
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
