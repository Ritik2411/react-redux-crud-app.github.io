import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'
import { addContact } from '../Redux/Action'
import "./Add_contact.css"

function Add_contact() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const data = useSelector(state=>state.data)
    const dispatch = useDispatch()
    const history = useHistory()
    
    const submitData = (e) => {
        e.preventDefault()
        console.log(name,email,phone)
        console.log(phone.length)
        if(isNaN(phone) && phone.length<10){
            alert("Phone Number must  be Numeric")
        }
        
        else if(phone.length !== 10){
            alert("Phone number must have only 10 numbers")
        }
        
        else{
            dispatch(addContact({
                id:data.length,
                name:name,
                email:email,
                phone:phone
            }))
            toast.success("Data Inserted Successfully")
            history.push("/")
        }
    }
    return (
        <div className="add_container">
            <div className="add_container_1">
                <div className="add_menu"> 
                    <h1>Add Contacts</h1>
                </div>
                
                <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"20px"}}>
                    <form onSubmit={submitData}>
                        <div className="input_padding">
                            <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} className="input" required/>
                        </div>
                        
                        <div className="input_padding">
                            <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} className="input" required/>
                        </div>
                        
                        <div className="input_padding">
                            <input type="text" placeholder="Enter Phone" onChange={(e)=>setPhone(e.target.value)} className="input" required/>
                        </div>

                        <div style={{textAlign:"center",padding:'10px'}}>    
                            <button type="submit"
                            style={{width:"100%",padding:"10px",backgroundColor:"#333",color:"white",fontWeight:'bold',border:"none",cursor:"pointer"}}
                            >
                                Add Contact
                            </button>
                        </div>
                    </form>
                    
                </div>    
            </div>
        </div>
    )
}

export default Add_contact
