class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    exibirLivros() {
        this.livros.forEach((livro, i) => {
            console.log(`--- Livro ${i + 1} ---`);
            livro.exibirInfo();
        });
    }

    emprestarLivro(livro) {
        const livroAEmprestar = this.livros.find(item => item === livro);
        if(livroAEmprestar){
            livroAEmprestar.disponivel = false;
        }else{
            console.log("Livro não encontrado!");
        }
    }

    devolverLivro(livro) {
        const livroADevolver = this.livros.find(item => item === livro);
        if(livroADevolver){
            if(livroADevolver.disponivel === false){
                livroADevolver.disponivel = true;
                console.log(`Livro ${livroADevolver.getTitulo} devolvido com sucesso!`);
            }else{
                console.log(`Livro ${livroADevolver.getTitulo} não estava emprestado!`);
            }
        }else{
            console.log("Livro não encontrado na biblioteca!");
        }
    }
}

class Livro {
    constructor(titulo, ano, autor) {
        this.titulo = titulo;
        this.ano = ano;
        this.autor = autor;
        this.disponivel = true;
    }

    // Métodos getters
    getTitulo() {
        return this.titulo;
    }

    getAno() {
        return this.ano;
    }

    getAutor() {
        return this.autor;
    }

    isDisponivel() {
        return this.disponivel;
    }

    exibirInfo() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Disponível: ${this.disponivel ? "Sim" : "Não"}\n`);
    }
}

// Exemplo de uso
const minhaBiblioteca = new Biblioteca();

const hobbit = new Livro("O Hobbit", 1937, "Tolkien");
const o1984 = new Livro("1984", 1949, "Orwell");

minhaBiblioteca.adicionarLivro(hobbit);
minhaBiblioteca.adicionarLivro(o1984);

minhaBiblioteca.devolverLivro(hobbit);

minhaBiblioteca.exibirLivros();
