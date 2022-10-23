exports.login = (req, res) => {
    let data = {
        "id": 1,
        "name": "shreyan"
    }
    res.send(data);
}

exports.register = (req, res) => {
    let data  = {
        "id": 2,
        "name": "Debdita"
    }
    res.send(data);
}

//module.exports = {login, register}