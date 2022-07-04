const { Schema, model } = require("mongoose");

const AlumnosSchema = Schema({
  numero: {
    type: String,
    required: [true, "El numero es obligatorio"],
  },
  ciclo: {
    type: String,
    required: [true, "El ciclo es obligatorio"],
  },
  curso: {
    type: String,
    required: [true, "El curso es obligatorio"],
  },
  horario: {
    type: String,
    required: [true, "El horario es obligatorio"],
  },
  profesor: {
    type: String,
    required: [true, "El profesor es obligatorio"],
  },
  alumnos: [
    {
      type: String,
    },
  ],
});

AlumnosSchema.methods.toJSON = function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
};

module.exports = model("Grupo", AlumnosSchema);
