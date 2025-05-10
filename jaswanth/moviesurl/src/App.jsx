import React from 'react';
// import movies from './data';
import movies from './data';
// import MovieCard from './MovieCard';
import MovieCard from './Movies';

const App = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className='text-center my-2 text-primary'>Show Time <span className='text-success'>Movies</span></h1> 
          {/* Movie  */}
          {
            movies.map((movie) => {
              const { id, title, showtimes, theater, rating, language, genre, isFull, isFree, isPremiere, imageUrl } = movie;
              return (
                <div key={id} className="col-12 col-sm-12 col-md-4 col-lg-4 ">
                  <MovieCard
                    title={title}
                    showtimes={showtimes}
                    theater={theater}
                    rating={rating}
                    language={language}
                    genre={genre}
                    isFull={isFull}
                    isFree={isFree}
                    isPremiere={isPremiere}
                    imageUrl={imageUrl}
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;