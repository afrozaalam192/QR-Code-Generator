const qr = require("qr-image");
const fs = require("fs/promises");

async function generateQRCode(url, imgType) {
  let imgName = "";
  if (url.includes("www")) {
    imgName = url.substring(url.indexOf(".") + 1, url.lastIndexOf("."));
  } else if (url.includes("//")) {
    imgName = url.substring(url.indexOf("/") + 2, url.lastIndexOf("."));
  } else {
    imgName = url.substring(0, url.lastIndexOf("."));
  }
  imgName = imgName + "_" + imgType;
  try {
    if (!require("fs").existsSync("./qrcodes")) {
      await fs.mkdir("./qrcodes");
    }
    let fileName = imgName + "." + imgType;
    let qrObj = qr.image(url, { type: imgType });
    qrObj.pipe(require("fs").createWriteStream("./qrcodes/" + fileName));
    return fileName;
  } catch (err) {
    throw Error("Exception occur while generating qr code " + err);
  }
}

module.exports = generateQRCode;
