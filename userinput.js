let inquirer = require("inquirer");

async function getUrl() {
  try {
    let answer = await inquirer.prompt({
      name: "url",
      message: "Enter a URL : ",
    });
    return answer.url;
  } catch (err) {
    throw Error("Exception occur while taking url " + err);
  }
}
async function getImageType() {
  try {
    let answer = await inquirer.prompt({
      name: "imgType",
      message: "Select extension of the QR code: ",
      type: "list",
      choices: ["png", "pdf", "svg"],
      default: "png",
    });
    return answer.imgType;
  } catch (err) {
    throw Error("Exception occure while getting image type: " + err);
  }
}
module.exports = { getUrl: getUrl, getImageType: getImageType };
