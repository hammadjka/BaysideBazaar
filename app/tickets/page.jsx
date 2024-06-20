import React from 'react'

export default function page() {
  return (
    <div className='content'>
        <div class="form-container">
            <h2 class="form-heading">New Ticket</h2>
            <form action="">
            <div className='formSection'>
                    <label htmlFor="due">Due Date</label>
                    <input type="date" id="due" name="due"/>
            </div>
            <div className='formSection'>
                    <div>
                        <p style={{margin:"0"}}>Priority</p>
                        <div>
                            <label htmlFor="high">
                                High
                               <input type="radio" id="high" name="priority" checked/>
                            </label>
                            <label htmlFor="med">
                                Med
                                <input type="radio" id="med" name="priority"/>
                            </label>
                            <label htmlFor="low">
                                Low
                                <input type="radio" id="low" name="priority"/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='formSection desc'>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" placeholder='Task Description'/>
                </div>
            </form>
        </div>
    </div>
  )
}
