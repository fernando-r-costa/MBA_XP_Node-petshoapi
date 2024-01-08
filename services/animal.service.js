import AnimalRepository from "../repositories/animal.repository.js"
import ProprietarioRepository from "../repositories/proprietario.repository.js"

async function createAnimal(animal) {
    //if (proprietario id)
    return await AnimalRepository.insertAnimal(animal)
}

async function updateAnimal(animal) {
    return await AnimalRepository.updateAnimal(animal)
}

async function deleteAnimal(id) {
    await AnimalRepository.deleteAnimal(id)
}

async function getAnimais() {
    // if (proprietario id)
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