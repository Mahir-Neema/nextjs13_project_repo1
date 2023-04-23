import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import styles from "../styles/navbar.css"

const Header = () => {
  return (
    <header className="main_header">
        <div className="compl_header">
            <Link href="/">
                <Image src="https://cdn.pixabay.com/photo/2022/08/22/22/19/sailor-7404656_1280.png" alt="image" width={70} height={70}/>
            </Link>
            <Nav/>
        </div>
    </header>
  )
}

export default Header