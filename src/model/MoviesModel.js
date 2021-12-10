const db = require("../database/models");

const MoviesModel = {
  findAll: () => {
    let movies = db.Movies.findAll();
    return movies
      .then((res) => {
        return res;
      })
      .catch((err) =>{
        return err
       } );
  },

  findById: (id) => {
    let movies = db.Movies.findByPk(id);
    return movies
      .then((res) => {
        return res;
      })
      .catch((err) =>{
        return err
       } );
  },
};
module.exports = MoviesModel;

// MoviesModel.findById(100)
//   .then((actores) => {
//     console.log(actores);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
