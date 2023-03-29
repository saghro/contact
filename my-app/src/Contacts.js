import React,{Component} from 'react';
import ContactItem from './ContactItem';
import AddContact from "./AddContact"
 
class  Contacts extends React.Component {
    constructor(props){
    super(props);
    this.state ={
         Contacts :[
            {
                name:"yuba",
                 phone:6658568,
            },
            {
                name:"SAGHRO",
                 phone:62359865,
            },
            { 
                name:"hmza",
                 phone: 2348786447,
            },
           
         ]
    }
}
       AddContact = (contact)=>{
        let updatContacts = this.state.Contacts;
        updatContacts.push(contact);
        this.setState({Contacts:updatContacts})
       }
       DeletContact = (name)=>{
        let oldContacts = this.state.Contacts;
         let updatContacts= oldContacts.filter((contact)=>contact.name !== name);
        this.setState({Contacts:updatContacts})
       }
    render() {
        return (
            <div className='container'>
                <AddContact AddContact={this.AddContact} />
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
                                    this.state.Contacts.map((Contact,index)=>(<ContactItem 
                                      DeletContact={this.DeletContact}
                                      key={index} Contact={Contact}/>))
                                 } 
                            </tbody>
                        </table>
                        
                     </div>
        
                 </div>
        
                 </div>
        
            </div>
        
          )
    }

}

export default Contacts ;