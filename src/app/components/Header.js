import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import styles from "../styles/navbar.css"

const Header = () => {
  return (
    <header className="main_header">
        <div className="compl_header">
            {/* <Link href="/">
                <Image src="https://cdn.pixabay.com/photo/2022/10/20/12/13/icons-7534723_960_720.png" alt="image" width={30} height={30}/>
            </Link> */}
            <Nav/>
        </div>
    </header>
  )
}

export default Header