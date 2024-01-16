import ServicoService from "../services/servico.service.js";

async function createServico(req, res, next) {
    try {
        let servico = req.body;
        if (!servico.descricao || !servico.valor || !servico.animalId) {
            throw new Error("Descricao, Valor e Animal Id são obrigatórios.");
        }
        servico = await ServicoService.createServico(servico);
        res.send(servico);
        logger.info(`POST /servico - ${JSON.stringify(servico)}`);
    } catch (err) {
        next(err);
    }
}

async function getServicos(req, res, next) {
    try {
        res.send(await ServicoService.getServicos(req.query.proprietarioId));
        logger.info("GET /servicos");
    } catch (err) {
        next(err);
    }
}

export default {
    createServico,
    getServicos
}