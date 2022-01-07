import  {createGlobalStyle} from "styled-components";

export default  createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 18px;
  }
  
  .container {
    position: absolute;
    width: 90%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  
  
  @media only screen and (max-width: 768px) {
    html {
      font-size: 10px;
    }
  }
 
  #ropa{
    width:100%;
    height:100vh;
    background: linear-gradient(rgba(0,0,0,0.445),
    rgb(0,0,0,0.411)),
    url("https://www.playeraspersonalizadas.xyz/wp-content/uploads/2018/12/playeras-para-pareja-de-navidad.jpg")no-repeat center / cover ;
    color:white;
  }
`