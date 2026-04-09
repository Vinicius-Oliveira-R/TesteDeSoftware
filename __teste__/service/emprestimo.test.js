const  Usuario = require("../../src/model/Usuario");
const Livro = require ("../../src/model/Livro");
const ServicoEmprestimo = require("../../src/service/ServicoEmprestimo");
const casos = require("../dados/emprestimo.json")
import expect from "expect";


describe("Emprestimo",()=>{
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
    expect(saida).toBe(true)
    })


    test('Testa usuário valido(EMPRESTIMOS) e livro invalido ', ()=> {
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
    expect(false).toBe(saida)
    })

    test('Testa usuário invalido(MULTA) e livro invalido ', ()=> {
    // Arrange
    const usuario = new Usuario({
        id: 1,
        nome: 'teste',
        ativo: true,
        emprestimosAtivos: 0, 
        multaPendente: constantes.USUARIO_LIMITE_MULTA +1,
    });
    const livro = new Livro({
        id: 2, 
        titulo: 'testando',
        disponivel: true,
    });
    // Act
    const saida = ServicoEmprestimo.autorizarEmprestimo(usuario)
    // Assert
    expect(false).toBe(saida)
    })

    test('Testa usuário invalido(STATUS) e livro invalido ', ()=> {
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
    expect(false).toBe(saida)
    })


    test('Testa usuário invalido(STATUS) e livro invalido ', ()=> {
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
        emprestimosAtivos: 1;
        const livro new Livro({
            id:1,titulo:"chapeuzinhovermelho",disponivel: false
        })
    });
    // Act
    expect(()=>EmprestimoService.autorizarEmprestimo).toThrow(LIVRO_INDISPONIVEL)
    // Assert
    expect(false).toBe(saida)
    })


    teste.each(casos)('$descricao',(caso)()=>{
        const usuario = new Usuario({
        id: 1,
        nome: 'teste',
        ativo: caso.ativo,
        emprestimosAtivos: caso.emprestimosAtivos, 
        multaPendente: caso.multaPendente,
        });
        const livro = new Livro({
            id: 2, 
            titulo: 'testando',
            disponivel: true,
            emprestimosAtivos: 1;
            const livro new Livro({
                id:1,titulo:"chapeuzinhovermelho",disponivel: caso.livroDisponivel
            });
        });

        //ACT
        const saida = EmprestimoService.autorizarEmprestimo(usuario,livro);

        //Assert
        if(caso.livroDisponivel == true)
            expect(caso.saida).toBe(saida)
        else
            //Act/Assert
        expect(()=>EmprestimoService.autorizarEmprestimo(usuario,livro).toThrow(mensagens.LIVRO_INDISPONIVEL))
    })
)}