module.exports = class clientController {
        static async clientSimularPlano(req, res) {
        res.status(200).send({message: "Cliente simulando plano"})
    }

    static async clientCreate(req, res) {
        res.status(200).send({message: "Criado Cliente"})
    }
}


