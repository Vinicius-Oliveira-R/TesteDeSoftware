
class Usuario{
    constructor(
        {id, nome, ativo, emprestimosAtivos, multaPendente}
    ){
        this.id = id;
        this.nome = nome;
        this.emprestimosAtivos = emprestimosAtivos;
        this.multaPendente = multaPendente;
    };
}

module.exports = Usuario;

