import React, { useState } from 'react'
import AppTextLabel from '../../AppTextLabel/AppTextLabel'
import AppTextInput from '../../AppTextInput/AppTextInput'
import AppButton from '../../AppButton/AppButton'
import { hideAddUser } from '../../../state/Users/usersSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../state/store'

const AppAddUser = () => {
   
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
  
    const dispatch = useDispatch<AppDispatch>();
    const onHideAddUser = () => {
        dispatch(hideAddUser())
      }

      const onSubmit = (e: any) => {
        e.preventDefault()
    
        
      }
  return (
    <div>
      <form className='add-form form-control' onSubmit={onSubmit}>
      <div className='d-flex'>
        <AppTextLabel text='First Name: ' />
        <AppTextInput value={firstName} onChange={(newValue: any) => setfirstName(newValue)} />
      </div>
      <div className='d-flex'>
        <AppTextLabel text='Last Name: ' />
        <AppTextInput value={lastName}  onChange={(newValue: any) => setlastName(newValue)}/>
      </div>
      <div className='d-flex'>
        <AppTextLabel text='Email ' />
        <AppTextInput value={email}  onChange={(newValue: any) => setEmail(newValue)}/>
      </div>
        <div className='d-flex'>
            <AppButton type='submit' text='Submit'/>
            <AppButton text='Cancel'type='danger' onClick={onHideAddUser}/>
        </div>
      </form>
    </div>
  )
}

export default AppAddUser
