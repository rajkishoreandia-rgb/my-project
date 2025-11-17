import {useState} from 'react'
import Card from "../components/Card/Card";

function FormComponent() {
const [userProfiles, setuserProfiles] = useState([])
const [name, setname] = useState('')
const [address, setaddress] = useState('')
const [profession, setprofession] = useState('')
const [profileUrl, setprofileUrl] = useState('')
let copyUsers = [];

const formSubmit = (e)=>{
    e.preventDefault();
    copyUsers=[...userProfiles] 
    copyUsers.push({
        name:name,
        address:address,
        profession:profession,
        profileUrl:profileUrl
    })
    setuserProfiles(copyUsers)
    console.log(userProfiles)
}
  return (
    <div>
        <h1>User Registration</h1>
        <form onSubmit={formSubmit}>
        <input type="text" 
               placeholder='Enter Name'
                onChange={function(e){
                          setname(e.target.value)      
                        }}
               value={name}/>
        <input type="text" placeholder='Enter Address'
                onChange={function(e){
                          setaddress(e.target.value)      
                        }}
               value={address}/>
        <input type="text" placeholder='Enter Profession'
            onChange={function(e){
                          setprofession(e.target.value)      
                        }}
               value={profession} />
        <input type="text" placeholder='Enter Image URL'
                onChange={function(e){
                          setprofileUrl(e.target.value)      
                        }}
               value={profileUrl}/>
        <button type='submit'>Submit</button>
        </form>
      <Card details={userProfiles} />
    </div>
  )
}

export default FormComponent