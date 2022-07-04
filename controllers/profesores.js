const { request, response } = require("express");
const Profesor = require("../models/profesor");

const profesoresGet = async (req = request, res = response) => {
  const profesores = await Profesor.find();
  res.json({
    message: "Todo OK",
    total: profesores.length,
    profesores,
  });
};

const profesoresPost = async (req = request, res = response) => {
  const profesorJson = JSON.parse(req.query.profesor);
  const { cedula, nombre, telefono, email } = profesorJson;
  const profesor = new Profesor({ cedula, nombre, telefono, email });
  await profesor.save();
  res.json({
    message: "Profesor guardado",
    profesor,
  });
};

// const cursosPost = async (req = request, res = response) => {
//   const { codigo, nombre, creditos, horas } = req.body;
//   const curso = new Curso({ codigo, nombre, creditos, horas });
//   await curso.save();
//   res.json({
//     message: "Curso guardado",
//     curso,
//   });
// };

// const cursosPut = async (req = request, res = response) => {
//   const { codigo, nombre, creditos, horas } = req.body;
//   const curso = await Curso.findByIdAndUpdate(req.params.id, {
//     codigo,
//     nombre,
//     creditos,
//     horas,
//   });
//   res.json({
//     message: "Curso actualizado",
//     curso,
//   });
// };

// const cursosDelete = async (req = request, res = response) => {
//   await Curso.findByIdAndDelete(req.params.id);
//   res.json({
//     message: "Curso eliminado",
//   });
// };

module.exports = {
  profesoresGet,
  profesoresPost,
};
