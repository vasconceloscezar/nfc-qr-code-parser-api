const fs = require("fs");

function saveObjToJsonFile(object, config = { filePath: "./data/generated", fileName: "object.json" }) {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath, { recursive: true });
  }
  let path = `${config.filePath}/${config.fileName}`;

  fs.writeFileSync(path, JSON.stringify(object));
}

module.exports = { saveObjToJsonFile };
