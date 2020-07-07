
import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userAction';

function SigininScreen(props) {


     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const userSignin = useSelector(state=> state.userSignin);
     const { loading, userInfo, error} = userSignin;
     const dispatch = useDispatch();

     useEffect(() => {
          if(userInfo) {
               props.history.push("/");
          }
          
          return () => {
               //
          }
     }, [userInfo])
//sigin
     const submitHandler = (e) => {
          e.preventDefault();
// compre signin handler run(actionF)
          dispatch(signin(email,password));
     }
     return <div className="form">
          <form onSubmit={submitHandler} >
               <ul className="form-container">
                    <li>
                         <h2>Sign-In</h2>
                    </li>
                    <li>
                         {loading && <div>Loading...</div>}
                         {error && <div>{error}</div>}
                    </li>
                    <li>
                         <label htmlFor="email" >
                              Email:
                         </label>
                         <input className="unter" type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>

                         </input>
                    </li>
                    <li>
                         <label htmlFor="password">
                              Password:
                              </label>
                         <input className="unter" type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
                    </li>
                    <li>
                    <button type="submit" className="button">Signin</button>
                    </li>
                    <li>
                         New to LapStore?
                    </li>
                    <li>
                         <Link to="/register" className="button text-center secan">Create Your_ <span className="lood">Lap</span> <span className="lod">Store</span>_ Account</Link>
                    </li>
               </ul>
          </form>
     </div>
}
export default SigininScreen;