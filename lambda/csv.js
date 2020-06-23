const fetch = require("node-fetch");

const KEY = '2PACX-1vTYv2MZvIEjsa_jqJtxBrgSCdxhk16naCqSxBvExlTrNJS8ZbJi4e5N3F5_mdCnoGGBSSBz39c0DKhz';

exports.handler = async (event, context) => {
  const key = event.queryStringParameters.key || KEY;
  
  const csv = await fetch(`https://docs.google.com/spreadsheets/d/e/${key}/pub?output=csv`)
    .then(response => response.text());
  
  return {
    statusCode: 200,
    body: csv
  };
};
