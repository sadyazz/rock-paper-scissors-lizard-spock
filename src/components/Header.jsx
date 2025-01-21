import React from "react";

const Header = ({ text }) => {
    return (
        <div className="w-full flex justify-center pt-8">
            <h1 className="text-white text-center text-3xl md:text-4xl tracking-widest">
                {text}
            </h1>
        </div>
    )
}

export default Header