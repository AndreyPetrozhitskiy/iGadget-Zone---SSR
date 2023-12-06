'use client'
import Image from 'next/image'
import { Provider } from "react-redux";
import store from "./store"
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
export default function Home() {
  return (
    <Provider store={store}>
    <div>
      <TheHeader />
      <h1>HIII</h1>
      <TheFooter />

    </div>
    </Provider>
  )
}
