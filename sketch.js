let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria()
}

function palavraAleatoria() {
  let palavras = ["Chuva", "Chuvarada", "Chuvinha"];
  return random(palavras);
}

function inicializaCores() {
  background("#6235DB");
  fill("#D1D4DD");
  textSize(64);
  textAlign(CENTER, CENTER);

  let chuva = "⛈"
  text(chuva, 350, 50)
  let chuva2 = "🌧"
  text(chuva2, 50, 350)
}

function palavraParcial(minimo, maximo) {
   let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
   let parcial = palavra.substring(0, quantidade);
   return parcial;
}

function draw() {
  inicializaCores();
  
  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
}