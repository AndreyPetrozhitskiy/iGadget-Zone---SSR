import dropdowns from "./Products/DataProduct"

import { createSlice } from '@reduxjs/toolkit'

const dataSlice = createSlice(
  {
    name: 'oneBlockData',
    initialState: {
      oneBlockDataMassive: dropdowns,
    },
    reducers: {
        
      // что-то пока хз
    }
    
  }
)

export const {} = dataSlice.actions
export default dataSlice.reducer  



























  // ПОТОМ!!!!!!


      // {
      //   title: 'Телевизоры',
      //   isOpen: false,
      //   items: [
      //     'Samsung',
      //     'Xiaomi',
          
      //   ],
      //   product:{
      //     Samsung:[
      //       {}, {}, {}, {},
      //   ],
      //   Xiaomi:[
      //       {}, {}, {}, {},
      //   ],
      //   }
      // },
      // {
      //   title: 'Аксессуары',
      //   isOpen: false,
      //   items: [
      //     'Защитные стекла',
      //     'Чехлы',
      //   ],
      //   product:{
      //     'Защитные стекла':[
      //       {}, {}, {}, {},
      //   ],
      //     Чехлы:[
      //       {}, {}, {}, {},
      //     ],
      //   }
      // },