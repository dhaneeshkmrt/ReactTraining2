export const movieMapper= (movie)=>{
  return {
    id: movie.id,
    title: movie.title,
    genre:  movie.genres[0],
    overview: movie.overview,
    rating: movie.vote_average,
    releasedDate: movie.release_date,
    runTime: movie.runtime,
    thumbnail: movie.poster_path,
  }
}