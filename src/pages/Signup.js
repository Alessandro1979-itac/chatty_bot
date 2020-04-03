import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup, signInWithGoogle, signInWithGitHub } from '../helpers/auth';

import '../../src/styles.css';

export default class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: '' });
    try {
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      console.log(error)
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="container">
        <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
          <h1>
            Inscreva-se para
            <Link className="title ml-2" to="/">Chatty</Link>
          </h1>
            <p className="lead">Preencha o formulário abaixo para criar uma conta.</p>
          <div className="form-group">
            <input className="form-control" placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
          </div>
          <div className="form-group">
            {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
            <button className="btn btn-primary px-5" type="submit">Sign up</button>
          </div>
            <p>Você também pode se inscrever em qualquer um desses serviços</p>
          <button className="btn btn-danger mr-2" type="button" onClick={this.googleSignIn}>
            Inscreva-se no Google
          </button>
          <button className="btn btn-secondary" type="button" onClick={this.githubSignIn}>
            Increva-se no GitHub
          </button>
          <hr></hr>
          <p>Já tem uma conta? <Link to="/login">Login</Link></p>
        </form>
      </div>
    )
  }
}
