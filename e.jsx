import React from 'react';
import image from '../assets/image.png';

const MainPage = () => (
  <div>
    <div className="board">
      <div className="todo">
        <div className="additions_and_settings">
            <h3>To do</h3>
            <span className="add-item">+</span>
            <span className="more-settings">...</span>
          </div>
          <div className='done_subboard'>
            Board goes here
        </div>
        <div className="todo-generate">
          <h3>Todo</h3>
          <div className="todo-list-div">
            <p className="add-item">+</p>
            <p className="more-settings">...</p>
          </div>
        </div>
        <div className="card-grid">
          <div className="card-div">
            <div className="card">
              <div className="title-owner">
                <p>Check the Watchlist</p>
                <p>#Opened by Marvin</p>
              </div>
              <div className="card-setting">
                <p className="more-settings">...</p>
                <img className="user-image" src={image} alt="user" />
              </div>
            </div>
          </div>
          <div className="card-div">
            <div className="card">
              <div className="title-owner">
                <p>Check the Watchlist</p>
                <p>#Opened by Marvin</p>
              </div>
              <div className="card-setting">
                <p className="more-settings">...</p>
                <img className="user-image" src={image} alt="user" />
              </div>
            </div>
          </div>
          <div className="card-div">
            <div className="card">
              <div className="title-owner">
                <p>Check the Watchlist</p>
                <p>#Opened by Marvin</p>
              </div>
              <div className="card-setting">
                <p className="more-settings">...</p>
                <img className="user-image" src={image} alt="user" />
              </div>
            </div>
          </div>
          <div className="card-div">
            <div className="card">
              <div className="title-owner">
                <p>Check the Watchlist</p>
                <p>#Opened by Marvin</p>
              </div>
              <div className="card-setting">
                <p className="more-settings">...</p>
                <img className="user-image" src={image} alt="user" />
              </div>
            </div>
          </div>
          <div className="card-div">
            <div className="card">
              <div className="title-owner">
                <p>Check the Watchlist</p>
                <p>#Opened by Marvin</p>
              </div>
              <div className="card-setting">
                <p className="more-settings">...</p>
                <img className="user-image" src={image} alt="user" />
              </div>
            </div> 
          </div>
          <div className="card-div">
            <div className="card">
              <div className="title-owner">
                <p>Check the Watchlist</p>
                <p>#Opened by Marvin</p>
              </div>
              <div className="card-setting">
                <p className="more-settings">...</p>
                <img className="user-image" src={image} alt="user" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="in-progress">
      <div className="additions_and_settings">
            <h3>In Progress</h3>
            <span className="add-item">+</span>
            <span className="more-settings">...</span>
          </div>
          <div className='done_subboard'>
            Board goes here
          </div>
      </div>
      <div className="done">
          <div className="additions_and_settings">
            <h3>Done</h3>
            <span className="add-item">+</span>
            <span className="more-settings">...</span>
          </div>
          <div className='done_subboard'>
            Board goes here
          </div>
      </div>
    </div>
  </div>
  {/* //   </div> */}
  {/* // </div> */}
);

export default MainPage;
