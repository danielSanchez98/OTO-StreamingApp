const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var AlbumSchema = new Schema({
    
    nombre: {
        type: String,
        required: true
    },
    idArtista: {
        type: ObjectId,
        ref: 'Artistas',
        required: true
    },
    genero: String,
    disquera: String,
    anio: Number,
    imagen: {
        type: String,
        default: null
    },
    estado: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model('Album', AlbumSchema);