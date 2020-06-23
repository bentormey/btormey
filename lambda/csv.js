const fetch = require("node-fetch");
const Papa = require('papaparse');

const KEY = '2PACX-1vTYv2MZvIEjsa_jqJtxBrgSCdxhk16naCqSxBvExlTrNJS8ZbJi4e5N3F5_mdCnoGGBSSBz39c0DKhz';

exports.handler = async (event, context) => {
  return fetch(`https://docs.google.com/spreadsheets/d/e/${KEY}/pub?output=csv`)
    .then(response => response.text())
    .then(data => ({
      statusCode: 200,
      body: Papa.parse(data).data
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
