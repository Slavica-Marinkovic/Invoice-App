import React, { useState, useEffect } from 'react';
import './theme.css';
import moon from "../../assets/icon-moon.svg"
import sun from "../../assets/icon-sun.svg"

const Theme = () => {
    const [darkMode, setDarkMode] = useState(false);
    const ActiveMode = async () => {
        setDarkMode(!darkMode);
        if (darkMode === true) {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            await localStorage.setItem('Theme', 'light-mode');
        }
        if (darkMode === false) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            await localStorage.setItem('Theme', 'dark-mode');
        }

    };

    useEffect(() => {
        if(localStorage.getItem('Theme') == undefined) {
            if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.classList.add('dark-mode');
                setDarkMode(!darkMode);
            }
        }
        if (localStorage.getItem('Theme') === 'light-mode') {
            document.body.classList.add('light-mode');

        } else if (localStorage.getItem('Theme') === 'dark-mode') {
            document.body.classList.add('dark-mode');
            setDarkMode(!darkMode);
        }

    }, []);


    return (<>
        <div className="switch-mode">
            {localStorage.getItem('Theme') === 'light-mode' ?
                <img src={moon} alt="moon.svg" onClick={ActiveMode} />
                :
                <img src={sun} alt="sun.svg" onClick={ActiveMode} />
            }
        </div>
    </>)
}

export default Theme;