import React,{Component}  from 'react';
import './details.css';

import api from '../../services/services';

export default class oneFuncionario extends Component{
    state= {
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
    }

    render(){

        const { funcionario } = this.state;

        return(
            <div className="funcionario-info">
                <h1>{funcionario.rgf}</h1>
                <h1>{funcionario.nome}</h1>
                <h1>{funcionario.cargo}</h1>
                <h1>{funcionario.rendimentos}</h1>

            </div>

        )
    }



}