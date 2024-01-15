import Animal from "../models/animal.model.js"

async function insertAnimal(animal) {
    try {
        return await Animal.create(animal)
    } catch (err) {
        throw err
    }
}

async function updateAnimal(animal) {
    try {
        await Animal.update(animal, {
            where: {
                animalId: animal.animalId
            }
        })
        return await getAnimal(animal.animalId)
    } catch (err) {
        throw err
    }
}

async function deleteAnimal(id) {
    try {
        await Animal.destroy({
            where: {
                animalId: id
            }
        })
        return id;
    } catch (err) {
        throw err
    }
}

async function getAnimais() {
    try {
        return await Animal.findAll()
    } catch (err) {
        throw err
    }
}

async function getAnimaisByProprietarioId(proprietarioId) {
    try {
        return await Animal.findAll({
            where: {
                proprietarioId: proprietarioId
            }
        })
    } catch (err) {
        throw err
    }

}

async function getAnimal(id) {
    try {
        return await Animal.findByPk(id, { raw: true })
    } catch (err) {
        throw err
    }
}

export default {
    insertAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimais,
    getAnimal,
    getAnimaisByProprietarioId
}