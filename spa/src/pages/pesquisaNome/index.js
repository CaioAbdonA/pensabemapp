import React, {Component} from 'react';
import api from '../../services/services';
import { Link } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';

export default class pesquisaNome extends Component {
  //nao armazeno a variavel de forma local

    //uso uma variavel estado para isso

    //cria um objeto e facilita a forma de manipular ele e atualizar

    state = {
      funcionarios: []
  };


  //mostrar info automaticamente qdo iniciar a app, usa esse metodo

  componentDidMount(){

      this.loadFuncionarios();   

  }

  loadFuncionarios = async() =>{

      //const response = await api.get('/funcionarios');



      const {nome} = this.props.match.params;
    const response = await api.get(`/funcionariosN/${nome}`);

      this.setState ({ funcionarios: response.data});

  };





  render() {

      const { funcionarios} = this.state;

      return (

          <div className="funcionario-list">
            
            <Table class="table">
              <thead class="thead-dark">
                 <tr>
                   <th scope="col">NOME</th>
                   <th scope="col">CARGO</th>
                   <th scope="col">RENDIMENTOS</th>
                   <th scope="col">RGF</th>
                   <th scope="col">. . .</th>
                 </tr>
                 </thead>
              {this.state.funcionarios.map(funcionario => (
               
               <tbody>
                 <tr>
                   <td>{funcionario.nome}</td>
                   <td>{funcionario.cargo}</td>
                   <td>R$ {funcionario.rendimentos}</td>
                   <td>{funcionario.rgf}</td>
                   <td><Link to={`/funcionarios/${funcionario.nome}`}>Mais Informações </Link></td>
                 </tr>
               </tbody>
             
              ))}
             
                </Table>


          </div>

      )

  }

}

