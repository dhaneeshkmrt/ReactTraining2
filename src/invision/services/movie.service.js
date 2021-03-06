import thumbnail from '../../assets/images/thumbnail.png';

export default class MovieService {

  getMovieList() {
    return Promise.resolve([
      {
        id:1,
        title: 'THOR: THE DARK WORLD',
        genre: 'DOCUMENTARY',
        movieUrl: 'http://imdb.com/1',
        overview: 'We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.',
        rating: 4.5,
        runTime: 90,
        releasedDate: '2000-04-05',
        thumbnail,
      },{
        id:2,
        title: 'THE INCREDIBLE HULK',
        genre: 'DOCUMENTARY',
        movieUrl: 'http://imdb.com/1',
        overview: 'overview',
        rating: 4.5,
        runTime: 90,
        releasedDate: '2001-05-01',
        thumbnail,
      },{
        id:3,
        title: 'IRON MAN 2',
        genre: 'COMEDY',
        movieUrl: 'http://imdb.com/1',
        overview: 'overview',
        rating: 4.5,
        runTime: 90,
        releasedDate: '2002-05-02',
        thumbnail,
      },{
        id:4,
        title: 'AVENGERS: AGE OF ULTRON',
        genre: 'COMEDY',
        movieUrl: 'http://imdb.com/1',
        overview: 'overview',
        runTime: 90,
        rating: 4.5,
        releasedDate: '2003-05-03',
        thumbnail,
      },{
        id:5,
        title: 'THOR',
        genre: 'COMEDY',
        movieUrl: 'http://imdb.com/1',
        overview: 'overview',
        runTime: 90,
        rating: 4.5,
        releasedDate: '2004-05-04',
        thumbnail,
      },{
        id:6,
        title: 'CAPTAIN MARVEL',
        genre: 'HORROR',
        movieUrl: 'http://imdb.com/1',
        overview: 'overview',
        runTime: 90,
        rating: 4.5,
        releasedDate: '2005-05-05',
        thumbnail,
      },{
        id:7,
        title: 'IRON MAN 3',
        genre: 'CRIME',
        movieUrl: 'http://imdb.com/1',
        overview: 'overview',
        runTime: 90,
        rating: 4.5,
        releasedDate: '2006-05-06',
        thumbnail,
      },{
        id:8,
        title: 'CAPTAIN AMERICA: THE FIRST AVENGER',
        genre: 'CRIME',
        movieUrl: 'http://imdb.com/1',
        overview: 'overview',
        runTime: 90,
        rating: 4.5,
        releasedDate: '2007-05-07',
        thumbnail,
      },{
        id:9,
        title: 'ANT-MAN',
        genre: 'CRIME',
        movieUrl: 'http://imdb.com/1',
        overview: 'overview',
        runTime: 90,
        rating: 4.5,
        releasedDate: '2008-05-08',
        thumbnail,
      },
    ])
  }
}