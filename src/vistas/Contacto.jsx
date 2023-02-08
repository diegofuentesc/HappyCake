import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contacto = () => {
  return (
    
    <Form className='text-center'>
      <div>
        <h2>Cuentanos, ¿En que te podemos ayudar?</h2>
      </div>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Correo</Form.Label>
      <Form.Control type="email" placeholder="correo@ejemplo.cl" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextArea1">
      <Form.Label>Descripcion</Form.Label>
      <Form.Control as="textarea" rows={3}/>
    </Form.Group>
    <Button variant="danger" type="submit">
      Enviar
    </Button>
  </Form>
   
  )
}

export default Contacto