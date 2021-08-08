import { FC } from "react"
import s from "./Hero.module.css"
import Link from "next/link"
import { Container } from "@components/ui"

interface Props {
    headline: string
    description: string
}


export const Hero: FC<Props> = ({ headline, description }) => {
    return (
        <div className="bg-black">
            <Container>
                <div className={s.root}>
                    <h2 className={s.headline}>
                        {headline}
                    </h2>
                    <div>
                        <div className="flex-1 max-w-4xl">
                            <p className={s.description}>
                                {description}ggggh
                            </p>
                        </div>
                        <Link href="/">
                            <a className={s.link}>
                                Read it here
                            </a>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

