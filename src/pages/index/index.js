import React, {Component} from 'react';
import api from '../../services/services.js';
import { Link } from 'react-router-dom';
import './index.css';

export default class Funcionarios extends Component{
    state = {
        funcionarios: [],
        funcionariosInfo: [],
        page: 1
    };

    componentDidMount(){
        this.loadFuncionarios();
    }

    loadFuncionarios = async (page = 1) => {
        const response = await api.get(`/funcionarios?page${page}`);
        const {docs, ...funcionariosInfo} = response.data;
        this.setState ({ funcionarios: docs, funcionariosInfo, page});
    }

    render() {
        const { funcionarios, funcionariosInfo, page} = this.state;
        return (
            <div className="funcionario-list">
                {this.state.funcionarios.map(funcionario => (
                    <article key={funcionario._id}>
                        <strong>{funcionario.nome}</strong>
                        <p>{funcionario.rgf}</p>
                        <p><Link to={`/funcionarios/${funcionario._id}`}A> Acessar</Link></p>
                    </article>
                ))}
            </div>
        )
    }
}