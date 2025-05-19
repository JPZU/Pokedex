const os = require("os");
const pokenea = require("../data/pokenea"); // asumiendo que cargas desde archivo

class PokeneaService {
  constructor() {
    this.pokenea = pokenea;
  }

  getAllWithContainerInfo() {
    let containerId = "unknown";
    try {
      containerId = os.hostname();
    } catch (err) {
      console.warn("Could not read container ID: ", err.message);
    }

    return [
      {
        container_id: containerId,
        message: "All pokenea",
        dataset: this.pokenea,
      },
    ];
  }

  getImagesAndPhrases() {
    const dataset = Object.values(this.pokenea).map(
      ({ image, philosophical_phrase }) => ({
        image,
        philosophical_phrase,
      })
    );

    return [
      {
        message: "All pokenea images and phrases",
        dataset,
      },
    ];
  }
}

module.exports = new PokeneaService();
