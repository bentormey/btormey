const fetch = require("node-fetch");
const Papa = require('papaparse');

const KEY = '2PACX-1vTYv2MZvIEjsa_jqJtxBrgSCdxhk16naCqSxBvExlTrNJS8ZbJi4e5N3F5_mdCnoGGBSSBz39c0DKhz';

exports.handler = async (event, context) => {
  const key request.QueryStringParameters["key"] || KEY;
  
  const csv = await fetch(`https://docs.google.com/spreadsheets/d/e/${key}/pub?output=csv`)
    .then(response => response.text());
  
  return {
    statusCode: 200,
    body: csv//Papa.parse(csv).data
  };
  
  //const parsed = Papa.parse(csv).data
};
