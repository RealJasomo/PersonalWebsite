import styles from './FrostedGlass.module.scss'

interface IFrostedGlass {
    children: React.ReactNode,
    color?: string,
    style?: React.CSSProperties
}

export default function FrostedGlass({ children, color, style} : IFrostedGlass){
    return <div className={styles.frosted} {...(style&&{ style:{...style, ...(color&&{backgroundColor: color})}})}>
        {children}
    </div>
}