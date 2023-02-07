import '@/styles/globals.css'
import React, { useEffect } from "react";
import { store } from '../app/store'
import { Provider } from 'react-redux'
import Navbar from '@/components/navbar/Navbar'


export default function App({ Component, pageProps }) {
  // const { cartItems } = useSelector((state) => state.cart);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(total());
  // }, [cartItems]);
  return (
  <Provider store={store}>

  <Component {...pageProps} />
  <Navbar/>
  </Provider>
  )
}
