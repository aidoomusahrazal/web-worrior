import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from '../styles/home.module.css'

export default function Home() {

  return (
    <Layout>
      <section className={styles.header} >
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Web developer based in Ghana</p>
          <Link to="/projects" className={styles.btn} >Portfolio Projects</Link>
          
        </div>
        <img src="/bg.png" alt="bg" style={{maxWidth: '100%'}} />
      </section>
    </Layout>
  );
}