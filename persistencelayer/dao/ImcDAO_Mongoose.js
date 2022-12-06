const mongoose = require('mongoose');

const IImcDAO = require('./IImcDAO.js');

const Imc = require('../models/Imc');


class ImcDAO_Mongoose extends IImcDAO{

   constructor(){ super();
  mongoose.connect('mongodb+srv://vaguetti:dwm20221@cluster0.004qy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology: true
});
                }
     async create(req){

          const imc =  await Imc.create(req.body);
          return imc;
     }  
     async recovery(){ 
          let imcs = await Imc.find().sort({ createdAt: -1 }).limit(5);
          return imcs; 
         }
     async update(req){
       let imc = await Imc.findByIdAndUpdate(req.params.id,req.body, 
       {new:true});
       return imc;
       
     }
     async delete(req){
        let imc = await    Imc.findByIdAndRemove(req.params.id);
        return imc; 
     } 
  
     async search(req){
        let imcs = await Imc.find(
          { _idUser : req.query.idUser}
                                 ).sort({ createdAt: -1 }).limit(5); 
       return imcs;
       
     } 

    async searchbyUser(req){
        let imcs = await Imc.find(
          { _idUser : req.params.iduser}
                                 ).sort({ createdAt: -1 }).limit(5); 
       return imcs;
       
     } 
     
   
}
module.exports = ImcDAO_Mongoose;