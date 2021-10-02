import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Display_contacts.css'
import {deleteContact} from '../Redux/Index'

function Display_contacts() {
    const state = useSelector(state=>state.data)
    console.log(state)
    const dispatch = useDispatch()

    const [details,setDetails] = useState([])

    useEffect(()=>{
        setDetails(state)
    },[state])

    console.log(details)
    return (
        <div className="main_container">
            <div className="container">
            <div className="add_contact">
                <Link className="button" to="/addcontacts">Add Contact</Link>
            </div>
            
            <div className="res_tab">
                <table class="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Operations</th>
                    </thead>
                    <tbody>
                        {
                            details.map(data=>{
                                return(
                                    <tr>
                                        <td data-label="ID">{data.id}</td>
                                        <td data-label="Name">{data.name}</td>
                                        <td data-label="Email">{data.email}</td>
                                        <td data-label="Phone">{data.phone}</td>
                                        <td data-label="Operations">
                                            <Link 
                                                style={{textDecoration:"none",marginRight:"10px",backgroundColor:"#17a2b8",border:"none",padding:"5px 20px 5px 20px",color:"white",borderRadius:'5px',cursor:'pointer'}}
                                                to={`/updatecontacts/${data.id}`}
                                                contact={data}
                                            >
                                                Edit
                                            </Link>

                                            <button 
                                                style={{marginRight:"10px",backgroundColor:"#dc3545",border:"none",padding:"5px 20px 5px 20px",color:"white",borderRadius:'5px',cursor:'pointer'}}
                                                onClick={()=>dispatch(deleteContact(data.id))}
                                            >
                                                Delete
                                        </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>    
            </div>
            </div>
            
        </div>
    )
}

export default Display_contacts
