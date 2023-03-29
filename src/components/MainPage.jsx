import React from 'react'

const MainPage = () => {
  return (
    <div>
      <div className='board'>
        <div className='todo'>
          <div className='todo-generate'>
            <h3>Todo</h3>
            <div className='todo-list-div'>
              <p className='add-item'>+</p>
              <p className='more-settings'>...</p>
            </div>
          </div>
        </div>
        <div className='in-progress'>
          <div className='todo-generate'>
            <h3>In-progress</h3>
            <div className='todo-list-div'>
              <p className='add-item'>+</p>
              <p className='more-settings'>...</p>
            </div>
          </div>
        </div>
        <div className='done'>
          <div className='todo-generate'>
            <h3>Done</h3>
            <div className='todo-list-div'>
              <p className='add-item'>+</p>
              <p className='more-settings'>...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
