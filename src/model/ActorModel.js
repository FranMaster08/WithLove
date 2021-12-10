const db = require("../database/models");

const ActorModel = {
  findAll: () => {
    let actores = db.Actors.findAll();
    return actores
      .then((res) => {
        return res;
      })
      .catch((err) =>{
        return err
       } );
  },

  findById: () => {
    return {};
  },
};
module.exports = ActorModel;

// ActorModel.findAll()
//   .then((actores) => {
//     console.log(actores);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
