import React, { memo, useContext } from 'react';
import { TableContext } from './minesweeper';
import Td from './Td';

const Tr = memo(({rowIndex}) => {
  const {tableData} = useContext(TableContext);
  return (
    <tr>
      {tableData[0] && Array(tableData[0].length).fill().map((tr, i) => 
        <Td rowIndex={rowIndex} cellIndex={i} />)}
    </tr>
  );
});

export default Tr;