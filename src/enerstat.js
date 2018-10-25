#!/usr/bin/env node
'user strict';
const sequelize = require('./initdb');
const fs = require('fs');
readImports();

function readImports() {
    fs.readdir('./data/', function (err, files) {
        if (err)
           throw err;
        for (var index in files) {
           console.log(files[index]);
        }
    });
       
    for( let file of files ) {
        fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
            if (err) {
              console.error(
                `${file} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
            } else {
              console.log(`${file} exists, and it is writable`);
            }
          });
    }
}

//read through jsonl
//see if record exists

//if not, create records

//save database?

//search for fields, dates
