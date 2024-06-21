'use client'
import React, { useState } from 'react'
import Form from '../form'
export default function page() {
    const [formVisible, setVisibility] = useState(false)
    const toggleVisibility = () => {
        setVisibility(!formVisible);
    };
    return (
        <div className='content'>
            {!formVisible && <button onClick={toggleVisibility}>Add task</button>}
            {formVisible && <Form visibility={toggleVisibility}></Form>}
        </div>
    )
}
