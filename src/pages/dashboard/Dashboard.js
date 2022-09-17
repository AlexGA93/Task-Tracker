import React from 'react'
import { useSelector } from 'react-redux';

function Dashboard() {

  const reduxState = useSelector( (state) => state );
  console.log(reduxState);
  

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard