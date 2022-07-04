const { Schema, model } = require("mongoose");

const CiclosSchema = Schema({
  anno: {
    type: Number,
    required: [true, "El anno es obligatorio"],
  },
  numero: {
    type: Number,
    required: [true, "El numero es obligatorio"],
  },
  fecha_inicio: {
    type: String,
    required: [true, "El fecha_inicio es obligatorio"],
  },
  fecha_final: {
    type: String,
    required: [true, "El fecha_final es obligatorio"],
  },
});

CiclosSchema.methods.toJSON = function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
};

module.exports = model("Ciclo", CiclosSchema);
