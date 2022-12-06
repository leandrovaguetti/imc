const mongoose = require('mongoose');

const ImcSchema = new mongoose.Schema(
        {
          imc: Number,
		      _idUser: {
                 type: mongoose.Schema.Types.ObjectId, 
                 required: true
              },
           },
         { timestamps: true }
);

module.exports = mongoose.model('Imc', ImcSchema);