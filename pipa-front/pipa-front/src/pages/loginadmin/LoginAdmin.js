import React from "react";
import "./LoginAdmin.css";
import "../../assets/raphael-nogueira-CErddu-JwKw-unsplash 2.jpg";

const LoginAdmin = () => {
  return (
    <div className="frame1">
      <div className="frame2">
        <form action="" method="get" className="form">
          <label for="email">Email </label>          
          <input type="email" name="email" id="email" placeholder="Insira seu e-mail aqui " required />          
          <label for="password">Senha </label>          
          <input type="password" name="password" id="password" placeholder="Insira sua senha aqui " required />          
          <div className="span"><span>Esqueceu sua Senha?</span></div>          
          <button type="submit" >Entrar</button>        
        </form>
      </div>
      <div className="element" ></div>
      <div className="frame3" >
        <div className="frame4" >
          <p>Ainda não possui cadastro? </p>
          <span>Clique aqui </span>
        </div>
        <div className="element1" ></div>
        <div className="frame5" >
          <p>Área do administrador </p>
          <span>Clique aqui </span>
        </div>

      </div>
    </div>
  );
};

export default LoginAdmin;
