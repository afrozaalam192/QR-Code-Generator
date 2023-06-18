const chalk = require("chalk");
const validator = require("validator");
const { getUrl, getImageType } = require("./userinput");
const writeToFile = require("./filewriter");
const generateQRCode = require("./qrcode");

async function doTask() {
  try {
    let url = await getUrl();
    console.log(chalk.blue(`You typed : ${url}`));
    if (!validator.isURL(url)) {
      console.log(chalk.red("It is an invalid URL!"));
      process.exit();
    }
    console.log(chalk.green("It is an valid URL!"));
    let imgType = await getImageType();
    console.log(chalk.blue(`You selected : ${imgType}`));
    let fileName = await generateQRCode(url, imgType);
    console.log(chalk.green(`QR code generated and saved in ${fileName}!`));
    await writeToFile("./qrcodes/URL.txt", url);
    console.log(chalk.green("URL saved in URL.txt"));
  } catch (err) {
    console.log(chalk.red(err));
  }
}
doTask();
