import styles from './FrostedGlass.module.scss'

interface IFrostedGlass {
    children: React.ReactNode,
    color?: string,
    style?: React.CSSProperties,
    className?: string
}

export default function FrostedGlass({ children, color, style, className} : IFrostedGlass){
    return <div className={className?`${styles.frosted} ${className}`:styles.frosted} {...(style&&{ style:{...style, ...(color&&{backgroundColor: color})}})}>
        {children}
    </div>
}