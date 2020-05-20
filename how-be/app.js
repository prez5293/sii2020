const express = require('express');
var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,POST,PUT,PATCH");
  next();
});

const axios = require('axios');

const SCANNER_INPUT = "<Scanner batch=\"4\"><filter>{\"type\": \"SingleColumnValueFilter\", \"op\": \"EQUAL\", \"family\": \"aG91c2U=\", \"qualifier\": \"Y29kZQ==\", \"latestVersion\": true, \"comparator\": { \"type\": \"BinaryComparator\", \"value\": \"$value\" }}</filter></Scanner>";

app.get('/:house', function (req, res) {
  let scanner = SCANNER_INPUT.replace("$value", Buffer.from(req.params.house).toString('base64'));
  axios.put('http://localhost:8080/westeros/scanner/', scanner, { headers: { "Content-Type": "text/xml" } })
    .then(response => {
      axios.get(response.headers.location).then(response => {
        console.log(response.data.Row[0].Cell);
        let obj = {};
        response.data.Row[0].Cell.forEach(element => {
          obj[Buffer.from(element["column"], 'base64').toString()] = Buffer.from(element["$"], 'base64').toString();
        });
        res.send(obj);
      })
    })
    .catch(err => console.log(err))
});

app.listen(8081, function () {
  console.log('Server started on port 8081');
});
