import AnimalRepository from "../repositories/animal.repository.js"
import ProprietarioRepository from "../repositories/proprietario.repository.js"

async function createAnimal(animal) {
    const getProprietario = await ProprietarioRepository.getProprietario(animal.proprietarioId)
    if (!getProprietario) {
        throw new Error("Proprietário ID não cadastrado")
    }
    return await AnimalRepository.insertAnimal(animal)
}

async function updateAnimal(animal) {
    const getProprietario = await ProprietarioRepository.getProprietario(animal.proprietarioId)
    if (!getProprietario) {
        throw new Error("Proprietário ID não cadastrado")
    }
    return await AnimalRepository.updateAnimal(animal)
}

async function deleteAnimal(id) {
    await AnimalRepository.deleteAnimal(id)
}

async function getAnimais(proprietarioId) {
    if (proprietarioId) {
        return await AnimalRepository.getAnimaisByProprietarioId(proprietarioId)
    }
    return await AnimalRepository.getAnimais()
}

async function getAnimal(id) {
    return await AnimalRepository.getAnimal(id)
}

export default {
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimais,
    getAnimal
}