import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

//import '../../src/styles.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <section>
          <div className="jumbotron jumbotron-fluid py-5">
            <div className="container text-center py-5">
              <h1 className="display-4">Bem-vindo ao Chatty</h1>
              <p className="lead">Um ótimo lugar para compartilhar seus pensamentos com os amigos</p>
              <div className="mt-4">
                <Link className="btn btn-primary px-5 mr-3" to="/signup">Criar nova conta</Link>
                <Link className="btn px-5" to="/login">Faça login na sua conta</Link>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    )
  }
}