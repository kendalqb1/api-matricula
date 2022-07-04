const { Schema, model } = require("mongoose");

const CursosSchema = Schema({
  codigo: {
    type: String,
    required: [true, "El codigo es obligatorio"],
  },
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  creditos: {
    type: Number,
    required: [true, "El credito es obligatorio"],
  },
  horas: {
    type: Number,
    required: [true, "El horas es obligatorio"],
  },
});

CursosSchema.methods.toJSON = function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
};

module.exports = model("Curso", CursosSchema);
