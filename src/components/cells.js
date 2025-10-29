const createCellContent = (cellContent) => {
    const {value, onClickCell, ...rest} = cellContent;

    const cellElement = document.createElement('div');
    cellElement.classList.add('cell-content');
    cellElement.textContent = value;


    cellElement.onclick = (event) => {
        onClickCell(event, value);
    };

    return cellElement;
}

export default createCellContent;