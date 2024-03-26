import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar worksans my-14 p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="mainmenu font-semibold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ListedBooks">Listed Books</NavLink>
                            </li>
                            <li>
                                <NavLink to="/PageToRead">Pages to Read</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Upcoming">Upcoming</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to="/">
                        <p className="btn btn-ghost text-3xl font-bold">Appon Book Vibe</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="mainmenu gap-3 font-semibold menu menu-horizontal px-1">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ListedBooks">Listed Books</NavLink>
                        </li>
                        <li>
                            <NavLink to="/PageToRead">Pages to Read</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Upcoming">Upcoming</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn mr-4 font-semibold bg-[#23BE0A] py-[18px] px-7 text-white h-auto text-[18px]">Sign In</a>
                    <a className="btn font-semibold bg-[#59C6D2] py-[18px] px-7 text-white h-auto text-[18px]">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
