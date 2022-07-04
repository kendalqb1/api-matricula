const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.cursos = "/api/cursos";
    this.profesores = "/api/profesores";
    this.ciclos = "/api/ciclos";
    this.carreras = "/api/carreras";
    this.alumnos = "/api/alumnos";
    this.grupos = "/api/grupos";

    this.conectarDb();
    this.middlewares();
    this.routes();
  }

  async conectarDb() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.cursos, require("../routes/cursos"));
    this.app.use(this.profesores, require("../routes/profesores"));
    this.app.use(this.ciclos, require("../routes/ciclos"));
    this.app.use(this.carreras, require("../routes/carreras"));
    this.app.use(this.alumnos, require("../routes/alumnos"));
    this.app.use(this.grupos, require("../routes/grupos"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
