import React, { Component } from 'react';
import SampleData from '../sample-data.json'


export class PhotoDetails extends Component {
  render() {
    let photo = SampleData[this.props.match.params.categoryType].photos;
    let id = this.props.match.params.id;
    return (
      <div>
        <section>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                  {photo[id].title}
                  </li>
                </ol>
              </nav>
            </section>
      <div className="photo-detail-container">
        <div className="photo-detail-title">
          <h3>{photo[id].title}</h3>
        </div>
        <div className="photo-detail-image">
          <img src={photo[id].imageURL} alt={photo[id].title} />
        </div>
        <div className="photo-detail-source">
          <a href={photo[id].sourceURL}>Source</a>
        </div>
      </div>
      </div>
    );
  }
}
