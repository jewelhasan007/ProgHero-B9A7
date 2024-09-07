import { useState } from "react";
import Link from "./Link";
import { MdOutlineMenuOpen } from "react-icons/md";

const Navbar = () => {

    const[open, setOpen] = useState(false)

    const routes = [
        
        {id: 1, path: '/', name: 'Home'},
        {id: 2, path: '/about', name: 'About'},
        {id: 3, path: '/services', name: 'Services'},
        {id: 4, path: '/contact', name: 'Contact'},
        {id: 5, path: '/History', name: 'History'},
    ]

    return (
        <nav className="">
 <div className="m-3 p-3 bg-slate-300 text-3xl md:hidden" onClick={()=> setOpen(!open)}>
 
                <MdOutlineMenuOpen />
                </div>
            <ul className={`bg-gray-300 m-3 duration-2000 md:flex text-2xl absolute  ${open ? 'top-12': '-top-60'}`}>
       
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
         <div className={`${open ? 'mb-11' : ''}`}>

         </div>
      
        </nav>
    );
};

export default Navbar;