import React from 'react'

 function ContactItem({ Contact :{name,phone},DeletContact}) {
  return (
    <tr>
<<<<<<< HEAD
        <td>{name}</td>
        <td>{phone}</td>
=======
        <td>{props.Contact.name}</td>
        <td>{props.Contact.phone}</td>
>>>>>>> 7954f040dc1ea994a192cea9f01bb51efd6a2563
        <td>
            <span onClick={()=>DeletContact(name)}
               style={{cursor: 'pointer'}}
              className='badge bg-danger'> 
            
              &times; 
            </span>
        
        </td>
    </tr>
  )
}
export default ContactItem ;