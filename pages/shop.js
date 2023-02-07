
import React, {useEffect} from 'react'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, productSelectors } from '@/slices/productSlice'
import ProductCard from '@/components/product/ProductCard'
import Slider from '@/components/slider/slider'

const shop = () => {
        // const {title, price} = useSelector(state => state.product)
        const dispatch = useDispatch();
        const products = useSelector(productSelectors.selectAll)
        useEffect(()=> {
            dispatch(getProducts())
            // console.log(dispatch(getProducts()))
        },[dispatch])
  return (
    <>
    <Head>
        <title>1st Bugs E-commerce</title>
    </Head>

    <main>
  
        <div className="bg-gray-900 xs:pl-2 xs:pr-2 md:pl-20 md:pr-6 py-8 min-h-screen">
        
        {/* <Slider/> */}
            <div className="w-full mt-8 h-full flex flex-wrap justify-center mb-32 ">
            {products.map((product, index) => (
                   <ProductCard data={product} key={index}/>
                ))}

            </div>
        </div>

    </main>
    </>
  )
}

export default shop