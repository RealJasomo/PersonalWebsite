import styles from './Nav.module.scss'
export default function Nav(){
    return (
    <div className={styles.nav}>
        <h1 className={styles.navBrand}>Jason Cramer</h1>
        <a className={styles.navLink}>About</a>
        <a className={styles.navLink}>Blog</a>
        <a className={styles.navLink}>Contact</a>
    </div>);
}