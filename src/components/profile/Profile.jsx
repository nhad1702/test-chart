import React from 'react'
import './Profile.css'
import user from './mockData';
import { ResponsiveContainer, RadarChart, Radar } from 'recharts';

const Profile = () => {

  const avatar = "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais";


  // const data = {
  //   labels: [],
  //   datasets
  // };

  return (
    <div className='contain'>
      <div className='profile-container'>
        <div className="profile">
          <div className='avatar'>
            <img src={avatar} height="250" width="250" alt="" />
          </div>
          <div className='details'>
            <div className="left">
              <div className="name">
                <p>Name: {user.fullName}</p>
              </div>
              <div className="gender">
                {user.isMale === true ? <p>Gender: Male</p> : <p>Gender: Female</p>}
              </div>
              <div className="staff">
                <p>Role/Dept: {user.role}</p>
              </div>
              <div className='process'>
                <p>Rank: {user.rank}</p>
                <div className="progress-bar">
                  <progress value="50" max="100"></progress>
                  <p>50/100</p>
                </div>
              </div>
            </div>
          </div>
          <div className='stats'>
            <ul>
              <p>Stats</p>
              <li>Communication skill: {user.stats["communication_skill"]}</li>
              <li>Idea contribution: {user.stats["idea_contribution"]}</li>
              <li>Organizational skill: {user.stats["Organizational_skill"]}</li>
              <li>Product Optimization: {user.stats["product_optimization"]}</li>
              <li>Technology skill: {user.stats["techical_skill"]}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="chart">
        {/* <Radar data={data} /> */}
        {/* <Line data={data} /> */}
      </div>
    </div>
  )
}

export default Profile
