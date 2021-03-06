import React, { memo, useCallback, useContext, useMemo } from 'react';
import { TableContext, CODE, OPEN_CELL, CLICK_MINE, FLAG_CELL, QUESTION_CELL, NORMALIZE_CELL } from './minesweeper';

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL: 
    case CODE.MINE: 
      return {
        background: '#444',
      }
    case CODE.CLICKED_MINE: 
    case CODE.OPENED: 
      return {
        background: 'white',
      }
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return {
        background: 'red',
      }
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return {
        background: 'yellow',
      }
    default:
      return {
        background: 'white',
      }
  }
};

const getTdText = (code) => {
  console.log('get td text');
  switch (code) {
    case CODE.NORMAL: 
      return '';
    case CODE.MINE: 
      return 'X';
    case CODE.CLICKED_MINE:
      return '펑';
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return '!';
    case CODE.QUESTION:
    case CODE.QUESTION_MINE:
      return '?';
    default:
      return code || '';
  }
};

const Td = memo(({rowIndex, cellIndex}) => {
  const { tableData, dispatch, halted } = useContext(TableContext);

  const onClickTd = useCallback(() => {
    if (halted) {
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.NORMAL: 
        dispatch({type: OPEN_CELL, row: rowIndex, cell: cellIndex});
        return;
      case CODE.MINE:
        dispatch({type: CLICK_MINE, row: rowIndex, cell: cellIndex});
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);

  const onRightClickTd = useCallback((e) => {
    e.preventDefault();
    if (halted) {
      return;
    }
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.NORMAL:
      case CODE.MINE:
          dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex});
          return;
      case CODE.FLAG_MINE:
      case CODE.FLAG:
        dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex});
        return;
      case CODE.QUESTION_MINE:
      case CODE.QUESTION:
        dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex});
        return;
      default:
        return;
    }
  }, [tableData[rowIndex][cellIndex], halted]);

  console.log('td rendered');

  return <RealTd onClickTd={onClickTd} onRightClickTd={onRightClickTd} data={tableData[rowIndex][cellIndex]} />
  // return useMemo(() => (
  //   <td
  //     onClick={onClickTd}
  //     onContextMenu={onRightClickTd}
  //     style={getTdStyle(tableData[rowIndex][cellIndex])}>{getTdText(tableData[rowIndex][cellIndex])}</td>
  // ), [tableData[rowIndex][cellIndex]]);
});

// useContext render reduced
const RealTd = memo(({onClickTd, onRightClickTd, data}) => {
  console.log('real td rendered');
  return (
    <td
      onClick={onClickTd}
      onContextMenu={onRightClickTd}
      style={getTdStyle(data)}>
        {getTdText(data)}
    </td>
  );
});

export default Td;