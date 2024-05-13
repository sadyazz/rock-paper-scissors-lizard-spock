import React from "react";

const Header = ({ className = "", text }) => {
    return (
        <div className={`text-white m-0 text-4xl w-screen flex justify-center py-7 ${className}`}>
            {/* rock-paper-scissors-lizard-spock */}
            {text}
        </div>
    )
}

export default Header