import React from 'react';
import ContactItem from './ContactItem';

 function Contacts() {

  return (
    <div className='container'>
         <div className='row my-5'>
         <div className='col-md-6 mx-auto'>
             <div className='card bg'>
                <table>
                    <thead>
                        <tr>
                            <th>Nom & pré </th>
                            <th>telephone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                            ContactArray.map((Contact,index)=>(<ContactItem key={index} Contact={Contact}/>))
                         } 
                    </tbody>
                </table>
                
             </div>

         </div>

         </div>

    </div>

  )
}
 const ContactArray =[
    {
        name:"yuba",
         tel:6658568,
    },
    {
        name:"SAGHRO",
         tel:62359865,
    },
    { 
        name:"hmza",
         tel: 2348786447,
    }
   
 ]
export default Contacts ;