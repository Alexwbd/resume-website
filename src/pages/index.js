import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Layout from './components/Layout'
import Profile from  './components/profile'
import Projects from './components/projectGrid'
import React from 'react'
const isEqual = (prevProps, nextProps) => {
  if(prevProps.showHeader === prevProps.showHeader){
    return true
  }else if (prevProps.showHeader === nextProps.showHeader){
    return false
  }
}
const Home = () => {
  return (
    <Layout  showHeader={true}>
      <main className={styles.mainPage} >
      
        <Head>
          <title>Home</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
                <Profile/>
                <Projects/>

      </main>
    </Layout>
  )
}
export default React.memo(Home, isEqual)