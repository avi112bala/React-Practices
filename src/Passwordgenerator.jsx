import React, { useCallback, useEffect, useRef, useState } from 'react'

const Passwordgenerator = () => {
    const [length, setlength] = useState(8)
    const [number, setnumber] = useState(false)
    const [character, setcharacter] = useState(false)
    const [password, setpassword] = useState()
    const [copy,setCopy]=useState(false)
    const usepasswordref=useRef(null)

    const passwordgenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (number) {
            str = str + "0123456789"
        }
        if (character) {
            str = str + "!@#$%^&*__+=[]{}`"
        }
        for (let i = 1; i <=length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setpassword(pass)
    }, [length, number, character, setpassword])

    const copytoclipboard=useCallback(()=>{
        usepasswordref.current?.select()
        window.navigator.clipboard.writeText(password)
        setCopy(true)
    },[password])
   

    useEffect(()=>{
        passwordgenerator()
    },[length,number,character,passwordgenerator])
    return (
        // <h1 className='text-center'>Password Generator</h1>
        <div className='containor'>
            <div className='row text-center'>
                <div className="input-group mb-3 w-25 mt-2 text-center">
                    <input type="text" className="form-control" value={password} readOnly ref={usepasswordref} placeholder="Password" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={copytoclipboard}>{copy?"Copied":"Copy"}</button>
                </div>

            </div>
            <div className="input-group mb-3 w-50 mt-2 text-center">
                <label for="customRange1" className="float-start">length:{length}</label>
                <input type="range" min={6} max={100} onChange={(e)=>setlength(e.target.value)} value={length} className="form-range  w-25 mx-4" id="customRange1" />
            </div>
            <div className="input-group mb-3 w-50 mt-2 text-center">
                <label for="customRange1" className="float-start">Number</label>
                <input class="form-check-input mt-0" type="checkbox" value={number}  onChange={()=>setnumber((prev)=>!prev)}aria-label="Checkbox for following text input"/>
            </div>
            <div className="input-group mb-3 w-50 mt-2 text-center">
                <label for="customRange1" className="float-start">Character</label>
                <input class="form-check-input mt-0" type="checkbox" value={character}  onChange={()=>setcharacter((prev)=>!prev)}aria-label="Checkbox for following text input"/>
            </div>
        </div>
    )
}

export default Passwordgenerator