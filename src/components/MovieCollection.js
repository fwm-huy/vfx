import React from 'react';

const MovieCollection = (props) => {
  const Overlay = props.overlay;
  const { handleWatchList, movies } = props;
  return (
    <>
      {
        movies.map((mv, i) => (
          <div className="img-container" key={i}>
            <img src={mv.Poster} alt="" />
            <div className="overlay" onClick={() => handleWatchList(mv)}>
              <Overlay year={mv.Year} title={mv.Title} />
            </div>
          </div>
        ))
      }
    </>
  )
}

export default MovieCollection;