const path = require("path");
const fs = require("fs");
const webfontsGenerator = require("webfonts-generator");

const directoryPath = path.join(__dirname, "svgs");

let svgFiles = [];

const files = fs.readdirSync(directoryPath);
for (const file of files) {
  const fileDir = path.join(directoryPath, file);
  const location = `${path.dirname(fileDir)}/${path.basename(fileDir)}`;
  svgFiles.push(location);
}

webfontsGenerator(
  {
    files: svgFiles,
    dest: "dist/",
    fontName: "remote-icon",
    templateOptions: {
      classPrefix: "remote-icon-",
      baseSelector: ".remote-icon",
    },
  },
  function (error) {
    if (error) {
      console.log("Fail!", error);
    } else {
      console.log("Done!");
    }
  }
);
