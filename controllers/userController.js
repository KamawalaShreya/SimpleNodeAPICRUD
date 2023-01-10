const db = require('../config/database');

exports.getUsers = (req,res) => {
    let sqlQuery = "SELECT * FROM tbl_users";

    let query = db.query(sqlQuery, (err, result) => {
        if(err) throw err;
        res.send(apiResponse(result))
    })
}

exports.getUserById = (req,res) => {
    let sqlQuery = "SELECT * FROM tbl_users WHERE id = " + req.params.id;

    let query  = db.query(sqlQuery, (err, result) => {
        if(err) throw err;
        res.send(apiResponse(result));
    })
};

exports.addUser = (req, res) => {
    let data = {
        name : req.body.name,
        email : req.body.email,
        gender : req.body.gender,
        contact : req.body.contact,
    };

    let sqlQuery = "INSERT INTO tbl_users SET ?";

    let query = db.query(sqlQuery, data, (err, result) => {
        if(err) throw err;

        res.send(apiResponse(result));
    })
}

exports.updateUser = (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let gender = req.body.gender;
    let contact = req.body.contact;

    let id = req.params.id;
    
    // let sqlQuery = "UPDATE tbl_users SET name='" + req.body.name + "', email='" +req.body.email + "', gender = '" + req.body.gender + "', contact ='" + req.body.contact + "'    WHERE id = " + req.params.id;

    let sqlQuery = `UPDATE tbl_users SET name = '${name}', email = '${email}', gender = ${gender}, contact = '${contact}' WHERE id = ${id}`;

    let query = db.query(sqlQuery,(err, result) => {
        if(err) throw err;
        res.send(apiResponse(result));
    })
}

exports.deleteUser = (req, res) => {
    let sqlQuery = "DELETE FROM tbl_users WHERE id = " + req.params.id;

    let query = db.query(sqlQuery, (err, result) => {
        if(err) throw err;
        res.send(apiResponse(result));
    })
}

function apiResponse(result) {
    return JSON.stringify({"status" : 200, "error" : null, "response": result})
}
