/**
* Copyright 2017 HUAWEI. All Rights Reserved.
*
* SPDX-License-Identifier: Apache-2.0
*
*/

'use strict';

module.exports.info  = 'querying contract specification';


let bc, contx;

module.exports.init = function(blockchain, context, args) {
    bc       = blockchain;
    contx    = context;
    return Promise.resolve();
};

module.exports.run = function() {

    let randomId = Math.round((Math.random() * 100000000000)).toString()
    return bc.invokeSmartContract(contx, 'xcc', 'v1', {verb : 'put', id: randomId, payload: "lorem ipsum"}, 120)
      .then((results)=>{
          for (let i in results) {
              let stat = results[i];
              if(stat.IsCommitted()) {
                  console.log(stat.GetResult().toString());
              }
          }
          return Promise.resolve(results);
    });
};

module.exports.end = function() {
    // do nothing
    return Promise.resolve();
};
