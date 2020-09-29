export const movieConverter= (movie)=>{
  return {
    id: movie.id,
    title: movie.title,
    genres: [movie.genre],
    overview: movie.overview,
    vote_average: parseFloat(movie.rating),
    release_date: new Date(movie.releasedDate).toISOString(),
    runtime: parseFloat(movie.runTime),
    poster_path: 'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg',
  }
}