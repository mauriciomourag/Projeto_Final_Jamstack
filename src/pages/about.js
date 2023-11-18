import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const SobreNos = () => {
  const { logo } = useStaticQuery(graphql`
  query {
    logo: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fixed(width:1280 , height: 800) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`);

  return (
    <Layout>
      <div className="about">
      <div className="aboutus">
      <Img fixed={logo.childImageSharp.fixed} alt="logo" />
      </div>
      <div className="aboutcompany">
      <h1>Sobre a Empresa de Games</h1>
      <p>
        Com a motivação do entusiasmo, somos uma líder global em entretenimento
        digital interativo. Com sede em São Paulo, no estado de São Paulo,
        nós desenvolvemos e fornecemos jogos, conteúdo e serviços online para
        dispositivos móveis, computadores pessoais e consoles conectados à
        Internet. Por meio de nossos jogos de ponta, serviços inovadores e
        tecnologias avançadas, levamos mundos com infinitas possibilidades a
        mais de 600 milhões de pessoas ativas e fãs em todo o mundo. 

      </p>
      </div>
      <h1>Nossos valores</h1>
      <div class="flexboxabout">
        <div class="itemabout">
          <div class="contentabout">
            <h2>Criatividade</h2>
            <p>
              Trabalhar para trazer criatividade, ideias originais e empolgação
              a tudo que fazemos.
            </p>
          </div>
        </div>
        <div class="itemabout">
          <div class="contentabout">
            <h2>Pioneirismo</h2>
            <p>
              Agir com a curiosidade e coragem necessária para experimentar,
              inovar e liderar.
            </p>
          </div>
        </div>
        <div class="itemabout">
          <div class="contentabout">
            <h2>Entusiasmo</h2>
            <p>
              Nós estamos em nosso melhor momento, quando perseguimos o que
              amamos e nos divertimos fazendo isso.
            </p>
          </div>
        </div>
        <div class="itemabout">
          <div class="contentabout">
            <h2>Determinação</h2>
            <p>
              Levar foco, motivação e convicção às nossas ações. Prosperar
              durante todo o percurso, mantendo a motivação para alcançar a
              excelência.
            </p>
          </div>
        </div>

        <div class="itemabout">
          <div class="contentabout">
            <h2>Aprendizado</h2>
            <p>
              Ouvir, ter humildade, manter a mente aberta a novas formas de
              pensar e olhar através da lente da inclusão. Manter o desafio de
              crescer e mudar como uma empresa.
            </p>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default SobreNos;

export const Head = () => <title>Sobre Nós</title>;
