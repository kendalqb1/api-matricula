const { request, response, json } = require("express");
const Curso = require("../models/curso");

const cursosGet = async (req = request, res = response) => {
  const cursos = await Curso.find();
  res.json({
    message: "Todo OK",
    total: cursos.length,
    cursos,
  });
};

const cursosPost = async (req = request, res = response) => {
  const cursoJson = JSON.parse(req.query.curso);
  const { codigo, nombre, creditos, horas } = cursoJson;
  const curso = new Curso({ codigo, nombre, creditos, horas });
  await curso.save();
  res.json({
    message: "Curso guardado",
   // curso,
  });
};

const cursosPut = async (req = request, res = response) => {
  const { codigo, nombre, creditos, horas } = req.body;
  const curso = await Curso.findByIdAndUpdate(req.params.id, {
    codigo,
    nombre,
    creditos,
    horas,
  });
  res.json({
    message: "Curso actualizado",
    curso,
  });
};

const cursosDelete = async (req = request, res = response) => {
  await Curso.findByIdAndDelete(req.params.id);
  res.json({
    message: "Curso eliminado",
  });
};

module.exports = {
  cursosGet,
  cursosPost,
  cursosPut,
  cursosDelete,
};
