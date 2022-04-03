const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MovieSchema = new Schema({
  titulo: {
  type: String,
  required: [true]
  },
  sinopse: {
  type: String
  },
  duracao: {
  type: String,
  required: [false]
  },
  dataLancamento: {
  type: String,
  required: [true]
  },
  imagem: {
  type: String,
  required: [false]
  },
  categoria: {
  type: String,
  required: [true]
  }
});

const PI = mongoose.model('Movie', MovieSchema);

module.exports = PI;