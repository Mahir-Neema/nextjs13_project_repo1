import React from 'react'

const Notfound = () => {
  return (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '80vh', 
        backgroundColor: '#e3e3ea',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center'
      }}>
        <p>Oops, something went wrong!</p>
        <p>Error 404: Page not found</p>
    </div>
  )
}

export default Notfound;