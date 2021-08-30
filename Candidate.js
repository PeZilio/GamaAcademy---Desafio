const mongoose = require ("mongoose");
const { stringify } = require("querystring");

const CandidateSchema = new mongoose.Schema ({
    nomecompleto:{ type: String, unique: false, required: true},
    datanasc: {type: Date, unique: false, required: true},
    genero: {type: String, unique: false, required: true},
    estcivil: {type: String, unique: false, required: false},
    identidade: {type: String, unique: true, required: true},
    cpf: {type: String, unique: true, required: true},
    tipohabilitacao: {type: String, unique: false, required: false},
    veiulo: {type: String, unique: false, required: false},
    cep: {type: String, unique: false, required: true},
    rua: {type: String, unique: false, required: true},
    numero: {type: String, unique: false, required: true},
    complemento: {type: String, unique: false, required: false},
    bairro: {type: String, unique: false, required: true},
    cidade: {type: String, unique: false, required: true},
    uf: {type: String, unique: false, required: true},
    telfixo1: {type: String, unique: false, required: false},
    telfixo2: {type: String, unique: false, required: false},
    telcontato: {type: String, unique: false, required: false},
    nomecontato: {type: String, unique: false, required: false},
    telcelular: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    linkedin: {type: String, unique: true, required: false},
    skype: {type: String, unique: true, required: false},
    cargo: {type: String, unique: false, required: true},

}, {
    timestamps: true
}); 

 module.exports = mongoose.model("Candidate", CandidateSchema);
