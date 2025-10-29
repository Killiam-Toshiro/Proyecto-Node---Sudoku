import createCellContent from './cells.js';

const cellData = [
    [{value: '1'}, {value: '1'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
    [{value: '1'}, {value: '1'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
    [{value: '1'}, {value: '1'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
    [{value: '1'}, {value: '1'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
    [{value: '1'}, {value: '1'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
    [{value: '1'}, {value: '1'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
    [{value: '1'}, {value: '1'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
    [{value: '1'}, {value: '1'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
    [{value: '1'}, {value: '1'}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}]
];

const onClickCell = (event, value) => {
    console.log('Cell clicked', event, value);
}

const createBoard = (n=3, m=3) => {
    const board = document.createElement('div');
    board.classList.add('board');

    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < m; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            for (let k = 0; k < n; k++) {
                const subRow = document.createElement('div');
                subRow.classList.add('subRow');
                for (let l = 0; l < m; l++) {
                    const subCell = document.createElement('div');
                    subCell.classList.add('subCell');

                    const createCell = createCellContent(
                        {...cellData[i * m + k][j * m + l], onClickCell}
                    );

                    subCell.appendChild(createCell);
                    subRow.appendChild(subCell);
                }
                cell.appendChild(subRow);
            }
            row.appendChild(cell);
        }
        board.appendChild(row);
    }

    return board;
};

export default createBoard;