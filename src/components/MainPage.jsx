import React from 'react';
import image from '../assets/image.png';

const MainPage = () => (
  <div>
    <div className="board">
        <div className="todo">
          <div className="additions_and_settings_div todo-header">
            <h3 className='card_stage'>To do</h3>
            <div className='additions_and_settings'>
              <span className="add-item">+</span>
              <span className="more-settings">...</span>
            </div>
          </div>
          <div className='todo_subboard'>
            <div className="card-div">
              <div className="card">
                <div className="title-owner">
                  <p>Check the Watchlist</p>
                  <p>#Opened by Marvin</p>
                </div>
                <div className="card-setting">
                  <p className="card-more-settings">...</p>
                  <img className="user-image" src={image} alt="user" />
                </div>
              </div> 
            </div>
          </div>
        </div>
        <div className="in-progress">
          <div className="additions_and_settings_div in-progress-header">
            <h3 className='card_stage'>In Progress</h3>
            <div className='additions_and_settings'>
              <span className="add-item">+</span>
              <span className="more-settings">...</span>
            </div>
          </div>
          <div className='in-progress_subboard'>
            Board goes here
          </div>
        </div>
        <div className="done">
          <div className="additions_and_settings_div done-header">
            <h3 className='card_stage'>Done</h3>
            <div className='additions_and_settings'>
              <span className="add-item">+</span>
              <span className="more-settings">...</span>
            </div>
          </div>
          <div className='done_subboard'>
            Board goes here
          </div>
        </div>
    </div>
  </div>
);

export default MainPage;
