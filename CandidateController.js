const Candidate = require ("./models/Candidate");

module.exports = {

    async register (req, res) {

        const { nomecompleto, datanasc, genero, 
                estcivil, identidade, cpf, tipohabilitacao, 
                veiculo, rua, numero, complemento, bairro, cidade,
                uf, telfixo1, telfixo2, telcontato, nomecontato, telcelular,
                email, linkedin, skype, cargo } = req.body;
        
        const   newCandidate = new Candidate ();
                newCandidate.nomecompleto = nomecompleto;
                newCandidate.datanasc = datanasc;
                newCandidate.genero = genero;
                newCandidate.estcivil = estcivil;
                newCandidate.identidade = identidade;
                newCandidate.cpf = cpf;
                newCandidate.tipohabilitacao = tipohabilitacao;
                newCandidate.veiculo = veiculo;
                newCandidate.rua = rua;
                newCandidate.numero = numero;
                newCandidate.complemento = complemento;
                newCandidate.bairro = bairro;
                newCandidate.cidade = cidade;
                newCandidate.uf = uf;
                newCandidate.telfixo1 = telfixo1;
                newCandidate.telfixo2 = telfixo2;
                newCandidate.telcontato = telcontato;
                newCandidate.nomecontato = nomecontato;
                newCandidate.telcelular = telcelular;
                newCandidate.email = email;
                newCandidate.linkedin = linkedin;
                newCandidate.skype = skype;
                newCandidate.cargo = cargo;

        newCandidate.save((err, savedCandidate) => {
            if (err){
                console.log (err);
                return res.status(500).send("Cadastro não concluído! Verifique dados informados.");
            }

            return res.status(200).send(savedCandidate);
        });
    },
       

};
