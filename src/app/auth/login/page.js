'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';
import { login } from '@/lib/features/user/userSlice';
import { useAppSelector } from '@/lib/hooks';


function Login(){
    const router = useRouter();
    const dispatch = useDispatch();
    const [ formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(login(formData))
        router.push("/dashboard")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        className='border'
                        type='text'
                        name={'username'}
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        className='border'
                        type='password'
                        name={'password'}
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit' className='border bg-blue-600 w-56 text-white font-bold text-xl rounded'>Submit</button>
            </form>
        </div>
    )
}

export default Login;