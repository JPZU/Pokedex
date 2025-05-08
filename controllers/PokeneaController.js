const fs = require("fs");
const pokenea = require("../data/pokenea");

class PokeneaController {
  constructor() {
    this.pokenea = pokenea;
  }

  getAll(req, res) {
    let containerId = "unknown";
    try {
      const cgroup = fs.readFileSync("/proc/self/cgroup", "utf8");
      const match = cgroup.match(/(?:^|\n)[\d]+:[\w=]+:\/docker\/([0-9a-f]+)/);
      if (match) {
        containerId = match[1].substring(0, 12);
      }
    } catch (err) {
      console.warn("The container ID cannot be read: ", err.message);
    }
    const data = [
      {
        container_id: containerId,
        message: "All pokenea",
        dataset: this.pokenea,
      },
    ];

    res.status(200).json({ data });
  }

  getImage(req, res) {
    let dataset = [];

    for (let id in this.pokenea) {
      if (this.pokenea.hasOwnProperty(id)) {
        const { image, philosophical_phrase } = this.pokenea[id];
        dataset.push({ image, philosophical_phrase });
      }
    }

    const data = [
      {
        message: "All pokenea images and phrases",
        dataset: dataset,
      },
    ];

    res.status(200).json({ data });
  }
}

module.exports = new PokeneaController();
