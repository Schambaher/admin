import React, { Component } from 'react';

import NavLateral from '../components/navLateral';

import '../components/css/commentPage.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter, Input} from "reactstrap";

const data =[
    {
        id:1,
        comentario:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum'
        },
    {
        id:2, 
        comentario:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
        id:3, 
        comentario:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    }, 
    {
        id:4, 
        comentario:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    }, 
    {
        id:5, 
        comentario:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    }
];

class commentPage extends Component{

    //---------- estado ----------//
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
          id: "",
          comentario: "",
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
            arreglo[contador].comentario = dato.comentario;
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

    render(){
        return(
            <React.Fragment>
            <NavLateral/>
            <div className="contenedor">
            <br />
              <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
              <br />
              <br />
              <Table>
                <thead>
                  <tr>
                    <th className="center">ID</th>
                    <th className="center">Comentario</th>
                    <th className="center">Acciones</th>
                  </tr>
                </thead>
    
                <tbody>
                  {this.state.data.map((dato) => (
                    <tr key={dato.id}>
                      <td className="center">{dato.id}</td>
                      <td className="comment center">{dato.comentario}</td>
                      <td className="center">
                        <Button
                          color="primary"
                          onClick={() => this.mostrarModalActualizar(dato)}
                        >
                          Editar
                        </Button>{"  "}
                        <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
    
            <Modal isOpen={this.state.modalActualizar}>
              <ModalHeader>
               <div><h3>Editar Comentario</h3></div>
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
                    Comentario: 
                  </label>
                  <Input
                    className="form-control"
                    name="comentario"
                    type="textarea"
                    onChange={this.handleChange}
                    value={this.state.form.comentario}
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
               <div><h3>Insertar Comentario</h3></div>
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
                    Comentario: 
                  </label>
                  <input
                    className="form-control"
                    name="comentario"
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
}
export default commentPage;
