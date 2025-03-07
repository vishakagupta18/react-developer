import React from 'react'
import { Link } from 'react-router-dom';

function header() {
  return (
    <div>
      <header style={styles.header}>
        <nav style={styles.navWrapper}>
          <h2 style={styles.WebLink}>Vishaka - Cosmo Kart</h2>
          <ul style={styles.navList}>
            <li><Link style={styles.navLink} to="/home" >Home</Link></li>
            <li><Link style={styles.navLink} to="/products" >Products</Link></li>
            {/* <li><Link style={styles.navLink} to="/cart" >Cart</Link></li> */}
          </ul>
        </nav>
      </header>
    </div>
  )
}

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '5px',
    // textAlign: 'center'
  },
  title: {
    margin: 0
  },
  navWrapper: {
    width: '80%',
    display: 'flex',
    margin: '0 auto',
  },
  WebLink: {
    display: 'flex',
    justifyContent: 'left'
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'right',
    width: '75%'
  },
  navLink: {
    margin: '0 1rem',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
  }
};

export default header
