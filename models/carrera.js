const { Schema, model } = require("mongoose");

const CarrerasSchema = Schema({
  codigo: {
    type: String,
    required: [true, "El codigo es obligatorio"],
  },
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  cursos: [
    {
      type: String,
    },
  ],
});

CarrerasSchema.methods.toJSON = function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
};

module.exports = model("Carrera", CarrerasSchema);
