import Link from 'next/link'

const s_title = {
  display: 'inline-block',
  textTransform: 'uppercase',
  padding: 0,
  margin: '0 0 0 20px',
  verticalAlign: 'middle',
  fontSize: 18,
  color: 'white',
}

const s_link = {
}

const Header = () => (
  <div className='topbar'>
    <Link href="/">
      <a>
        <h1 style={s_title}>24 Robbers swing band</h1>
      </a>
    </Link>
    <div className='links'>
      <Link href="https://www.facebook.com/pg/24RobbersSwingBand/">
        <a target="_blank" className='link'>Facebook</a>
      </Link>
      <Link href="/photos">
        <a className='link'>Photos</a>
      </Link>
      <Link href="/videos">
        <a className='link'>Videos</a>
      </Link>
      <Link href="/contact">
        <a className='link'>Contact</a>
      </Link>
    </div>

    <style jsx global>{`
      .link {
        margin-right: 25px;
        color: white;
        text-decoration: none;
      }

      .topbar {
        display: flex;
        justify-content: space-between;
        padding: 16px 0;
        background-color: black;
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
      }

      .links {
        margin-right: 10px;
      }
    `}</style>
  </div>
)

export default Header
