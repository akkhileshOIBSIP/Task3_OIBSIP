import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [screen, setScreen] = useState(false);
    return (
        <div className='App'>
            <h1>ProTask: Empowering Productivity - Your Innovative To-Do Web App</h1>

            <div className='todo-wrapper'>
                <div className='todo-input'>
                    <div className='todo-input-item'>
                        <label>Title</label>
                        <input type='text' placeholder='Work Assignment to be completed!' />
                    </div>
                    <div className='todo-input-item'>
                        <label>Description</label>
                        <input type='text' placeholder='Description of work.' />
                    </div>
                    <div className='todo-input-item'>
                        <button type='button' className='primarybtn'>Add</button>
                    </div>
                </div>

                <div className='btn-area'>
                    <button className={`secondarybtn ${screen === false && 'active'}`} onClick={() => setScreen(false)}>To-Do</button>
                    <button className={`secondarybtn ${screen === true && 'active'}`} onClick={() => setScreen(true)}>Completed</button>
                </div>

                <div className='todo-list'>
                    <div className='todo-list-item'>
                        <h3>Task 1</h3>
                        <p>Description</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default App;
