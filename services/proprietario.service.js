import ProprietarioRepository from "../repositories/proprietario.repository.js"
import AnimalRepository from "../repositories/animal.repository.js"

async function createProprietario(proprietario) {
    return await ProprietarioRepository.insertProprietario(proprietario)
}

async function updateProprietario(proprietario) {
    return await ProprietarioRepository.updateProprietario(proprietario)
}

async function deleteProprietario(id) {
    //if ()
    await ProprietarioRepository.deleteProprietario(id)
}

async function getProprietarios() {
    return await ProprietarioRepository.getProprietarios()
}

async function getProprietario(id) {
    return await ProprietarioRepository.getProprietario(id)
}

export default {
    createProprietario,
    updateProprietario,
    deleteProprietario,
    getProprietarios,
    getProprietario
}