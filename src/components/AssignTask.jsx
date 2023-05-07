import React from 'react'

const AssignTask = () => {
  return (
    <div className='add-item-background'>
      <div className='assignTaskDiv'>
        <form action="">
          <input type="text" placeholder='Add Task'className='inputs'/><br />
          <input type="text" placeholder='Assign to 'className='inputs'/><br />
          <input type="date" className='inputs'/><br />
          <input type="text" placeholder='Add an optional note' className='inputs'/><br />
          <button className='add-new-task'>Add task</button>
        </form>
    </div>
    </div>
    
  )
}

export default AssignTask
