import React, { useMemo } from 'react';
import Tr from './Tr';

const Table = ({tableData, dispatch}) => {
  return (
    <table >
      <tbody>
        {Array(tableData.length).fill().map((tr, i) => 
          useMemo(() => 
            <Tr key={i} dispatch={dispatch} rowIndex={i} rowData={tableData[i]}></Tr>)
          )
        }
      </tbody>
    </table>
    
  )
};

export default Table;