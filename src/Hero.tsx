
import styled from "styled-components";


export const LogoTexto =styled.section`
width:100%;
height:100vh;
background: linear-gradient(rgba(0,0,0,0.445),
rgb(0,0,0,0.411)),
url("https://www.playeraspersonalizadas.xyz/wp-content/uploads/2018/12/playeras-para-pareja-de-navidad.jpg")no-repeat center / cover ;
color:white;`

export const Btn_video = styled.button`
position: relative;
text-decoration: none;
display: inline-block;
background-color: #2C5545;
border-radius: 4px;
font-size: 1.8rem;
padding: 0.5em 2em;
color: white;`

export const Texto_prim = styled.h1 `
position: relative;
  font-size: 60px;
  margin-bottom: 1rem;
  font-family: "papyrus";
  font-weight: bold;`

export const Texto_dos= styled.h2 `
position: relative;
font-size: 1.5rem;
margin-bottom: 2rem;`

export  const Texto_p= styled.p `
position: relative;
font-size: 1.2rem;
max-width: 60%;`

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
    <LogoTexto>
      <div className="container">
        <div className="info">
          <Texto_prim>{Object.values(hero)[0]}</Texto_prim>
          <Texto_dos>{Object.values(hero)[1]}</Texto_dos>
          <Texto_p>{Object.values(hero)[2]}</Texto_p>
          <Btn_video>
            <a href={Object.values(hero)[4]}>{Object.values(hero)[3]}</a>
          </Btn_video>
        </div>
      </div>
    </LogoTexto>
  );
}

export default Hero;
