// Objeto Material: Carro
class Carro {
    constructor(marca, modelo, cor) {
      this.marca = marca
      this.modelo = modelo
      this.cor = cor
      this.velocidade = 0
    }
  
    acelerar(incremento) {
      this.velocidade += incremento
      console.log(`O carro ${this.marca} ${this.modelo} está agora a ${this.velocidade} km/h.`)
    }
  
    frear(decremento) {
      if (this.velocidade - decremento >= 0) {
        this.velocidade -= decremento
      } else {
        this.velocidade = 0
      }
      console.log(`O carro ${this.marca} ${this.modelo} reduziu a velocidade para ${this.velocidade} km/h.`)
    }
  
    pintar(novaCor) {
      this.cor = novaCor
      console.log(`O carro ${this.marca} ${this.modelo} foi pintado de ${this.cor}.`)
    }
  }
  
  // Objeto Material: Caneta
  class Caneta {
    constructor(cor, tipoPonta, carga) {
      this.cor = cor
      this.tipoPonta = tipoPonta
      this.carga = carga
      this.escrevendo = false
    }
  
    escrever(texto) {
      if (this.carga > 0) {
        this.escrevendo = true
        console.log(`Escrevendo "${texto}" com a caneta ${this.cor} de ponta ${this.tipoPonta}.`)
        this.carga--
      } else {
        console.log("A caneta está sem carga.")
      }
    }
  
    recarregar() {
      this.carga = 100
      console.log(`A caneta ${this.cor} foi recarregada.`)
    }
  
    mudarCor(novaCor) {
      this.cor = novaCor
      console.log(`A caneta mudou para a cor ${this.cor}.`)
    }
  }
  
  // Objeto Abstrato: Usuário
  class Usuario {
    constructor(nome, email, idade) {
      this.nome = nome
      this.email = email
      this.idade = idade
    }
  
    atualizarEmail(novoEmail) {
      this.email = novoEmail
      console.log(`${this.nome}, seu novo email é ${this.email}.`)
    }
  
    fazerAniversario() {
      this.idade++
      console.log(`Feliz aniversário, ${this.nome}! Agora você tem ${this.idade} anos.`)
    }
  
    saudacao() {
      console.log(`Olá, eu sou ${this.nome}, tenho ${this.idade} anos e meu email é ${this.email}.`);
    }
  }
  
  class Postagem {
    constructor(titulo, conteudo, autor) {
      this.titulo = titulo;
      this.conteudo = conteudo;
      this.autor = autor;
      this.publicado = false;
      this.dataPublicacao = null;
    }
  
    publicar() {
      if (!this.publicado) {
        this.publicado = true;
        this.dataPublicacao = new Date().toLocaleDateString();
        console.log(`A postagem "${this.titulo}" foi publicada por ${this.autor} em ${this.dataPublicacao}.`);
      } else {
        console.log(`A postagem "${this.titulo}" já está publicada desde ${this.dataPublicacao}.`);
      }
    }
  
    editar(novoConteudo) {
      if (!this.publicado) {
        this.conteudo = novoConteudo;
        console.log(`O conteúdo da postagem "${this.titulo}" foi editado.`);
      } else {
        console.log(`Não é possível editar uma postagem já publicada.`);
      }
    }
  
    visualizar() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Conteúdo: ${this.conteudo}`);
      console.log(`Publicado: ${this.publicado ? 'Sim' : 'Não'}`);
      if (this.publicado) {
        console.log(`Data de Publicação: ${this.dataPublicacao}`);
      }
    }
  }
  
  // Exemplos de uso dos objetos
  

  const meuCarro = new Carro('Toyota', 'Corolla', 'prata');
  meuCarro.acelerar(50)
  meuCarro.frear(20)
  meuCarro.pintar('azul')
  

  const minhaCaneta = new Caneta('azul', 'esferográfica', 50);
  minhaCaneta.escrever('Testando a caneta.')
  minhaCaneta.mudarCor('preta')
  
 
  const novoUsuario = new Usuario('João', 'joao@email.com', 30);
  novoUsuario.atualizarEmail('joao.novo@email.com'); 
  novoUsuario.fazerAniversario(); 
  novoUsuario.saudacao(); 
  

  const minhaPostagem = new Postagem(
    "Dia ensolarado",
    "Olá, hoje o dia está muito tranquilo, com o tempo limpo, poucas nuvens no céu. ",
    "Desenvolvedor"
  );
  minhaPostagem.publicar()
  minhaPostagem.editar("Olá, hoje o dia está muito tranquilo, com o tempo limpo, poucas nuvens no céu, com um sol pra cada um" );
  minhaPostagem.visualizar()