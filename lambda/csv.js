const fetch = require("node-fetch");
const Papa = require('papaparse');

//const KEY = '2PACX-1vTYv2MZvIEjsa_jqJtxBrgSCdxhk16naCqSxBvExlTrNJS8ZbJi4e5N3F5_mdCnoGGBSSBz39c0DKhz';

exports.handler = async (event, context) => {
  const key request.QueryStringParameters["key"];
  
  const csv = await fetch(`https://docs.google.com/spreadsheets/d/e/${key}/pub?output=csv`)
    .then(response => response.text())
    .then(data => ({
      statusCode: 200,
      body: data
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
  
  //const parsed = Papa.parse(csvData).data
};
