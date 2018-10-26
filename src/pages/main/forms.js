import React, { Component } from 'react'
import api from '../../services/api'
import M from 'materialize-css'

export default class Forms extends Component{
    state = {
        titulo: '',
        descricao: '',
        preco: ''
         
    }

    

    salvaProduto = async () => {
       const req = await api.post('/produtos', {
            "titulo": this.state.titulo,
            "descricao": this.state.descricao,
            "preco": this.state.preco
        }) 
        
        if (req.status==200) {
            M.toast({html: 'Produto cadastrado com sucesso' ,classes: 'cyan lighten-1 white-text'})
            setTimeout(()=> window.location.reload(), 3000);
        }

    }
    change = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    
    render(){ 
        
        return (
            <div className="container input-field">
                <form>
                <label htmlFor="titulo">Título</label>
                <input type="text" placeholder="Título" name="titulo" value={this.state.titulo} onChange={e=> this.change(e)}/>
                <label htmlFor="desc">Descrição</label>
                <input type="text" placeholder="Descrição" name="descricao" value={this.state.descricao} onChange={e=> this.change(e)}/>
                <label htmlFor="preco">Preço</label>
                <input type="text" placeholder="Preço" name="preco" value={this.state.preco} onChange={e=> this.change(e)}/>
                <a onClick={this.salvaProduto.bind(this)}className="waves-effect cyan lighten-1 btn-small">Salvar</a>
                </form>
            </div>
               
       

            
        )
    }
}