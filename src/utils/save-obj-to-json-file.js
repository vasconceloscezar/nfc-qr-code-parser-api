const fs = require("fs");

function saveObjToJsonFile(object, fileName = "object.json") {
  const filePath = "./data/generated/";

  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath, { recursive: true });
  }
  let path = `${filePath}/${fileName}`;

  fs.writeFileSync(path, JSON.stringify(object));
}

module.exports = { saveObjToJsonFile };
