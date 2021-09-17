// 初始状态
export const initState = {
    count: 0,
    id: 1,
  };
  
  export function reducer(state,{type, ...payload}){
    switch(type) {
      case 'SET_VALUE':{
        return {
          ...state,
          [payload.key]:[payload.value],
        };
      }
      default: {
        return state;
      }
    }
  }
  