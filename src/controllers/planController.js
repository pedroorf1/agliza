module.exports = class planController {
    
    static async simular(req, res) {
        res.status(200).send({message: "Simulado Plano"})
    }

    static async create(req, res) {
        res.status(200).send({message: "Plano Criado"})
    }

    static async update(req, res) {
        res.status(200).send({message: "Plano atualizado"})
    }

    static async delete(req, res) {
        res.status(200).send({message: "Plano excluído"})
    }

    static async aprouved(req, res) {
        res.status(200).send({message: "Plano Aprovado"})
    }

    static async signed(req, res) {
        res.status(200).send({message: "Plano assinado"})
    }
}