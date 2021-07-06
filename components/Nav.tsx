import React, { useState, useEffect } from 'react'
import { IconButton } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

import styles from './Nav.module.scss'
export default function Nav(){
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [isLarge, setIsLarge] = useState<boolean>(false);
    useEffect(() => {
        const handler = () => {
            setIsLarge(window.innerWidth > 600);
        };
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, [])
    useEffect(() => setMenuOpen(false), [isLarge]);
    
    return (
    <div className={styles.nav}>
        <h1 className={styles.navBrand}>Jason Cramer</h1>
        <div className={styles.menu}>
            {!isLarge&&<IconButton onClick={() => setMenuOpen((open) => !open)} className={styles.menuButton}>
                {menuOpen ? <CloseIcon/> : <MenuIcon />}
            </IconButton>}
            {(menuOpen || isLarge)&&<div className={styles.navLinkContainer}>
                <a className={styles.navLink}>About</a>
                <a className={styles.navLink}>Blog</a>
                <a className={styles.navLink}>Contact</a>
            </div>}
        </div>
    </div>);
}