import { useState } from 'react'
import './Count.css'

export default function Count(){
    const [text ,setText] = useState("")
    const [characterCount , setCharacterCount] = useState("0")
    const [sentenceCount , setSentenceCount] = useState("0")
    const [submit , setSubmit] = useState("")

    const handlecount = (e) => {
        const inputText = e.target.value
        setText(inputText)

        //calculate charactercount

        const character = inputText.replace(/\s+/g, '')
        setCharacterCount(character.length)

        //calculate sentence

        const sentence = inputText.trim().split(/[.!?](\s|$)/).filter(sentence => sentence.trim().length > 0)
        setSentenceCount(sentence.length)
    }

    function Submit(){
            setSubmit("")
            setCharacterCount("")
            setText("")
            setSentenceCount("")
    }

    return(
        <div className="main">
            <h1>Character Counter and Sentence Counter</h1>
            <div className='body1'>
            <textarea onChange={handlecount} value={text} placeholder="Copy and paste text here..."></textarea>
            <div className="result">
            <h2>Res <span style={{color:"purple", fontFamily:"fantasy", marginLeft:"-5px"}}>ults</span></h2>
            <div className="Body">
            <div className='character'>
            <p>Charcters :</p>
            <p  style={{marginTop:"10px", color:"brown"}}>{characterCount}</p>
            </div>
            <div className='sentence'>
            <p style={{marginLeft:"40px", marginTop:"5px", color:"blue"}}>Sentences :</p>
            <p style={{marginTop:"10px", marginLeft:"30px", color:"brown"}}>{sentenceCount}</p>
            </div>
            </div>
            </div>
            </div>
            <button onClick={Submit} style={{fontSize:"30px", marginTop: "20px", borderRadius:"10px", width:"140px", height:"60px", padding:"5px", backgroundColor:"green", color:"white", border:"none", marginBottom:"20px"}}>Delete</button>
        </div>
    )
}