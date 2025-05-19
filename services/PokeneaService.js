const fs = require("fs");
const pokenea = require("../data/pokenea"); // asumiendo que cargas desde archivo

class PokeneaService {
  constructor() {
    this.pokenea = pokenea;
  }

  getAllWithContainerInfo() {
    let containerId = "unknown";
    try {
      const cgroup = fs.readFileSync("/proc/self/cgroup", "utf8");
      const match = cgroup.match(/(?:^|\n)[\d]+:[\w=]+:\/docker\/([0-9a-f]+)/);
      if (match) {
        containerId = match[1].substring(0, 12);
      }
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
