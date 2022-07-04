const { request, response } = require("express");
const Alumno = require("../models/alumno");

const alumnosGet = async (req = request, res = response) => {
  const alumnos = await Alumno.find();
  res.json({
    message: "Todo OK",
    total: alumnos.length,
    alumnos,
  });
};

const alumnosPost = async (req = request, res = response) => {
  const alumnoJson = JSON.parse(req.query.alumno);
  const { cedula, nombre, telefono, email, fecha_nacimiento, carrera } = alumnoJson;
  const alumno = new Alumno({
    cedula,
    nombre,
    telefono,
    email,
    fecha_nacimiento,
    carrera,
  });
  await alumno.save();
  res.json({
    message: "Alumno guardado",
    alumno,
  });
};

module.exports = {
  alumnosGet,
  alumnosPost,
};
