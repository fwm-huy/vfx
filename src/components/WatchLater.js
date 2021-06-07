import React from 'react';
import { Divider } from 'semantic-ui-react';

const WatchLater = (props) => {
  return (
    <div>
      <p className="title">{props.title}</p>
      <p className="year">{props.year}</p>
      <Divider />
      <p>Add to watchlist</p>
    </div>
  )
}

export default WatchLater;