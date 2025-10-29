import createBoard from '../components/board.js';

async function getUserData() {
    const registros = await fetch('https://loaclhost:3001/register', { method: 'GET'});
    const data = await response.json();
    return data;
}

function Game() {

    const container = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Sudoku Game';

    const footer = document.createElement('span');
    footer.id = 'footer';
    
    footer.textContent = 'Numero de usuarios: Cargando...';

    const board = createBoard();


    container.appendChild(title);
    container.appendChild(board);
    container.appendChild(footer);

    //getUserData().then(response => {
    //    console.log('User data fetched:', response.registros);
    //    const footer = document.getElementById('footer');
//
  //      if (footer) {
    //        footer.textContent = `Numero de usuarios: ${response.data.length}`;
      //  }

    //});
    
    return container;
}

export default Game;