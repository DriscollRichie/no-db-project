let movies = [
  {
    id: 0,
    title: "Titanic",
    year: "1997",
    cover:
      "https://ia.media-imdb.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    id: 1,
    title: "Rounders",
    year: "1998",
    cover:
      "https://ia.media-imdb.com/images/M/MV5BMzViMmMxMzItYmYyYi00NGU3LWI2MDMtNjcwOWFmZTZkOTcwXkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    id: 2,
    title: "Blow",
    year: "2001",
    cover:
      "https://ia.media-imdb.com/images/M/MV5BMTQ5ODQwNzIxNV5BMl5BanBnXkFtZTYwNzAyMDE3._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    id: 3,
    title: "The Wolf of Wall Street",
    year: "2013",
    cover: "https://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg"
  }
];

let userList = []
let movieId = 0;

module.exports = {
  getMovies: (req, res) => {
    res.status(200).send(movies)
  },

  postMovie: (req, res) => {
    const {title, year, cover} = req.body;
    const movie = {
      id: movieId,
      title,
      year,
      cover
    };
    userList.push(movie)
    movieId++
    res.status(200).send(userList)
  },

  getUserList: (req, res) => {
    res.status(200).send(userList)
  },

  deleteMovie: (req, res) => {
    userList.forEach((elem, i) => {
      if(elem.id === Number(req.params.id)) {
        userList.splice(i, 1)
      }
    })
    res.send(userList)
  },

  updateMovie: (req, res) => {
    let movieIndex = null;
    console.log(req.params)
    userList.forEach((elem, i) => {
      console.log('elem', elem)
      if (elem.id == Number(req.params.id)) {
        movieIndex = i;
      }
    });
    console.log(movieIndex)
    userList[movieIndex] = {
      id: userList[movieIndex].id,
      title: req.body.title,
      year: req.body.year,
      cover: req.body.cover
    };
    res.send(userList);
  }
}