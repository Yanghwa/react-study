import React, { memo } from 'react';

// memo - purecomponent
const Try = memo(({tryInfo}) => {

  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

export default Try;