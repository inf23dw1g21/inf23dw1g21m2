'use strict';
var mysql = require("../utils/db.js")

/**
 *
 * id Long 
 * returns List
 **/
exports.cliente_idplanoGET = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM plano where cliente=?",[id], function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      }
      else {
        console.log(res);
        resolve(res);
      }
    });
  });
}
<<<<<<< HEAD
=======





>>>>>>> 7ffef90c3acfcba6dade763f6b3a3d1b2df55afb
/**
 *
 * returns List
 **/
exports.planoGET = function() {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM plano", function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      }
      else {
        console.log(res);
        resolve(res);
      }
    });
  });
}


/**
 *
 * body Plano Plano que precisa ser adicionado , editado ou removido do negocio (optional)
 * no response value expected for this operation
 **/
exports.planoPOST = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    mysql.query("INSERT INTO plano (tipo_de_plano, periodicidade, preco, armazenamento, numero_de_contas_email, numero_de_dominios, largura_de_banda, fidelizacao ) Values(?,?,?,?,?,?,?,?)", [body.tipo_de_plano, body.periodicidade, body.preco, body.armazenamento, body.numero_de_contas_email, body.numero_de_dominios, body.largura_de_banda, body.fidelizacao], function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      } else {
        console.log(res.insertId);
        resolve (res.insertId);
      }
    });
  });
}


/**
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.plano_idDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("DELETE FROM plano WHERE id = ?", [id], function (err, res) {
      if (err || !res.affectedRows) {
        console.log(err); 
        console.log (res);
        reject();
      }
      else {
        console.log (res);
        resolve ({"deleted": id});
      }
    });
  });
}


/**
 *
 * id Long 
 * returns plano
 **/
exports.plano_idGET = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM plano WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
}


/**
 *
 * body Plano Plano que precisa ser adicionado , editado ou removido do negocio (optional)
 * id Long 
 * no response value expected for this operation
 **/
exports.plano_idPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    mysql.query("UPDATE plano settipo_de_plano = ?, periodicidade = ?, preco = ?, armazenamento = ?, numero_de_contas_email = ?, numero_de_dominios = ?, largura_de_banda = ?, fidelizacao = ?", [body.tipo_de_plano, body.periodicidade, body.preco, body.armazenamento, body.numero_de_contas_email, body.numero_de_dominios, body.largura_de_banda, body.fidelizacao, id], function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      }
      else {
        console.log(res);
        resolve(id);
      }
    });
  });
}

