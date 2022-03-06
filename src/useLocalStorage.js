
import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue){
    console.log('useLocalStorage.js getStorageValue() invoked');
    // getting stored value
    const saved = localStorage.getItem(key);
    console.log('useLocalStorage.js getStorageValue() saved: '+saved);
    if(saved){
        const initial = JSON.parse(saved);
        return initial || defaultValue;
    }
    return defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        // storing input name
        console.log('useLocalStorage.js useEffect() value: '+JSON.stringify(value));
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};