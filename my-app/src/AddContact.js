import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

 function AddContact() {
  return (
    <Form className='container'>
      <Form.Group className="mb-3" controlId="formBasicNom">
        <Form.Label>Nom & pré</Form.Label>
        <Form.Control type="text" placeholder="Enter nom et prenom " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>tele</Form.Label>
        <Form.Control type="text" placeholder="telephone" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ajouter
      </Button>
    </Form>
  )
}
export default AddContact;
