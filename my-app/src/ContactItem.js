import React from 'react'

 function ContactItem({ Contact :{name,phone},DeletContact}) {
  return (
    <tr>
        <td>{name}</td>
        <td>{phone}</td>
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