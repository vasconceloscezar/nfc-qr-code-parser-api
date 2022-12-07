import fs from 'fs'

export function saveObjToJsonFile(object: Object, fileName = "object.json"): void {
  const filePath = "./data/generated/";

  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath, { recursive: true });
  }
  let path = `${filePath}/${fileName}`;

  fs.writeFileSync(path, JSON.stringify(object));
}

module.exports = { saveObjToJsonFile };
