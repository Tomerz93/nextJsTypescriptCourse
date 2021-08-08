import s from './Grid.module.css'
import cn from "classnames"


interface Props {
    children: React.ReactNode[]
    layout?: "A" | "B"
}

export const Grid: React.FC<Props> = ({ children, layout = 'A' }) => {

    const rootClassName = cn(
        s.root,
        {
            [s.layoutA]: layout === 'A',
            [s.layoutB]: layout === 'B',
        }
    )

    return <div className={rootClassName}>
        {children}
    </div>
}