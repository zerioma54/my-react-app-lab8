import React from "react";

function Footer() {
    return (
        <footer className="footer bg-dark text-light text-center py-3 w-100">
            <p>© {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
