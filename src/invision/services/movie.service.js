import thumbnail from '../../assets/images/thumbnail.png';

export default class MovieService {

  getMovieList() {
    return Promise.resolve([
      {
        title: 'Action Movie',
        genre: 'Action1',
        movieUrl: 'http://imdb.com/1',
        overView: 'overView',
        rating: 4.5,
        runTime: 90,
        releasedDate: '12-12-2002',
        thumbnail,
      },{
        title: 'Action Movie',
        genre: 'Action2',
        movieUrl: 'http://imdb.com/1',
        overView: 'overView',
        rating: 4.5,
        runTime: 90,
        releasedDate: '12-12-2002',
        thumbnail,
      },{
        title: 'Action Movie',
        genre: 'Action3',
        movieUrl: 'http://imdb.com/1',
        overView: 'overView',
        rating: 4.5,
        runTime: 90,
        releasedDate: '12-12-2002',
        thumbnail,
      },{
        title: 'Action Movie',
        genre: 'Action4',
        movieUrl: 'http://imdb.com/1',
        overView: 'overView',
        runTime: 90,
        rating: 4.5,
        releasedDate: '12-12-2002',
        thumbnail,
      },{
        title: 'Action Movie',
        genre: 'Action5',
        movieUrl: 'http://imdb.com/1',
        overView: 'overView',
        runTime: 90,
        rating: 4.5,
        releasedDate: '12-12-2002',
        thumbnail,
      },{
        title: 'Action Movie',
        genre: 'Action',
        movieUrl: 'http://imdb.com/1',
        overView: 'overView',
        runTime: 90,
        rating: 4.5,
        releasedDate: '12-12-2002',
        thumbnail,
      },{
        title: 'Action Movie',
        genre: 'Action',
        movieUrl: 'http://imdb.com/1',
        overView: 'overView',
        runTime: 90,
        rating: 4.5,
        releasedDate: '12-12-2002',
        thumbnail,
      },{
        title: 'Action Movie',
        genre: 'Action',
        movieUrl: 'http://imdb.com/1',
        overView: 'overView',
        runTime: 90,
        rating: 4.5,
        releasedDate: '12-12-2002',
        thumbnail,
      },{
        title: 'Action Movie',
        genre: 'Action',
        movieUrl: 'http://imdb.com/1',
        overView: 'overView',
        runTime: 90,
        rating: 4.5,
        releasedDate: '12-12-2002',
        thumbnail,
      },
    ])
  }
}