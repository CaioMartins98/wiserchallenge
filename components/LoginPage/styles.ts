import styled from 'styled-components';



export const Container1 = styled.div`
  width: 55vw;
  //width: 55vw;
  height: 100vh;
  position: absolute;

  background-image: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 85%) , url('/backgroundimage.png') ;
  background-repeat: no-repeat;
  background-size:cover;  


  @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait){
    align-items: center;
    justify-content: initial;
    align-self: center;

    display: flex;
    justify-content: end;
    width: 130vw;
    height: 150vh;
    right: 290px
  }

  @media only screen and (min-width: 375px) and (max-width: 767px){
   /*  & > body {
      background: none;
      height: 100%;
      background-image: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 85%), url('/backgroundimage.png');
      background-size: contain;
    }
 /*/   

  } 
  

  
`;

export const Container2 = styled.div`

  width: 45vw;
  height: 100vh;
  position: absolute;
  background: #E5E5E5;
  left: 55vw;

  @media only screen and (min-width: 375px) and (max-width: 812px){
   
    width: 0vw;
    height: 0vh;
   z-index: -1;
   
 }
  
  @media only screen and (min-width: 768px) and (max-width: 1023px){
    display: flex;
    justify-content: end;
    
    width: 100vw;
    height: 163vh;
    left: 477px;
  }

 
`;

export const LoginArea=styled.div`


 
  position: relative;
  width: 356px;
  height: 595px;
  left: 173px;

  border-radius: 8px;
  align-items: center;
  justify-content: center;
  
  
  margin-top:80px;

  background: #E5E5E5;

  & > h1{

    
    font-family: 'Montserrat';
    font-weight: 400;
    font-style: normal;

    font-size: 58px;
    line-height: 68px;

    color: #383E71;
  }

  & > p{
    font-family: 'Montserrat';
    font-weight: 600;
    font-style: normal;
   
    font-size: 24px;
    line-height: 28px;

    color: #989FDB;

    margin-top: 28px;
    margin-bottom: 48px;

  }
  @media only screen 
and (max-width : 320px) {

}

@media
only screen and (-webkit-min-device-pixel-ratio : 1.5),
only screen and (min-device-pixel-ratio : 1.5) {
  
}

  @media only screen and (min-width: 768px) and (max-width: 1023px){
   justify-content: center;
   align-items: center;
   text-align: initial;

   top: 312px;
    

    & > h1{
      
    font-size: 62px;
    line-height: 58px;
    
   
    }
  }

  @media only screen and( device-width: 375px) and (min-width:667px){
    position: relative;
    
  }
  
`;

export const StyledLabelEmail = styled.div`
 
    font-family: 'Montserrat';
    font-weight: 400;
    font-style: normal;

    font-size: 16px;
    line-height: 48px;

    color: #383E71;

     margin-top: 16px;
    margin-left: 11px;

 
  
`;

export const InputAreaEmail = styled.div`
   
   position:absolute;

   width: 356px;
   height: 58px;
  
   

   display:flex;
   align-items: center;
   border: 1px solid #989FDB;
   box-sizing: border-box;
   border-radius: 8px;

   & > input{
   font-family: 'Montserrat';
   font-weight: 400;
   font-style: normal;
   font-size: 20px;
   line-height: 48px;
   color: #989FDB;
    text-align:center;
    border: none;
    background: transparent;
   display:flex;
   align-items: center;
   justify-content: center;
   outline: none;
   } 
`;


export const StyledLabelPass = styled.div`
 font-family: 'Montserrat';
    font-weight: 400;
    font-style: normal;

    font-size: 16px;
    line-height: 58px;

    color: #383E71;

    margin-top: 58px;
    margin-left: 11px;
`;

export const InputAreaPass = styled.div`
   
   position:absolute;

   width: 356px;
   height: 58px;
  
   border: 1px solid #989FDB;
   box-sizing: border-box;
   border-radius: 8px;

   & > input{
   font-family: 'Montserrat';
   font-weight: 400;
   font-style: normal;
   font-size: 20px;
   line-height: 68px;
   color: #989FDB;
   background: transparent;
   border:none;
   outline: none;
    text-align: center;
   display:flex;
   align-items: center;
   justify-content: center;
   } 
`;

export const ButtonArea= styled.div`
    margin-top: 92px;

    & > button{
      margin-top: 16px;
      width:356px;
      height: 58px;
      left: 11px;
      background: linear-gradient(to right, #383E71 0%, #9D25B0 99%);
      box-shadow: 0px 10px 25px #CF99DB;
      border-radius: 8px;
      border: none;
      
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 28px;
      color: #FFFFFF;
  
      outline: 0;
     
      
      cursor: pointer;
     
    }

    & > button:hover{
      transition: 0.4s;
      background: linear-gradient(to right, #292D53 0%,#741B82 99%);
     
    }

  
`;

export const RememberArea = styled.div`

margin-top: 48px;
  width: 356px;
  

  display: flex;
  align-items: center;
  justify-content: center;

  & > p{
    font-family: 'Montserrat';
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 30px;


text-align: center;

color: #989FDB;
  }
`;