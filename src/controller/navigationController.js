const model = require("../model");
const navigationController = {
  getHome: (req, res, next) => {
    const ActorModel = model.ActorModel.findAll();
    ActorModel.then((actores) => {
      res.render("index", {
        title: "Bienvenidos al mundo del manana 🙈",
        data: actores,
      });
    }).catch((err) => {
      next(err);
    });
  },
  getMovies: (req, res, next) => {
    const movies = model.MoviesModel.findAll();
    movies.then((movie) => {
      res.render("movies", {
        title: "Bienvenidos al mundo del manana 🙈",
        data: movie,
      });
    }).catch((err) => {
      next(err);
    });
  },
  getOneMovie: (req, res, next) => {
    const movies = model.MoviesModel.findById(req.params.id);
    movies.then((movie) => {
      res.render("movie", {
        title: "Bienvenidos al mundo del manana 🙈",
        movie: movie,
      });
    }).catch((err) => {
      next(err);
    });
  },
};

module.exports = navigationController;
