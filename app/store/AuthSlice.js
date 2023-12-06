import authdata from "./Products/DataAuth"

import { createSlice } from '@reduxjs/toolkit'

const dataAuthSlice = createSlice(
  {
    name: 'oneBlockData',
    initialState: {
        authdataMassive: authdata,
    },
    reducers: {
      register: (state, action) => {
        const { login, password } = action.payload;
  
        // Добавление нового пользователя в DataBaseUser
        state.authdataMassive[1].DataBaseUser.push({
          login,
          password,
          isAuth: true,
        });
  
        // Обновление AuthData[0] 
        state.authdataMassive[0] = {
          login,
          password,
          isAuth: true,
        };
      },
      logout: (state) => {
        // Обновление AuthData[0] 
        state.authdataMassive[0] = {
          login: "",
          password: "",
          isAuth: false,
        };
      },
      login: (state, action) => {
        const { login, password } = action.payload;
      
        console.log("Trying to log in with:", login, password);
      
        const user = state.authdataMassive[1].DataBaseUser.find(
          (user) => user.login === login && user.password === password
        );
      
        console.log("Found user:", user);
      
        if (user) {
          state.authdataMassive[0] = {
            login: user.login,
            password: user.password,
            isAuth: true,
          };
          state.loginError = null;
        } else {
          console.log("Пользователь не найден или введен неверный пароль");
          state.loginError = "Неверный логин или пароль";
        }
      },
    },
  });

export const {register,logout,login} = dataAuthSlice.actions
export default dataAuthSlice.reducer  






