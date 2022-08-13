import  {useState} from 'react'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice'

const AddUser = () => {
   const dispatch = useDispatch()
    const navigate = useNavigate()
     const [values, setValues] = useState({ name:"" , email:""})

     const handleAddUser = () => {
        setValues({name : "" , email : ""})
       dispatch(addUser({
        id : uuidv4(),
        name : values.name,
        email : values.email,
       }))
        navigate("/")
     }

  return (
    <div className='mt-10 max-w-xl mx-auto'>
        <TextField 
        label="Name"
        value = {values.name}
        inputProps ={{type:"text" , placeholder:"Yunus tas"}}
        onChange={(e) => setValues ({...values , name:e.target.value})}
        />
        <br />
         <TextField 
        label="Email"
        value = {values.email}
        inputProps ={{type:"text" , placeholder:"email@gmail.com"}}
        onChange={(e) => setValues({...values , email:e.target.value})}
        />
        <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser