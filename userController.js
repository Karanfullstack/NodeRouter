
const registerUser = (req, res) => {

    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    res.send(req.body)
    console.log(req.body);
    
};

module.exports = registerUser;
