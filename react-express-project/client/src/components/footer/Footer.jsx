import React from 'react';

const Footer = () => {
    const date = new Date();
    return (
        <>
            <div className=' pb-2 pt-2 w-100 text-center text-white' style={{ "background-color": "#2b5797" }}>
                &copy; {date.getFullYear()}
            </div>
        </>
    );
}

export default Footer;