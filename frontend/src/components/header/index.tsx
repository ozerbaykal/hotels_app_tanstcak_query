import { Link } from "react-router-dom"
import Container from "../container"

const Header = () => {

    return (
        <header className="border-b">

            <Container designs="p-5 justify-between">
                <div className="flex gap-10 items-center">
                    <h1 className="font-bold text-xl md:text-3xl text-blue-950">Tripster</h1>

                    <nav className="flex gap-5 items-center">
                        <Link to="/">Oteller </Link>
                        <Link to="/" className="max-md:hidden">Populer </Link>

                        <Link to="/create"> Oluştur</Link>



                    </nav>

                </div>

                <div className="flex items-center gap-2">
                    <button className="border border-blue-500 bg-blue-100 rounded-full py-1 px-5 max-md:hidden">Kayıt Ol</button>
                    <button
                        className="bg-blue-500 text-white py-1 px-5 rounded-full ">Giriş Yap</button>

                </div>




            </Container>




        </header>
    )
}

export default Header