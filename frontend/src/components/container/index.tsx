
type Props = {

    designs?: string
    children?: JSX.Element | JSX.Element[] | string

}

const Container = ({ children, designs }: Props) => {

    return (
        <div className={`max-w-[1440px] mx-auto flex ${designs}`}>
            {children}
        </div>
    )
}

export default Container
