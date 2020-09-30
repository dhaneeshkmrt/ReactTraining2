export function sort(movieList, newSortValue){
  const sortedMovieList = movieList.sort((movie1, movie2) => {
    return stringComparison(movie1[newSortValue], movie2[newSortValue]);
  });
  function stringComparison(b, a) {
    return b.localeCompare(a);
  }

  return sortedMovieList;
}