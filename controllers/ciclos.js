const { request, response } = require("express");
const Ciclo = require("../models/ciclo");

const ciclosGet = async (req = request, res = response) => {
  const ciclos = await Ciclo.find();
  res.json({
    message: "Todo OK",
    total: ciclos.length,
    ciclos,
  });
};

const ciclosPost = async (req = request, res = response) => {
  const cicloJson = JSON.parse(req.query.ciclo);
  const { anno, numero, fecha_inicio, fecha_final } = cicloJson;
  const ciclo = new Ciclo({
    anno,
    numero,
    fecha_inicio,
    fecha_final,
  });
  await ciclo.save();
  res.json({
    message: "Ciclo creado",
    ciclo,
  });
};

module.exports = {
  ciclosGet,
  ciclosPost,
};
