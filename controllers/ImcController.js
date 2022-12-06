const IImcController = require('./IImcController.js');


const config = require('../config.js');
const ImcDAO = require('../persistencelayer/dao/'+config.IImcDAO);
let imcdao = new ImcDAO();

class ImcController extends IImcController{
  constructor(){
    super();
       
  }

  
  async show(req, res)
    {
  
       let imcs = await imcdao.recovery();
        return res.json(imcs);
    }
  async store(req, res)
     {
        const imc =  await imcdao.create(req);
        return res.json(imc);
     }
   async destroy(req,res){
         let imc = await imcdao.delete(req);
         return res.json(imc);
    }
   async update(req,res){
        let imc = await imcdao.update(req);
        return res.json(imc);
    }

   async index(req,res)
    {
        let imcs = await imcdao.search(req);
        return res.json(imcs);
    }

  async indexbyUser(req,res)
    {
        let imcs = await imcdao.searchbyUser(req);
        return res.json(imcs);
    }
  
}
module.exports = ImcController;