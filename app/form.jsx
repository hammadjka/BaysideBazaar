'use client'
import React, { useState } from 'react'
export default function Form({ toggleVisibility, addCard}) {
    const [formData, setFormData] = useState({
        title:"",
        due: "",
        priority: "",
        description: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        toggleVisibility()
        addCard(formData)
    }

  return (
    <div className="form-container">
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <h2>New Ticket</h2>
            <button onClick={toggleVisibility} style={{color:"red", backgroundColor:"none", border:"none", cursor:"pointer"}}>X</button>
        </div>

        <form onSubmit={handleSubmit} action="">
        <div className='formSection'>
                <label htmlFor="title">Task title</label>
                <input onChange={(e)=> setFormData({...formData, title:e.target.value})} placeholder='Center div' type="text" id="title" name="title" required/>
        </div>
        <div className='formSection'>
                <label htmlFor="due">Due Date</label>
                <input onChange={(e)=> setFormData({...formData, due:e.target.value})} type="date" id="due" name="due" required/>
        </div>
        <div className='formSection'>
                <div>
                    <p style={{margin:"0"}}>Priority</p>
                    <div>
                        <label htmlFor="high">
                            High
                            <input onChange={(e)=> setFormData({...formData, priority:e.target.id})} type="radio" id="high" name="priority" required/>
                        </label>
                        <label htmlFor="med">
                            Med
                            <input onChange={(e)=> setFormData({...formData, priority:e.target.id})} type="radio" id="med" name="priority"/>
                        </label>
                        <label htmlFor="low">
                            Low
                            <input onChange={(e)=> setFormData({...formData, priority:e.target.id})} type="radio" id="low" name="priority"/>
                        </label>
                    </div>
                </div>
            </div>
            <div className='formSection desc'>
                <label htmlFor="description">Description</label>
                <textarea onChange={(e)=> setFormData({...formData, description:e.target.value})} id="description" name="description" placeholder='Center header div on main page' required/>
            </div>
            <button style={{gridColumn:"1/-1", margin:"0 40% 0 40%"}} type='submit'>Submit</button>
        </form >
    </div>
  )
}
