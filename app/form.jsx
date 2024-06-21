'use client'
import React, { useState } from 'react'
export default function Form({ visibility }) {
    const [formData, setFormData] = useState({
        due: "",
        priority: "",
        description: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        visibility();
    }

  return (
    <div className="form-container">
        <h2>New Ticket</h2>
        <form onSubmit={handleSubmit} action="">
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
                <textarea onChange={(e)=> setFormData({...formData, description:e.target.value})} id="description" name="description" placeholder='Task Description' required/>
            </div>
            <button style={{gridColumn:"1/-1", margin:"0 20% 0 20%"}} type='submit'>Submit</button>
        </form >
    </div>
  )
}
