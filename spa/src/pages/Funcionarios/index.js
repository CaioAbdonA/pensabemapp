import React, {Component} from 'react';
import api from '../../services/services';
import { Link } from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';

export default class Funcionarios extends Component {
  //nao armazeno a variavel de forma local

    //uso uma variavel estado para isso

    //cria um objeto e facilita a forma de manipular ele e atualizar

    state = {

      funcionarios: [],

      funcionariosInfo: {},

      page: 1,

  };



  //mostrar info automaticamente qdo iniciar a app, usa esse metodo

  componentDidMount(){

      this.loadFuncionarios();   

  }

  

  loadFuncionarios = async (page = 1) => {

      //const response = await api.get('/funcionarios');



      const response = await api.get(`/funcionarios?page=${page}`);



      const { docs, ...funcionariosInfo } = response.data;



      //console.log(response.data.docs);

      //this.setState ({ funcionarios: response.data.docs})



      this.setState ({ funcionarios: docs, funcionariosInfo, page});

  };



  prevPage = () => {

      const { page } = this.state;

      if(page === 1) return;



      const pageNumber = page - 1;

      this.loadFuncionarios(pageNumber);

  }



  nextPage = () => {

      const { page, funcionariosInfo } = this.state;

      if(page === funcionariosInfo.pages) return;



      const pageNumber = page + 1;

      this.loadFuncionarios(pageNumber);

  }



  render() {

      const { funcionarios, funcionariosInfo, page } = this.state;

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
              

              <div className="actions"> 

                  <button disabled={page===1} onClick={this.prevPage}>Anterior</button>

                  <button disabled={page===funcionariosInfo.pages} onClick={this.nextPage}>Próxima</button>

              </div>

          </div>

      )

  }

}