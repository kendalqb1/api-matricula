const { Router } = require("express");
const {
  cursosGet,
  cursosPost,
  cursosPut,
  cursosDelete,
} = require("../controllers/cursos");

const router = Router();

router.get("/", cursosGet);

router.post("/", cursosPost);

router.put("/:id", cursosPut);

router.delete("/:id", cursosDelete);

module.exports = router;
