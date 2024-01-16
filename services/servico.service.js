import ServicoRepository from "../repositories/servico.repository.js"
import AnimalRepository from "../repositories/animal.repository.js"

async function createServico(servico) {
    const getAnimal = await AnimalRepository.getAnimal(servico.animalId)
    if (!getAnimal) {
        throw new Error("Animal não cadastrado")
    }
    return await ServicoRepository.insertServico(servico)
}

async function getServicos(proprietarioId) {
    if (proprietarioId) {
        return await ServicoRepository.getServicosByProprietarioId(proprietarioId)
    }
    return await ServicoRepository.getServicos()
}

export default {
    createServico,
    getServicos
}