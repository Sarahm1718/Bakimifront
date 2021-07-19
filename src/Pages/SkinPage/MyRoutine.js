import React, {useState} from "react";
import "../../Pages/SkinPage/MyRoutine.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Modal, ModalBody, ModalHeader,
    FormGroup,
    ModalFooter,
  } from "reactstrap";
import Navbar from "../../components/Navbar/Navbar";

  const data = [
    { idr: 1, routinesName: "Rutina1", descriptionRoutines: "uno.lavar rostro dos. secar tres. exfoliar",  typeSkin:"grasa" },
  

  ];

  
  class MyRoutine extends React.Component {
    state = {
      data: data,
      modalActualizar: false,
      modalInsertar: false,
      form: {
        idr: "",
        routinesName: "",
        descriptionRoutines: "",
        typeSkin: "",
      },
    };
  
    mostrarModalActualizar = (dato) => {
      this.setState({
        form: dato,
        modalActualizar: true,
      });
    };
  
    saveRoutine = () => {
      alert("agregado con exito")
      console.log("https://bakimi.herokuapp.com/api/guardar/"+111+"/"+this.state.data.length+1+"/"+this.state.form.descriptionRoutines+"/"+this.state.form.typeSkin)
      fetch("https://bakimi.herokuapp.com/api/guardar/"+ Math.random( )+"/"+this.state.form.routinesName+"/"+this.state.form.descriptionRoutines+"/"+this.state.form.typeSkin, {
        method: 'POST', // or 'PUT'
        
      })
  
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
        if (dato.idr == registro.idr) {
          arreglo[contador].routinesName = dato.routinesName;
          arreglo[contador].descriptionRoutines = dato.descriptionRoutines;
          arreglo[contador].typeSkin = dato.typeSkin;
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    };
  
    eliminar = (dato) => {
      var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.idr);
      if (opcion == true) {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
          if (dato.idr == registro.idr) {
            arreglo.splice(contador, 1);
          }
          contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
      }
    };
  
    insertar= ()=>{
      var valorNuevo= {...this.state.form};
      valorNuevo.idr=this.state.data.length+1;
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
  
    render() {
      
      return (
        <>
        <Navbar/>
          <Container>
          <br />
            <button classname="button-crear"color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</button>
            <br />
            <br />
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre Rutina</th>
                  <th>Descripcion Rutina</th>
                  <th>Tipo de piel</th>

                </tr>
              </thead>
  
              <tbody>
                {this.state.data.map((dato) => (
                  <tr key={dato.idr}>
                    <td>{dato.idr}</td>
                    <td>{dato.routinesName}</td>
                    <td>{dato.descriptionRoutines}</td>
                    <td>{dato.typeSkin}</td>
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
                  value={this.state.form.idr}
                  onChange={this.handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                Nombre Rutina: 
                </label>
                <input
                  className="form-control"
                  name="routinesName"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.personaje}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                Descripcion Rutina: 
                </label>
                <input
                  className="form-control"
                  name="descriptionRoutines"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.anime}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                Tipo de piel: 
                </label>
                <input
                  className="form-control"
                  name="typeSkin"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.anime}
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
             <div><h3>Insertar Rutina</h3></div>
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
                Nombre Rutina: 
                </label>
                <input
                  className="form-control"
                  name="routinesName"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                Descripcion Rutina: 
                </label>
                <input
                  className="form-control"
                  name="descriptionRoutines"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
             
              <FormGroup>
                <label>
                Tipo de piel: 
                </label>
                <input
                  className="form-control"
                  name="typeSkin"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>
  
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => this.saveRoutine()}
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
          
        </>
      );
    }
  }

  export default MyRoutine