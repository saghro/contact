import React,{Component} from "react";

class  AddContact extends React.Component {
    constructor(props){
      super(props);
      this.state={
        name:"",
        phone:"",
      };
    }
     submitForm =(event)=>{
      event.preventDefault();
      const contact ={
        name:this.state.name,
        phone:this.state.phone
      };
      this.props.AddContact(contact)
     };
render(){
  return (
    <div className="row my-4">
       <div className='col-md-6 mx-auto card bg-white'>
         <form onSubmit={(event)=>this.submitForm(event)}  method="post" className='p-2'>
            <div className='form-group'>
               <input type="text" name='name'
               className='form-control'
               value={this.state.name}
               onChange={(event)=>
                this.setState({name:event.target.value}) 
              }
               autoComplete='off'
          
                placeholder='Nom & Prénom'/>
            </div>
            <div className='form-group'>
               <input type="text" name='phone'
                className='form-control'
                autoComplete='off'
                value={this.state.phone}
                onChange={(event)=>
                  this.setState({phone:event.target.value}) 
                }
                placeholder='Phone'/>
            </div>
            <div className='form-group'>
               <input type="submit" className='btn btn-primary'
                 value='Valider'              />
            </div>

         </form>

       </div>

    </div>
)
<<<<<<< HEAD
}
=======
>>>>>>> 7954f040dc1ea994a192cea9f01bb51efd6a2563
}
}
export default AddContact;