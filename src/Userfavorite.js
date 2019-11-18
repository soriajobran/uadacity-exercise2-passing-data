import React from 'react';
	
 const Userfavorite = props => {
   
   function getMovieFansJSX(movieFans) {
     return movieFans.map((movie, index) => {
       return (
         <div>
         <h2>{movie.movieName}</h2>
         <p>Liked By:</p>
         <ul>
         {movie.fans.length ? (
         movie.fans.map(fan => {
         return <li key={index}>{fan.name}</li>;
                          })
     ) : (
       <p>None of the current users liked this movie</p>
     )}
</ul>
</div>
);
});
}
const movieFans = getMovieFansJSX(props.movieFans());
  return <div>{movieFans}</div>;
}

export default Userfavorite;