import dataBasket from "./Products/DataBasket"

import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice(
  {
    name: 'oneBlockData',
    initialState: {
      BasketMassive: dataBasket,
    },
    reducers: {
      newItem: (state, action) => {
        const { Model, Price,Photo,Key } = action.payload;
  
        // Добавление товара в корзину
        state.BasketMassive.push({
        Model,
        Price,
        Photo,
        Key,
        Count: 1,
        get countPrice() { return this.Price * this.Count; },
        });
  
        
      },
      incrementCount: (state, action) => {
        const { Key } = action.payload;
        const item = state.BasketMassive.find((item) => item.Key === Key);
  
        if (item) {
          // Изменение Count, увеличение на 1, но не меньше 1
          item.Count = Math.max(item.Count + 1, 1);
          item.countPrice = item.Price * item.Count;
          console.log('Значение увеличено')
        }
      },
      decrementCount: (state, action) => {
        const { Key } = action.payload;
        const item = state.BasketMassive.find((item) => item.Key === Key);
  
        if (item) {
          // Изменение Count, уменьшение на 1, но не меньше 1
          item.Count = Math.max(item.Count - 1, 1);
          item.countPrice = item.Price * item.Count;
          console.log('Значение уменьшено')
        }
      },
      removeItem: (state, action) => {
        const { Key } = action.payload;
        // Удаление элемента из корзины
        state.BasketMassive = state.BasketMassive.filter((item) => item.Key !== Key);
      },

    }
    
  }
)

export const { newItem, incrementCount, decrementCount, removeItem } = basketSlice.actions;
export default basketSlice.reducer  

