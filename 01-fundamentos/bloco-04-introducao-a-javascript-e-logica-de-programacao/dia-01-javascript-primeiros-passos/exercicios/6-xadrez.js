let peca = 'RAINHA';
let result = peca.toLowerCase();

switch (result){
    case 'peao':
        console.log('O peão pode mover-se uma ou duas casas para frente partindo de sua posição inicial, após essa jogada ele pode se mover apenas uma casa e só pode capturar peças na diagonal esquerda ou direita a sua frente.');
        break;

    case 'torre':
        console.log('A torre pode se mover na horizontal e na vertical por todo tabuleiro.');
        break;
    
    case 'cavalo':
        console.log('O cavalo pode se mover em forma de L por todo tabuleiro.');
        break;
    
    case 'bispo':
        console.log('O bispo pode se mover na diagonal por todo tabuleiro.');
        break;

    case 'rainha':
        console.log('A rainha pode se mover uma casa para qualquer direção.');
        break;
    
    case 'rei':
        console.log('O rei pode se mover para todas as direções por todo tabuleiro.');
        break;
    
    default:
        console.log('ERRO: O nome digitado não existe ou está incorreto.');
}
