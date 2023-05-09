import Link from 'next/link'
import React from 'react'
import "../styles/navbar.css"

const Nav = () => {
  return (
    <nav className="main_navbar">
        <div>
            <ul className="navbar_list">
                <li className='navbar_item'>
                    <Link href="/">Home</Link>
                </li>
                <li className='navbar_item'>
                    <Link href="/about">About</Link>
                </li>
                <li className='navbar_item'>
                    <Link href="/movie">Movie</Link>
                </li>
                <li className='navbar_item'>
                    <Link href="/query">Query</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav