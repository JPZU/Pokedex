const os = require("os");
const pokeneaData = require("../data/pokenea");

class PokeneaService {
  constructor() {
    this.pokenea = pokeneaData;
    this.containerId = os.hostname();
  }

  /**
   * Returns all records along with container information.
   */
  getAllWithContainerInfo() {
    return {
      container_id: this.containerId,
      message: "All Pokenea data",
      data: this.pokenea,
    };
  }

  /**
   * Returns only philosophical images and phrases.
   */
  getImagesAndPhrases() {
    const data = Object.values(this.pokenea).map(
      ({ image, philosophical_phrase }) => ({
        image,
        philosophical_phrase,
      })
    );

    return {
      container_id: this.containerId,
      message: "Pokenea images and phrases",
      data,
    };
  }
}

module.exports = new PokeneaService();
