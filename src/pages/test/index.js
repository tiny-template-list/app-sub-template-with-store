import React from 'react';
import {ConfigContext} from './context';
import Count from './block/count';
import Show from './block/show';

export default function Page() {
  return <ConfigContext>
    <Count/>
    <Show/>
  </ConfigContext>
}
