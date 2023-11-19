import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/layout";

const DiaryPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
            slug
          }
          id
          excerpt
        }
      }
    }
  `);

  return (
    <Layout>
      <div className="diary">
      <h1>Últimas Notícias dos Jogos da Empresa de Games:</h1>
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/diary/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Update {node.frontmatter.date}</p>
          </article>
        ))}
      </ul>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Diary</title>;

export default DiaryPage;
