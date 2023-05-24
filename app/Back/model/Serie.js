const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Serie = new Schema({
  name: {
    type: String
  },
  genero: {
    type: String
  },
  temporadas: {
    type: Number
  },
  classificacao: {
    type: String
  }
},{
    collection: 'serie'
});

module.exports = mongoose.model('Serie', Serie);