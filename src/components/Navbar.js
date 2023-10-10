import React from 'react'
import { Scrollchor } from 'react-scrollchor'

const navigation = [
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
]

const Navbar = () => {
    return (
        <header className="inset-x-0 top-0 z-50 flex justify-center">
            <nav className="p-6" aria-label="Global"> 
                <div className="flex gap-x-12">
                    {navigation.map((item) => (
                        <Scrollchor key={item.name} to={item.href} className="text-sm font-thin leading-6">
                            {item.name}
                        </Scrollchor>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar