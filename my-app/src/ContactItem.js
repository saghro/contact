import React from 'react'

 function ContactItem(props) {
  return (
    <tr>
        <td>{props.Contact.name}</td>
        <td>{props.Contact.tel}</td>
        <td>
            <span className='badge bg-danger'> 
              &times; 
            </span>
        
        </td>
    </tr>
  )
}
export default ContactItem ;