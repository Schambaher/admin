import React, { Component } from 'react';

import NavLateral from '../components/navLateral';

import '../components/css/departmentPage.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter} from "reactstrap";

const data =[
    {id:1, nombre:'Lima', poblacion:9999999},
    {id:2, nombre:'Arequipa', poblacion:9999999},
    {id:3, nombre:'Tumbes', poblacion:9999999}, 
    {id:4, nombre:'Cuzco', poblacion:9999999}, 
    {id:5, nombre:'Loreto', poblacion:9999999}
];

class departmentPage extends Component{

    //----- estado -----//
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
          id: "",
          nombre: "",
          poblacion: "",
        },
    };
    //-----------------//

    //----- modal actualizar -----//
    mostrarModalActualizar = (dato) => {
        this.setState({
          form: dato,
          modalActualizar: true,
        });
    };
    
    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };
    //-----------------//

    //----- modal insertar -----//
    mostrarModalInsertar = () => {
        this.setState({
          modalInsertar: true,
        });
    };
    
    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };
    //-----------------//

    //----- editar -----//
    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
          if (dato.id === registro.id) {
            arreglo[contador].nombre = dato.nombre;
            arreglo[contador].poblacion = dato.poblacion;
          }
          contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };
    //-----------------//

    //----- eliminar -----//
    eliminar = (dato) => {
        var opcion = window.confirm("¿Estás Seguro que deseas Eliminar el Departamento? "+dato.id);
        if (opcion === true) {
          var contador = 0;
          var arreglo = this.state.data;
          arreglo.map((registro) => {
            if (dato.id == registro.id) {
              arreglo.splice(contador, 1);
            }
            contador++;
          });
          this.setState({ data: arreglo, modalActualizar: false });
        }
    };
    //-----------------//

    //-----insertar -----/
    insertar= ()=>{
        var valorNuevo= {...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista= this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
    }
    //----------------//

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
                <Container>
                    <br />
                    <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
                    <br />
                    <br />
                    <Table>
                        <thead>
                        <tr className="center">
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Población</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>
            
                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.id} className="center">
                                    <td>{dato.id}</td>
                                    <td>{dato.nombre}</td>
                                    <td>{dato.poblacion}</td>
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
               <div><h3>Editar Departamento</h3></div>
              </ModalHeader>
    
              <ModalBody>
                <FormGroup>
                  <label>
                   ID:
                  </label>
                
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.form.id}
                  />
                </FormGroup>

                <FormGroup>
                  <label for="select-nombre">Nombre</label>
                  <select
                    className="form-control"
                    name="nombre"
                    type="select"
                    onChange={this.handleChange}
                    value={this.state.form.nombre}
                    id="select-nombre"
                  >
                    <option>Amazonas</option>
                    <option>Áncash</option>
                    <option>Apurimac</option>
                    <option>Arequipa</option>
                    <option>Ayacucho</option>
                    <option>Cajamarca</option>
                    <option>Cuzco</option>
                    <option>Huancavelica</option>
                    <option>Huánuco</option>
                    <option>Ica</option>
                    <option>Junin</option>
                    <option>La Libertad</option>
                    <option>Lambayeque</option>
                    <option>Lima</option>
                    <option>Loreto</option>
                    <option>Madre de Dios</option>
                    <option>Moquegua</option>
                    <option>Pasco</option>
                    <option>Piura</option>
                    <option>Puno</option>
                    <option>San Martín</option>
                    <option>Tacna</option>
                    <option>Tumbes</option>
                    <option>Ucayali</option>
                  </select>
                </FormGroup>
                
                <FormGroup>
                  <label>
                    Población: 
                  </label>
                  <input
                    className="form-control"
                    name="apellido"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.poblacion}
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
                    <div><h3>Insertar Departamento</h3></div>
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
                  <label for="select-nombre">Nombre</label>
                  <select
                    className="form-control"
                    name="nombre"
                    type="select"
                    onChange={this.handleChange}
                    id="select-nombre"
                  >
                    <option>Amazonas</option>
                    <option>Áncash</option>
                    <option>Apurimac</option>
                    <option>Arequipa</option>
                    <option>Ayacucho</option>
                    <option>Cajamarca</option>
                    <option>Cuzco</option>
                    <option>Huancavelica</option>
                    <option>Huánuco</option>
                    <option>Ica</option>
                    <option>Junin</option>
                    <option>La Libertad</option>
                    <option>Lambayeque</option>
                    <option>Lima</option>
                    <option>Loreto</option>
                    <option>Madre de Dios</option>
                    <option>Moquegua</option>
                    <option>Pasco</option>
                    <option>Piura</option>
                    <option>Puno</option>
                    <option>San Martín</option>
                    <option>Tacna</option>
                    <option>Tumbes</option>
                    <option>Ucayali</option>
                  </select>
                </FormGroup>
                    
                    <FormGroup>
                    <label>
                        Población: 
                    </label>
                    <input
                        className="form-control"
                        name="poblacion"
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
    };

};
export default departmentPage;