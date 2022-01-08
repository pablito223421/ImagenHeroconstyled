
import styled from "styled-components";
import GlobalStyle from "./Bodys";



export const LogoTexto =styled.section`
width:100%;
height:100vh;
background: linear-gradient(rgba(0,0,0,0.445),
rgb(0,0,0,0.411)),
url("https://http2.mlstatic.com/D_NQ_NP_606926-MLM44992118107_022021-W.jpg")no-repeat center / cover ;`

export const Btn_video = styled.button`
position: relative;
text-decoration: none;
display: inline-block;
background-color: #2C5545;
border-radius: 4px;
font-size: 1.8rem;
padding: 0.5em 2em;
color: white;
font-family: "Verdana";`

export const Texto_prim = styled.h1 `
  font-size: 60px;
  margin-bottom: 1rem;
  font-family: "papyrus";
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color:#E10B18;`

export const Texto_dos= styled.h2 `
position: relative;
font-size: 1.5rem;
margin-bottom: 2rem;
display: flex;
align-items: center;
justify-content: center;
color:#12339C;
font-family: "Arial";`

export  const Texto_p= styled.p `
position: relative;
font-size: 1.2rem;
display: flex;
align-items: center;
justify-content: center;
color:#086322;
font-family: "Helvetica";`

export const Content_btn=styled.a`
 position: relative;
  text-decoration: none;
  display: inline-block;
  background-color: #2C5545;
  border-radius: 4px;
  font-size: 1.8rem;
  padding: 0.5em 2em;
  color: #030604;
  font-family: "Courier";`

interface HeroInterface {
  titulo: String;
  subtitulo: String;
  contenido: String;
  textoboton: String;
  linkboton: String;
}

function Hero(hero: HeroInterface) {
  console.log(Object.values(hero)[4]);
  return (
    <LogoTexto> <Texto_prim>{Object.values(hero)[0]}</Texto_prim>
    <Texto_dos >{Object.values(hero)[1]}</Texto_dos>
    <Texto_p >{Object.values(hero)[2]}</Texto_p>
    <Btn_video>
      <Content_btn href={Object.values(hero)[4]}>{Object.values(hero)[3]}</Content_btn>
    </Btn_video><GlobalStyle />
     
   </LogoTexto>
  );
}

export default Hero;
