import React, { useContext } from 'react';
import {Context} from '../context';

const Sub = React.memo(props => {
  console.log('我被渲染了', props)
  return (
    <div>现在的id是{props.id}</div>
  );
});

/** 消费状态 */
export default function Test() {
  const {state:{id, count}} = useContext(Context);
  return (
    <div>
        {count}
        <Sub id={id}/>
    </div>
  );
}
