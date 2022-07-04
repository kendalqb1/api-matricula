const { request, response } = require("express");
const Grupo = require("../models/grupo");

const gruposGet = async (req = request, res = response) => {
  const grupos = await Grupo.find();
  res.json({
    message: "Todo OK",
    total: grupos.length,
    grupos,
  });
};

const gruposPost = async (req = request, res = response) => {
  const grupoJson = JSON.parse(req.query.grupo);
  const { numero, ciclo, curso, horario, profesor, alumnos } = grupoJson;
  const grupo = new Grupo({ numero, ciclo, curso, horario, profesor, alumnos });
  await grupo.save();
  res.json({
    message: "Grupo guardado",
    grupo,
  });
};

module.exports = {
  gruposGet,
  gruposPost,
};
