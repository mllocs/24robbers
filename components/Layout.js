import Head from 'next/head'
import Header from './Header'

const Layout = (props) => (
  <div>
    <Head>
      <title>24 Robbers Swing Band</title>
      <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet" />
      <link rel="icon" href="/static/24.png" type="image/x-icon" />
    </Head>
    <div>
      <Header />
      <div className='content'>
        {props.children}
      </div>
    </div>

    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-family: Karla, Helvetica;
        background-color: #FDE8DE;
      }

      .content {
        margin-top: 100px;
      }
    `}</style>
  </div>
)

export default Layout
