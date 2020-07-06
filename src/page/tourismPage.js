import React from 'react';

import NavLateral from '../components/navLateral';

import '../components/css/tourismPage.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter, Input} from "reactstrap";

let fech = new Date();

const data = [
    { 
        id: 1, 
        imagenUrl:"https://lh5.googleusercontent.com/p/AF1QipPMja6F7Jim2PU-qVEJcud_tT5Ldk7IY5_XLYUp=w408-h258-k-no",
        nombre: "Pachacamac",
        departamento: "Lima",
        direccion:"Av. Simón Bolivar 1515, Pueblo Libre 15084",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
    },
    { 
        id: 2,
        imagenUrl:"https://viajandoalima.com/wp-content/uploads/2019/11/Museo-Larco-Lima.jpg",
        nombre: "Plaza de Armas", 
        departamento: "Lima",
        direccion:"Av. Simón Bolivar 1515, Pueblo Libre 15084",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
    },
    { 
        id: 3,
        imagenUrl:"https://lh5.googleusercontent.com/p/AF1QipPMja6F7Jim2PU-qVEJcud_tT5Ldk7IY5_XLYUp=w408-h258-k-no",
        nombre: "Museo Larco",
        departamento: "Lima", 
        direccion:"Av. Simón Bolivar 1515, Pueblo Libre 15084",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
    },
    { 
        id: 4,
        imagenUrl:"https://lh5.googleusercontent.com/p/AF1QipPMja6F7Jim2PU-qVEJcud_tT5Ldk7IY5_XLYUp=w408-h258-k-no",
        nombre: "Huaca Pucllana", 
        departamento: "Lima", 
        direccion:"Av. Simón Bolivar 1515, Pueblo Libre 15084",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" 
    },
    { 
        id: 5,
        imagenUrl:"https://lh5.googleusercontent.com/p/AF1QipPMja6F7Jim2PU-qVEJcud_tT5Ldk7IY5_XLYUp=w408-h258-k-no",
        nombre: "Palacio Gobierno", 
        departamento: "Lima", 
        direccion:"Av. Simón Bolivar 1515, Pueblo Libre 15084",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce ut placerat orci nulla pellentesque. Est pellentesque elit ullamcorper dignissim cras tincidunt. Praesent tristique magna sit amet purus gravida quis. Risus quis varius quam quisque id diam vel quam elementum. Pellentesque massa placerat duis ultricies lacus. Lacus sed turpis tincidunt id. Egestas purus viverra accumsan in nisl."
    }
];

class tourismPage extends React.Component{

    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
          id: "",
          imagenUrl: "",
          nombre: "",
          departamento:"",
          direccion:"",
          descripcion:""
        },
    };

    mostrarModalActualizar = (dato) => {
        this.setState({
          form: dato,
          modalActualizar: true,
        });
    };
    
    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
        this.setState({
          modalInsertar: true,
        });
    };
    
      cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
          if (dato.id == registro.id) {
            arreglo[contador].imagenUrl = dato.imagenUrl;
            arreglo[contador].nombre = dato.nombre;
            arreglo[contador].departamento=dato.departamento;
            arreglo[contador].direccion=dato.direccion;
            arreglo[contador].descripcion=dato.descripcion;
          }
          contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };

    eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
        if (opcion == true) {
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
    
      insertar= ()=>{
        var valorNuevo= {...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista= this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
      }
    
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
                                <th>ID</th>
                                <th>Imagen URL</th>
                                <th>Nombre</th>
                                <th>Departamento</th>
                                <th>Dirección</th>
                                <th>Descripción</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.id}  className="center">
                                    <td >{dato.id}</td>
                                    <td><img className="imagen" src={dato.imagenUrl} /></td>
                                    <td >{dato.nombre}</td>
                                    <td >{dato.departamento}</td>
                                    <td >{dato.direccion}</td>
                                    <td className="description">{dato.descripcion}</td>
                                    <td className="center">
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
                </div>

                <Modal isOpen={this.state.modalActualizar}>
                <ModalHeader>
                <div><h3>Editar Centro Turístico</h3></div>
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
                        Imagen Url: 
                    </label>
                    <input
                        className="form-control"
                        name="imagenUrl"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.form.imagenUrl}
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
                        <label for="select-departamento">Departamento</label>
                        <select
                            className="form-control"
                            name="departamento"
                            type="select"
                            onChange={this.handleChange}
                            value={this.state.form.departamento}
                            id="select-departamento"
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
                            Dirección:
                        </label>
                        <Input
                            className="form-control"
                            name="direccion"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.form.direccion}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>
                            Descripción:
                        </label>
                        <Input
                            className="form-control"
                            name="descripcion"
                            type="textarea"
                            onChange={this.handleChange}
                            value={this.state.form.descripcion}
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
                <div><h3>Insertar Centro Turístico</h3></div>
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
                        Imagen Url: 
                    </label>
                    <input
                        className="form-control"
                        name="imagenUrl"
                        type="text"
                        onChange={this.handleChange}
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
                        <label for="select-departamento">Departamento</label>
                        <select
                            className="form-control"
                            name="departamento"
                            type="select"
                            onChange={this.handleChange}
                            id="select-departamento"
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
                        Dirección: 
                    </label>
                    <Input
                        className="form-control"
                        name="direccion"
                        type="text"
                        onChange={this.handleChange}
                    />
                    </FormGroup>

                    <FormGroup>
                    <label>
                        Descripción: 
                    </label>
                    <Input
                        className="form-control"
                        name="descripcion"
                        type="textarea"
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
}
export default tourismPage;