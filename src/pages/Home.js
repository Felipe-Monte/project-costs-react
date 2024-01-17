import styles from './Home.module.css'

import LinkButton from '../components/layout/LinkButton'

import money from '../../src/img/money.svg'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar seus projetos agora mesmo</p>

      <LinkButton to="/newproject" text="criar projeto" />

      <img src={money} alt="Costs" />
    </section>
  )
}

export default Home