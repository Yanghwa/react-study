import React, { memo, useContext } from 'react';
import { TableContext } from './minesweeper';
import Tr from './Tr';

const Table = memo(() => {
  const { tableData } = useContext(TableContext);
  return (
    <table>
      <tbody>
        {Array(tableData.length).fill().map((tr, i) => <Tr rowIndex={i} />)}
      </tbody>
    </table>
  );
});

export default Table;