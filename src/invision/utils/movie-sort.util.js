export function sort(movieList, newSortValue) {
  let sortFn = stringComparison;
  if(newSortValue === 'rating'){
    sortFn = numberComparison;
  }
  const sortedMovieList = movieList.sort((movie1, movie2) => {
    return sortFn(movie1[newSortValue], movie2[newSortValue]);
  });

  return sortedMovieList;
}
function stringComparison(b, a) {
  return b.localeCompare(a);
}

function numberComparison(b, a) {
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
}