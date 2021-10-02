import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import "./Update_contact.css"
import {updateContact} from '../Redux/Index'

function Update_contacts() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('') 

    const {id} = useParams()
    const data = useSelector(state=>state.data)
    const history = useHistory()
    const dispatch = useDispatch()

    const currentContact = data.find(contact => contact.id === parseInt(id))
    console.log('cc',currentContact)
    
    useEffect(()=>{
        setName(currentContact.name)
        setEmail(currentContact.email)
        setPhone(currentContact.phone)
    },[currentContact])

    const update = (e) => {
        
        if(isNaN(phone) && phone.length<10){
            alert("Phone Number must  be Numeric")
        }
        
        else if(phone.toString().length !== 10){
            alert("Phone number must have only 10 numbers")
        }

        else{
            e.preventDefault()
            const data = {
                id:currentContact.id,
                name:name,
                email:email,
                phone:phone
            }
            dispatch(updateContact(data))
            history.push("/")
        }
    }
    return (
        <div className="update_container">
            <div className="update_container_1">
                <div className="add_menu"> 
                    <h1>Update Contacts</h1>
                </div>
                
                <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"20px"}}>
                    <form onSubmit={update}>
                        <div className="input_padding">
                            <input className="input" type="text" placeholder="Enter Name" defaultValue={name} onChange={e=>setName(e.target.value)} required/>
                        </div>
                        
                        <div className="input_padding">
                            <input className="input" type="email" placeholder="Enter Email" defaultValue={email} onChange={e=>setEmail(e.target.value)} required/>
                        </div>
                        
                        <div className="input_padding">
                            <input className="input" type="text" placeholder="Enter Phone" defaultValue={phone} onChange={e=>setPhone(e.target.value)} required/>
                        </div>

                        <div style={{textAlign:"center",padding:'10px'}}>    
                            <button
                                style={{width:"100%",padding:"10px",backgroundColor:"#333",color:"white",fontWeight:'bold',border:"none",cursor:"pointer"}}
                            >
                                Update Contact
                            </button>
                        </div>
                    </form>
                    
                </div>    
            </div>
        </div>
    )
}

export default Update_contacts
