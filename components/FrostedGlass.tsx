import styles from './FrostedGlass.module.scss'

interface IFrostedGlass {
    children: React.ReactNode,
    color?: string
}

export default function FrostedGlass({ children, color} : IFrostedGlass){
    return <div className={styles.frosted} {...(color&&{style: { backgroundColor: color}})}>
        {children}
    </div>
}