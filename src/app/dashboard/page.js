'use client'

import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import { logout, selectUser } from "@/lib/features/user/userSlice";
import Link from "next/link";

const navs = [
    {
        name: "Home",
        path: "/dashboard"
    },
    {
        name: "About",
        path: "/about"
    }
]

function Dashboard(){
    const user = useAppSelector(selectUser)
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () =>{
        dispatch(logout)
        alert(`See you next time ${user.username}`)
        router.push("/auth/login")
    }
    return (
        <div className="flex flex-col justify-center items-center space-y-8">
            <div className="flex space-x-3">
                {
                    navs.map((nav, key) => {
                        return (
                            <Link href={nav.path}>{nav.name}</Link>
                        )
                    })
                }
            </div>
            <span className="font-bold  text-xl">Dashboard Page</span>
            <div className="space-y-4 text-center">
                <h1>Hello {user.username}</h1>
                <p>Your password is {user.password}</p>
            </div>
            <button 
                type="submit"
                onClick={handleLogout}
            >Logout</button>
        </div>
    )
}

export default Dashboard;