import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="container text-center mt-5">
            <h1 className="text-danger">404, Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <Link to="/">Go back to home</Link>
        </div>
    );

}

export default NotFound;
