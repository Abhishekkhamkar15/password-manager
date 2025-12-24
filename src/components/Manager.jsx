import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()

    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const showPassword = () => {
        passwordRef.current.type =
            passwordRef.current.type === "password" ? "text" : "password"

        ref.current.src =
            ref.current.src.includes("view") ? "icons/hide.png" : "icons/view.png"
    }

    const savePassword = () => {
        // ✅ NEW VALIDATION (NO DESIGN CHANGE)
        if (
            form.site.trim() === "" &&
            form.username.trim() === "" &&
            form.password.trim() === ""
        ) {
            alert("⚠️ Please enter at least one field")
            return
        }

        const newPassword = { ...form, id: uuidv4() }

        setPasswordArray([...passwordArray, newPassword])
        localStorage.setItem(
            "passwords",
            JSON.stringify([...passwordArray, newPassword])
        )

        alert("✅ Password saved successfully!")
        setform({ site: "", username: "", password: "" })
    }

    const deletePassword = (id) => {
        let con = confirm("Do you want to delete this password?")
        if (con) {
            const updated = passwordArray.filter(item => item.id !== id)
            setPasswordArray(updated)
            localStorage.setItem("passwords", JSON.stringify(updated))
        }
    }

    const editPassword = (id) => {
        const editItem = passwordArray.find(i => i.id === id)
        setform(editItem)

        const updated = passwordArray.filter(item => item.id !== id)
        setPasswordArray(updated)
        localStorage.setItem("passwords", JSON.stringify(updated))
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        alert("📋 Copied to clipboard!")
    }

    return (
        <>
        <div className="absolute inset-0 -z-10 h-full w-full py-2 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size:6rem_4rem">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        </div>

        <div className=" mx-auto bg-slate-60 md:mycontainer max-w-4xl p-4 md:p-0" >
            <h1 className='text-4xl text-center'>Password-Manager</h1>
            <p className='text-green-600 font-bold text-center'>Save Your Passwords</p>

            <div className='text-black flex flex-col p-4 gap-8 items-center'>
                <input value={form.site} onChange={handleChange}
                    placeholder="Enter Website Name/Url"
                    className="rounded-full border border-green-700 w-full py-2 p-4"
                    type="text" name="site" />

                <div className="flex flex-col md:flex-row w-full py-2 gap-4 md:gap-8">
                    <input value={form.username} onChange={handleChange}
                        placeholder='Enter Username'
                        className="rounded-full border border-green-700 w-full py-2 p-4"
                        type="text" name="username" />

                    <div className="relative">
                        <input ref={passwordRef} value={form.password} onChange={handleChange}
                            placeholder='Enter Password'
                            className="rounded-full border border-green-700 w-full py-2 p-4"
                            type="password" name="password" />
                        <span className='absolute right-0 top-1 cursor-pointer' onClick={showPassword}>
                            <img ref={ref} className="p-1 py-2" width={24} src='icons/view.png' alt='eye'/>
                        </span>
                    </div>
                </div>

                <button onClick={savePassword}
                    className='flex justify-center items-center gap-2 bg-purple-300 hover:bg-purple-400 w-fit rounded-full px-4 py-2'>
                    Save Password
                </button>
            </div>

            {/* PASSWORD LIST — DESIGN UNCHANGED */}
            <div className="w-full max-w-5xl mx-auto mt-10 overflow-x-auto">
                <table className="w-full ">
                    <thead className="bg-purple-300">
                        <tr>
                            <th className="min-w-[160px] border border-white p-2 text-left">Site</th>
                            <th className="min-w-[160px] border border-white p-2 text-left">Username</th>
                            <th className="min-w-[160px] border border-white p-2 text-left">Password</th>
                            <th className="min-w-[90px] border border-white p-2 text-left">Action</th>

                        </tr>
                    </thead>

                    <tbody className='bg-purple-100'>
                        {passwordArray.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center p-4">
                                    No passwords saved
                                </td>
                            </tr>
                        )}

                        {passwordArray.map((item, index) => (
                            <tr key={index} className="align-top">

                                <td className="border border-white p-2 align-top ">
                                    <div className="flex items-start justify-between gap-2 min-w-0">
                                        <span className="break-all pr-2">{item.site}</span>
                                        <img src="/icons/copy.png" className="w-4 h-4 cursor-pointer"
                                            onClick={() => copyText(item.site)} />
                                    </div>
                                </td>

                                <td className="border border-white p-2 align-top">
                                    <div className="flex items-start justify-between gap-2 min-w-0">
                                        <span className="break-all pr-2">{item.username}</span>
                                        <img src="/icons/copy.png" className="w-4 h-4 cursor-pointer"
                                            onClick={() => copyText(item.username)} />
                                    </div>
                                </td>

                                <td className="border border-white p-2 align-top">
                                    <div className="flex items-start justify-between gap-2 min-w-0">
                                        <span className="break-all pr-2">{item.password}</span>
                                        <img src="/icons/copy.png" className="w-4 h-4 cursor-pointer"
                                            onClick={() => copyText(item.password)} />
                                    </div>
                                </td>

                                <td className="flex border border-white p-4 gap-2 align-top">
                                    <span className='cursor-pointer mx-2' onClick={() => editPassword(item.id)}>
                                        <img width={20} src='icons/edit.png' />
                                    </span>
                                    <span className='cursor-pointer' onClick={() => deletePassword(item.id)}>
                                        <img width={20} src="icons/delete.png" />
                                    </span>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Manager
