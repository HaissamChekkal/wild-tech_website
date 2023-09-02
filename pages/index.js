import Head from 'next/head';
import styles from '../styles/pages/homepage.module.scss';
import logo from "../public/images/logo.svg"
import { Gradient } from '../public/js/gradient.js'
import { useEffect } from 'react';

export default function Home() {
  // Create your instance
  const gradient = new Gradient()
  useEffect(() => {

    // Call `initGradient` with the selector to your canvas
    gradient.initGradient('#gradient-canvas')
  }, [])

  return (
    <main className={styles.container}>
      <img src={logo.src} className={styles.logo}/>

      <h1 className={styles.title}>
        Agence digitale dédiée au monde animalier
      </h1>

      <p className={styles.description}>
      Notre entreprise se consacre à l'accompagnement des professionnels du monde animalier dans leur développement grâce à notre expertise en création d'outils numériques adaptés à leurs besoins. 
      </p>
      <canvas id="gradient-canvas" className={styles.canvas} data-transition-in />
    </main>
  )
}
