import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getData } from '../../redux/reducers/usersSlice';

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    // extract token from local storage
    const localToken = localStorage.getItem('x-token');
    console.log(localToken);
    if(localToken){
      dispatch( getData(localToken) );
    }else {
      navigate('/login');
    }
  });

  const reduxState = useSelector( (state) => state.user );
  // console.log(reduxState);
  

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard