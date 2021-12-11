import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/header'
import Menu from '../components/menu/menu'
import Footer from '../components/footer/footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Associação dos Ex-Alunos e dos Amigos da Escola de Educação Física do Exército - Página Inicial</title>
        <meta name="Site da AsEFEx" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Menu />        
      </main>

      <Footer />
    </div>
  )
}