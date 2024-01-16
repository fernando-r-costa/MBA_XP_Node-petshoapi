import Animal from "../models/animal.model.js"
import Servico from "../models/servico.model.js"
import Proprietario from "../models/proprietario.model.js"

async function insertServico(servico) {
    try {
        return await Servico.create(servico)
    } catch (err) {
        throw err
    }
}

async function getServicos() {
    try {
        return await Servico.findAll()
    } catch (err) {
        throw err
    }
}

async function getServicosByProprietarioId(proprietarioId) {
    try {
        return await Servico.findAll({
            include: [{
                model: Animal,
                where: { proprietarioId },
                include: [
                    {
                        model: Proprietario
                    }
                ]
            }]
        })
    } catch (err) {
        throw err
    }
}

export default {
    insertServico,
    getServicos,
    getServicosByProprietarioId
}