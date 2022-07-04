const { request, response } = require("express");
const Carrera = require("../models/carrera");

const carrerasGet = async (req = request, res = response) => {
  const carreras = await Carrera.find();
  res.json({
    message: "Todo OK",
    total: carreras.length,
    carreras,
  });
};

const carrerasPost = async (req = request, res = response) => {
  const carreraJson = JSON.parse(req.query.carrera);
  const { codigo, nombre, cursos } = carreraJson;
  const carrera = new Carrera({
    codigo,
    nombre,
    cursos,
  });
  await carrera.save();
  res.json({
    message: "Carrera creada",
    carrera,
  });
};

module.exports = {
  carrerasGet,
  carrerasPost,
};
