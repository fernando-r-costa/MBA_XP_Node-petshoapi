import AnimalRepository from "../repositories/animal.repository.js"
import ProprietarioRepository from "../repositories/proprietario.repository.js"

async function createAnimal(animal) {
    const getProprietario = await ProprietarioRepository.getProprietario(animal.proprietario_id)
    if (!getProprietario) {
        throw new Error("Proprietário ID não cadastrado")
    }
    return await AnimalRepository.insertAnimal(animal)
}

async function updateAnimal(animal) {
    const getProprietario = await ProprietarioRepository.getProprietario(animal.proprietario_id)
    if (!getProprietario) {
        throw new Error("Proprietário ID não cadastrado")
    }
    return await AnimalRepository.updateAnimal(animal)
}

async function deleteAnimal(id) {
    await AnimalRepository.deleteAnimal(id)
}

async function getAnimais(proprietario_id) {
    if (proprietario_id) {
        return await AnimalRepository.getAnimaisByProprietarioId(proprietario_id)
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