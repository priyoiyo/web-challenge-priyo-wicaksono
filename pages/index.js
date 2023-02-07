import Head from 'next/head'
import React, { useState } from 'react'
import axios from 'axios'
import Signin from '@/components/modal/Modal'
import Router from 'next/router'



export default function Home() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [modalText, setModalText] = useState('')
    const onClickLogin = () => {
        if (!username && !password) {
            setModalTitle('Form Invalid')
            setModalText('User ID and Password must be filled!')
            setIsOpen(true)
        } else if (!username && password) {
            setModalTitle('Form Invalid')
            setModalText('User ID must be filled!')
            setIsOpen(true)
        } else if (username && !password) {
            setModalTitle('Form Invalid')
            setModalText('Password must be filled!')
            setIsOpen(true)
        } else {
            axios.post('https://dummyjson.com/auth/login', {
                username: username,
                password: password
            })
                .then((data) => {
                    window.localStorage.setItem('userToken', data.token)
                    Router.push('/shop')
                })
                .catch((error) => {
                    setModalTitle('Invalid Credentials')
                    setModalText('Your Username or Password Is Not Match With Our Database!')
                    setIsOpen(true)
                })
        }
    }

    return (
        <>
            <Head>
                <title>1st Bugs E-commerce</title>
            </Head>

            <main>

                <div className="bg-gray-900">
                    <div className="flex flex-col items-center md:justify-center sm:justify-start  px-6 py-8 mx-auto xs:h-screen md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-md overflow-hidden shadow sm:max-w-md xl:p-0">
                            <img className="fixed" src="/header-login.png" alt="" />
                            <img className='block mt-20 mx-auto justify-center items-center w-20' src="/logo.png" alt="" />
                            
                            <div className="block mt-16 p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                                    Login
                                </h1>
                                <span className='text-[12px] '>
                                    Please sign in to continue
                                </span>
                                <div className="space-y-4 md:space-y-6">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">User ID</label>
                                        <input type="text" name="userid" id="userid"
                                            className="placeholder:italic  border-b-2 focus:border-purple-600 
                                        focus:outline-none text-sm  w-full p-1" placeholder="User ID"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium">Password</label>
                                        <input type="password" name="password" id="password"
                                            placeholder="Password"
                                            className="placeholder:italic  border-b-2 focus:border-purple-600 
                                        focus:outline-none text-sm  w-full p-1"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>

                                    <button className="bg-purple-700 float-right hover:bg-purple-900
                                     text-white text-sm font-bold py-2 px-10 rounded-full"
                                        onClick={onClickLogin}>
                                        Login
                                    </button>
                                </div>
                            </div>
                            <span className='block text-[12px] w-full text-center xs:mt-20 sm:mt-30 mb-8 '>
                                Don't have an account? <a className=' text-orange-600 font-bold cursor-pointer'>Sign Up</a>
                            </span>
                        </div>
                    </div>
                </div>
                <Signin isOpen={isOpen} modalText={modalText} modalTitle={modalTitle} onClose={() => setIsOpen(false)} />
            </main>
        </>
    )
}
