const pokeneaService = require("../services/PokeneaService");

class PokeneaController {
  /**
   * Get all Pokeneas
   */
  getAll(req, res) {
    try {
      const data = pokeneaService.getAllWithContainerInfo();
      return res.status(200).json({ data });
    } catch (error) {
      console.error("Error fetching Pokeneas:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  /**
   * Get only images and philosophical phrases
   */
  getImages(req, res) {
    try {
      const data = pokeneaService.getImagesAndPhrases();
      return res.status(200).json({ data });
    } catch (error) {
      console.error("Error fetching Pokenea images:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new PokeneaController();
