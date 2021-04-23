 //PEGA AS TAGS DO HTML
 var tela = document.querySelector('canvas');
          var pincel = tela.getContext('2d');
          pincel.fillStyle = 'lightgray';
          pincel.fillRect(0, 0, 600, 400);

          //FUNÇAO QUE DESENHA O CIRCULO
          function desenhaCirculo(x, y, raio, cor) {

              pincel.fillStyle = cor;
              pincel.beginPath();
              pincel.arc(x, y, raio, 0, 2 * Math.PI);
              pincel.fill();
          }
          //FUNÇAO QUE LIMPA A TELA  
          function limpaTela() {

              pincel.clearRect(0, 0, 600, 400);
          }
          //VARIAVEIS PARA AUXILIAR NO CRESCIMENTO E DECRESCIMENTO DA BOLA
          var raio = 20 
          var crescimento = 1;

          //FUNÇAO QUE ATUALIZA A TELA E FAZ A BOLA DIMINUIR OU AUMENTAR
          function atualizaTela(){
            limpaTela();

            if (raio > 30) {
              crescimento = -1;
            }else if (raio < 20) {
              crescimento = 1;
            }

            desenhaCirculo(300,200,raio,'red');
            raio = raio + crescimento;
          }

          //FUNÇAO QUE USA UM INTERVVALO DE TEMPO PARA FAZER A BOLA PULSAR
          setInterval(atualizaTela,10);