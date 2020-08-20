const fs = require("fs");
const path = require("path");

exports.handler = async (event, context) => {
  const path2 = path.join(process.cwd(), 'image.jpg');
  const jpgBuffer = fs.readFileSync(path2);

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'image/jpeg' },
    body: jpgBuffer.toString('base64'),
    isBase64Encoded: true,
  }
}
