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
}

class Livro {
    constructor(titulo, ano, autor) {
        this.titulo = titulo;
        this.ano = ano;
        this.autor = autor;
        this.disponivel = true;
    }

    exibirInfo() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Disponível: ${this.disponivel ? "Sim" : "Não"}`);
    }
}

// Exemplo de uso
const minhaBiblioteca = new Biblioteca();

const livro1 = new Livro("O Hobbit", 1937, "Tolkien");
const livro2 = new Livro("1984", 1949, "Orwell");

minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);

minhaBiblioteca.exibirLivros();
