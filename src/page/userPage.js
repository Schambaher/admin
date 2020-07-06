import React, {Component} from 'react';

import NavLateral from '../components/navLateral';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter} from "reactstrap";

const data =[
    {id:1, nombre:'Raul', apellido:'Cegarra', correo:'example@example.com', rol:'admin'},
    {id:2, nombre:'Pablo', apellido:'Vizcarra', correo:'example@example.com', rol:'user'},
    {id:3, nombre:'Miguel', apellido:'Bendeta', correo:'example@example.com', rol:'user'}, 
    {id:4, nombre:'Fernando', apellido:'Ortiz', correo:'example@example.com', rol:'user'}, 
    {id:5, nombre:'Luis', apellido:'Martinez', correo:'example@example.com', rol:'user'}
];

class userPage extends Component{
    //---------- estado ----------//
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
          id: "",
          nombre: "",
          apellido: "",
          correo:"",
          rol:""
        },
    };
    //---------- estado ----------//

    //---------- modal actualizar ----------//
    mostrarModalActualizar = (dato) => {
        this.setState({
          form: dato,
          modalActualizar: true,
        });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };
    //---------- modal actualizar ----------//

    //---------- modal insertar ----------//
    mostrarModalInsertar = () => {
        this.setState({
          modalInsertar: true,
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
      };
    //---------- modal insertar ----------//

    //---------- boton editar ----------//
    editar = (dato) => {
        let contador = 0;
        let arreglo = this.state.data;
        arreglo.map((registro) => {
          if (dato.id == registro.id) {
            arreglo[contador].nombre = dato.nombre;
            arreglo[contador].apellido = dato.apellido;
            arreglo[contador].correo = dato.correo;
            arreglo[contador].rol = dato.rol;
          }
          contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };
    //---------- boton editar ----------//

    //---------- boton eliminar ----------//
    eliminar = (dato) => {
        var opcion = window.confirm("¿Estás Seguro que deseas Eliminar este usuario? "+dato.id);
        if (opcion == true) {
          let contador = 0;
          let arreglo = this.state.data;
          arreglo.map((registro) => {
            if (dato.id == registro.id) {
              arreglo.splice(contador, 1);
            }
            contador++;
          });
          this.setState({ data: arreglo, modalActualizar: false });
        }
    };
    //---------- boton eliminar ----------//

    //---------- boton insertar ----------//
    insertar= ()=>{
        let valorNuevo= {...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        let lista= this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
    }
    //---------- boton insertar ----------//

    handleChange = (e) => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
    };

    render() {
    
        return (
          <React.Fragment>
            <NavLateral/>
            <Container>
            <br />
              <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
              <br />
              <br />
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>rol</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
    
                <tbody>
                  {this.state.data.map((dato) => (
                    <tr key={dato.id}>
                      <td>{dato.id}</td>
                      <td>{dato.nombre}</td>
                      <td>{dato.apellido}</td>
                      <td>{dato.correo}</td>
                      <td>{dato.rol}</td>
                      <td>
                        <Button
                          color="primary"
                          onClick={() => this.mostrarModalActualizar(dato)}
                        >
                          Editar
                        </Button>{" "}
                        <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
    
            <Modal isOpen={this.state.modalActualizar}>
              <ModalHeader>
               <div><h3>Editar Registro</h3></div>
              </ModalHeader>
    
              <ModalBody>
                <FormGroup>
                  <label>
                   Id:
                  </label>
                
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.form.id}
                  />
                </FormGroup>
                
                <FormGroup>
                  <label>
                    Nombre: 
                  </label>
                  <input
                    className="form-control"
                    name="nombre"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.nombre}
                  />
                </FormGroup>
                
                <FormGroup>
                  <label>
                    Apellido: 
                  </label>
                  <input
                    className="form-control"
                    name="apellido"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.apellido}
                  />
                </FormGroup>
                <FormGroup>
                  <label>
                    Correo: 
                  </label>
                  <input
                    className="form-control"
                    name="correo"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.correo}
                  />
                </FormGroup>

                <FormGroup>
                  <label>
                    rol: 
                  </label>
                  <input
                    className="form-control"
                    name="rol"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.rol}
                  />
                </FormGroup>
              </ModalBody>
    
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => this.editar(this.state.form)}
                >
                  Editar
                </Button>
                <Button
                  color="danger"
                  onClick={() => this.cerrarModalActualizar()}
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>
    
    
    
            <Modal isOpen={this.state.modalInsertar}>
              <ModalHeader>
               <div><h3>Insertar Usuario</h3></div>
              </ModalHeader>
    
              <ModalBody>
                <FormGroup>
                  <label>
                    Id: 
                  </label>
                  
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.data.length+1}
                  />
                </FormGroup>
                
                <FormGroup>
                  <label>
                    Nombre: 
                  </label>
                  <input
                    className="form-control"
                    name="nombre"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                
                <FormGroup>
                  <label>
                    Apellido: 
                  </label>
                  <input
                    className="form-control"
                    name="apellido"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label>
                    Correo: 
                  </label>
                  <input
                    className="form-control"
                    name="correo"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </ModalBody>
    
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => this.insertar()}
                >
                  Insertar
                </Button>
                <Button
                  className="btn btn-danger"
                  onClick={() => this.cerrarModalInsertar()}
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>
          </React.Fragment>
        );
      }
};

export default userPage;