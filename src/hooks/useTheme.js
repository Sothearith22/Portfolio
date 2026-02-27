
import React, { useEffect, useState } from 'react'

const useTheme = () => {
    const [theme, setTheme] = useState('light');
    useEffect(()=>{
        document.documentElement.className = theme
    },[theme])
    const toggleTheme = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return { theme , toggleTheme }
}

export default useTheme
