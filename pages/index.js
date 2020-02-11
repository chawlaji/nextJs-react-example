import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Link from 'next/link'

const Home = () => (
  <div>
    <h1>hc</h1>
    <Link href='/blog'>
      <a>Blog</a>
    </Link>
  </div>
)

export default Home
