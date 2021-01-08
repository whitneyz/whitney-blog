import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> The Whitney Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                   {/*you can also style inline
                   style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px" */}
            </div>
        </nav>
    );
};

export default Navbar;
