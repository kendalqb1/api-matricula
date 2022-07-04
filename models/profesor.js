const { Schema, model } = require("mongoose");

const ProfesoresSchema = Schema({
  cedula: {
    type: String,
    required: [true, "El cedula es obligatorio"],
  },
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  telefono: {
    type: Number,
    required: [true, "El telefono es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "El email es obligatorio"],
  },
});

ProfesoresSchema.methods.toJSON = function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
};

module.exports = model("Profesor", ProfesoresSchema);
