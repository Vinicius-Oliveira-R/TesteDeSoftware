const  Usuario = require("../../src/model/Usuario");
const Livro = require ("../../src/model/Livro");
const ServicoEmprestimo = require("../../src/service/ServicoEmprestimo");
import expect from "expect";

test('Testa usuário e livro válido ', ()=> {
// Arrange
const usuario = new Usuario({
    id: 1,
    nome: 'teste',
    ativo: true,
    emprestimosAtivos: 500, 
    multaPendente: 900,
});
const livro = new Livro({
     id: 2, 
     titulo: 'testando',
     disponivel: true,
});
// Act
const saida = ServicoEmprestimo.autorizarEmprestimo(usuario)
// Assert
expect(true).toBe(saida)
})