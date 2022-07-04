const crearCarrera = {
  codigo: "EIF",
  nombre: "Ingeniería en Sistemas de Información",
  cursos: ["EIF-202", "EIF-207", "EIF-400"],
};

const crearCurso = {
  codigo: "EIF-202",
  nombre: "Programación II",
  creditos: 4,
  horas: 4,
};

const crearCiclo = {
  anno: 2022,
  numero: 1,
  fecha_inicio: "01-03-2022",
  fecha_final: "23-06-2022",
};

const crearProfesor = {
  cedula: "1-0111-0111",
  nombre: "Juan",
  telefono: 89898989,
  email: "hola@universidad.com",
};

const crearAlumno = {
  cedula: "1-0111-0111",
  nombre: "Juan",
  telefono: 89898989,
  email: "hola@est.universidad.com",
  fecha_nacimiento: "01-01-2000",
  carrera: "EIF",
};

const crearGrupo = {
  numero: 10001,
  ciclo: "2022-1",
  curso: "EIF-202",
  horario: "Lunes - Jueves / 8:00 - 10:00",
  profesor: "1-0111-0111",
  alumnos: ["3-0525-0221", "1-1145-0956"],
};



// http://192.168.99.208:8080/api/cursos?curso={"codigo":"EIF-202","nombre":"Soporte Técnico","creditos":"3","horas":"4","id":"62abf8a2c451ebce798e62b5"}