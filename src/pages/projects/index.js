import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/project.module.css'

const Projects = ({data}) => {
  const projects = data.allMarkdownRemark.nodes

  console.log(projects)
   
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've created</h3>
        <div className={styles.projects} >
        {projects.map((project) => {
          return(
          <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <div>
            <h3>{project.frontmatter.title}</h3>
            <p>{project.frontmatter.stack}</p>
            </div>
              
          </Link>
          )
        })}
        </div>
        
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
query Projects {
  allMarkdownRemark {
    nodes {
      frontmatter {
        stack
        title
        slug
      }
      id
    }
  }
}
`