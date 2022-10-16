import React from 'react';

const FooterStick = () => {
    const date = new Date();
    return (
        <>
            <div className=' fixed-bottom pb-2 pt-2 w-100 text-center text-white' style={{ "background-color": "#2b5797" }}>
                &copy; {date.getFullYear()}
            </div>
        </>
    );
}

export default FooterStick;