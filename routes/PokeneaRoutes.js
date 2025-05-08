const express = require("express");
const router = express.Router();
const PokeneaController = require("../controllers/PokeneaController");

router.get("/", (req, res) => PokeneaController.getAll(req, res));
router.get("/image", (req, res) => PokeneaController.getImage(req, res));

module.exports = router;
