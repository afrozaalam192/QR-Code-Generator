let fsPromises = require("fs/promises");

async function writeToFile(path, url) {
  try {
    await fsPromises.appendFile(path, url + "\n");
  } catch (err) {
    throw Error("Exception occure while writing the file " + err);
  }
}
module.exports = writeToFile;
