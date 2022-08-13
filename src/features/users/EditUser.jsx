import React , {useState} from 'react'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { useNavigate , useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { editUser } from './userSlice'



const EditUser = () => {
   const params = useParams()
   const dispatch = useDispatch()
   const users = useSelector(store => store.users)
    const navigate = useNavigate()
    const existingUser = users.filter(user => user.id === params.id)
    const {email , name } = existingUser[0]
     const [values, setValues] = useState({ name , email})

     const handleEditUser = () => {
        setValues({name : "" , email : ""})
        dispatch(editUser({
        id : params.id,
        name : values.name,
        email : values.email,
        }))
        navigate("/")
     }

  return (
    <div className='mt-10 max-w-xl mx-auto'>
        <TextField 
        label="Name"
        values = {values.name}
        inputProps ={{type:"text" , placeholder:"Yunus tas"}}
        onChange={(e) => setValues ({...values , name:e.target.value})}
        />
        <br />
         <TextField 
        label="Email"
        values = {values.email}
        inputProps ={{type:"text" , placeholder:"email@gmail.com"}}
        onChange={(e) => setValues({...values , email:e.target.value})}
        />
        <Button onClick={handleEditUser}>Submit</Button>
    </div>
  )
}

export default EditUser