import Link from "next/Link";
const Navbar =() => (<div>
    <nav>
    <Link href="/about"><button>About</button></Link>
    <Link href="/"><button>Home Page</button></Link>
    </nav>
    <style jsx>{`
        nav {
            background: grey;
            color: black;
            display:flex;
            justify-content:space-between;
        }
        nav button{
            color: purple;
            background-color: yellow;
        }
    `}</style>
</div>)

export default Navbar;
