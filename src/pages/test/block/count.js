import React, { Fragment, useContext } from 'react';
import {Context} from '../context';

/** 创造状态 */
export default function Count() {
  const {state:{count}, setValue} = useContext(Context);
  return (
    <Fragment>
      <button onClick={() => setValue("count", +count+1)}> + 1 </button>
      <button onClick={() => setValue("count", +count-1)}> - 1 </button>
      <button onClick={() => setValue("id", Math.random())}> 设置id </button>
    </Fragment>
  );
}
