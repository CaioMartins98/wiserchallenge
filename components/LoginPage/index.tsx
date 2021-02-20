import React, {useEffect, useRef, useState} from 'react';


import {
  Container1, 
  Container2, 
  LoginArea, 
  StyledLabelEmail,
  InputAreaEmail,
  StyledLabelPass, 
  InputAreaPass, 
  ButtonArea, 
  RememberArea
} from './styles';

import api from '../../services/api';



function LoginPage() {
  
 
  useEffect(() => {
    api
.get('v3/53ab6671-e1fc-4eeb-a4ff-0e7274add49f')
.then((resposta) => resposta)
.catch(erro => (erro));
  }, [])

const [user, setUser] = useState('');

const [registerEmail, setRegisterEmail] = useState(false);

const inputRef = useRef(null);

	function handleClick() {
    const valueInput = inputRef.current.value;
    setUser(valueInput);

  }


  const validation = () => {
    api
    .get('v3/53ab6671-e1fc-4eeb-a4ff-0e7274add49f')
    .then(res => 
  {if(res.data.email.login === user){
    setRegisterEmail(false);
    
   
  }else{
    setRegisterEmail(true);
    
    
  }});
  }
  useEffect(() => {
    console.log('entrou no useEffect')
    validation();
  }, [user]);

    return (
    
      <div>
        <style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
  </style>
      <Container1/>
      
      <Container2>
        <LoginArea>
       
          <h1>Olá, seja bem-vindo!</h1>
          <p>Para acessar a plataforma, faça seu login.</p>
          <StyledLabelEmail>
          <label htmlFor="email">E-MAIL</label>
          </StyledLabelEmail>
       
          <InputAreaEmail>
          <input ref={inputRef} placeholder='user.name@mail.com' type="email" name="email"/>
          
          </InputAreaEmail>
          <div style={{marginTop: 70}}>
            {registerEmail && <p style={{ color:'#FF0000', fontFamily: 'Montserrat'}}>Email inválido</p>}
          </div>
          
  
          <StyledLabelPass>
            <label htmlFor="password">SENHA</label>
          </StyledLabelPass>
          
          <InputAreaPass>
            <input placeholder='1234' type="password" name="password"/>
          </InputAreaPass>
          <ButtonArea>
            <button onClick={handleClick} type='button'>ENTRAR</button>
          </ButtonArea>
          <RememberArea>
            <p>
              Esqueceu seu login ou senha?
              Clique 
              <a 
              target="_blank"
              rel="noreferrer" 
              href='https://wisereducacao.com/'> aqui</a>
            </p>
          </RememberArea>
          
        </LoginArea>
        
      </Container2>
      
  </div>
    
    )
  }


  





export default LoginPage;