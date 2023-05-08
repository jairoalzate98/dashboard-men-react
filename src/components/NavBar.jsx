import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <Link to="/first-question" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pregunta 1</Link>
                            <Link to="/second-question" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pregunta 2</Link>
                            <Link to="/third-question" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pregunta 3</Link>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )


}

export default NavBar