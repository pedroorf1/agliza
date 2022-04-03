module.exports = class admin{
    static async create(req, res) {
        res.status(200).send({message: "Admin criado"})
    }

    static async update(req, res) {
        res.status(200).send({message: "Admin atualizado"})
    }

    static async delete(req, res) {
        res.status(200).send({message: "Admin excluído"})
    }

    static async changePassword(req, res) {
        res.status(200).send({message: "Admin senha alterada"})
    }
}