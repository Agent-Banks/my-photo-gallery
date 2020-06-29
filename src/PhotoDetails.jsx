import React, { Component } from 'react';
import SampleData from './sample-data.json'


export class PhotoDetails extends Component {
  render() {
    let photo = SampleData[this.props.match.params.categoryType].photos;
    let id = this.props.match.params.id;
    return (
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
    );
  }
}
