const Usuario = require("../models/Usuario")

const UsuarioController = {
    
    async getAll(req, res) {
        try {
            const usuario = await Usuario.find()
            res.send(usuario)
        } catch (error) {
            console.error(error);
        }
    },
    async create(req, res) {
        try {
            const usuario = await Usuario.create(req.body)

            res.status(201).send({ message: "New user successfully created", usuario })
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "There was a problem", error })
        }
    },
    async getById(req, res) {
        try {
            const usuario = await Usuario.findById(req.params._id)
            res.send(usuario)
        } catch (error) {
            console.error(error);
        }
    },
    async update(req, res) {
        try {
            const usuario = await Usuario.findByIdAndUpdate(
                req.params._id, //id del Usuario que quiero actualizar
                req.body,// el objeto con los datos a actualizar 
                { new: true }// para que el usuario de la respuesta sea el actualizado
            )
            res.send({ message: "usuario successfully updated", usuario });
        } catch (error) {
            console.error(error);
        }
    },
    async login(req, res) {
        try {
          const usuario = await Usuario.findOne({
            email: req.body.email,
          })
          if (usuario) {
            // const isMatch = await bcrypt.compare(req.body.password, user.password);
            // if (!isMatch) {
            //   return res.status(400).send({ message: "There was a problem please verify the fields and try again" })
            // }
    
            // const token = jwt.sign({ _id: user._id }, JWT_SECRET);
            // if (user.tokens.length > 4) user.tokens.shift();
            // user.tokens.push(token);
            // await user.save();
            // res.send({ message: 'Bienvenid@ ' + usuario.name, token, user });
            res.send({ message: 'Bienvenid@ ', usuario });
          } else {
            res.send({ message: 'There was a problem please verify the fields and try again' });
          }
    
        } catch (error) {
          console.error(error);
        }
      },
}

module.exports = UsuarioController