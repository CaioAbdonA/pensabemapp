import React,{Component, PureComponent}  from 'react';
import './details.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import api from '../../services/services';

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class oneFuncionario extends Component{
 
  state= {
        mediaCargo: {
          _id: "",
          avgRen: 0
        },
        funcionario: {
            rgf: 0,
            nome: "",
            cargo: "",
            rendimentos: 0

        }

    }



    async componentDidMount(){
        const {nome} = this.props.match.params;
        const response = await api.get(`/funcionarios/${nome}`);
        console.log(response.data);
        this.setState({funcionario: response.data});

        const responseMedia = await api.get(`/funcionariosMedia/${this.state.funcionario.cargo}`)
        console.log(responseMedia.data);
        this.setState({mediaCargo: responseMedia.data[0]});
       
    }

    render(){

        const { funcionario, mediaCargo} = this.state;
       
       
        const data = [
          {
            nome: this.state.funcionario.nome,
            Salario: this.state.funcionario.rendimentos
          },
          {
            nome: this.state.mediaCargo._id,
            Salario: this.state.mediaCargo.avgRen
          }
        ];

        return(
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
              {
               
               <tbody>
                 <tr>
                   <td>{funcionario.nome}</td>
                   <td>{funcionario.cargo}</td>
                   <td>R$ {funcionario.rendimentos}</td>
                   <td>{funcionario.rgf}</td>
                 </tr>
               </tbody>
             
              }
             
                </Table>
              Salário de {this.state.funcionario.nome} comparado a média de salário do cargo de {this.state.mediaCargo._id}
                <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 10, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="nome" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Salario" fill="#8884d8" />
      </BarChart>

          </div>

        )
    }



}