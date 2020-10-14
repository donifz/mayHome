import React from "react";
import "./login-page.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Card, Form, Input, Label, FormGroup, Button} from 'reactstrap'



function Login() {
  return (
    <div className="login-wrap position-fixed w-100 h-100 d-flex justif justify-content-center align-items-center">
        <Card className="login-body">
          <div className="title-block">
            <FontAwesomeIcon className="login-key" color="#cccccc" icon="key" size="lg"/>
            <h2 className="login-title">Авторизация</h2>
            </div>
          
          <Form>
            
            <FormGroup className="login-input">
              <Label><FontAwesomeIcon color="#cccccc" icon="user" size="lg"/></Label>
              <Input type="text" placeholder="Логин"/>
            </FormGroup>

            <FormGroup className="login-input">
              <Label><FontAwesomeIcon color="#cccccc" icon="lock" size="lg"/></Label>
              <Input  type="password" placeholder="Пароль"/>
            </FormGroup>

            <Button color="primary" className="login-btn primary" type="submit" >Войти</Button>
          </Form>
          <p><a className="reg-link">Регистрация</a> или <a className="reg-link">Забыли пароль</a></p>
          
        </Card>
    </div>
  );
}

export default Login;