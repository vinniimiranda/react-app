import React, { Component } from 'react'
import Forms from './forms'
import api from '../../services/api'
import M from 'materialize-css'


export default class Main extends Component{
    state = {
        produtos: [],
        
    }

    componentDidMount(){
        this.carregarProdutos();
    }

    carregarProdutos = async () => {
        const response  = await api.get('/produtos')
        this.setState({
            produtos: response.data.docs
        })
        
    }
    deletaProduto = async (id) => {
        const result = api.delete('/produtos/'+id)
        result.then(resultado => {
            M.toast({html: resultado.data, classes: 'cyan lighten-1 white-text'})
            setTimeout(()=> window.location.reload(), 3000);    
            }
        )
    }
    exibe =  (id) => {
        console.log(id)
        
    }
    render(){ 
        const { produtos } = this.state
        return (
            <div>
            <Forms />
            <div className="container">
            <table className='highlight bordered'>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
            {produtos.map(produto => (
                <tr key={produto._id}>
                    <td>{produto.titulo}</td>
                    <td>{produto.descricao}</td>
                    <td>{produto.preco}</td>
                    <td className="link" onClick={this.deletaProduto.bind(this,produto._id)} ><i className="material-icons">delete</i></td>
                    
                </tr>
            ))}
            </tbody>
            </table>
            </div>
            </div>
        )
    }
}