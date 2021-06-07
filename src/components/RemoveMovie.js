import React from 'react';
import { Divider } from 'semantic-ui-react';

const RemoveMovie = (props) => {
  return (
    <div>
      <p className="title">{props.title}</p>
      <p className="year">{props.year}</p>
      <Divider />
      <p>Remove from watchlist</p>
    </div>
  )
}

export default RemoveMovie;