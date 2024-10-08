import { Request,Response } from "express"
import CreateLocaisModel from "./createLocaisModel"

class CreateLocaisController{
	async createLocais(req:Request,res:Response){
		
		const { nome,endereco,telefone,procedimentosId, profissionaisId, agendamentoId } = req.body

		try{
			const locais = await CreateLocaisModel.createLocaisModel(nome,endereco,telefone,procedimentosId, profissionaisId, agendamentoId)
			return res.json(locais)

		} catch(e){
			console.log(e)
			return res.json({
				"error":true,
				"message":"Erro desconhecido"
			})
		}
	}
}


export default new CreateLocaisController()