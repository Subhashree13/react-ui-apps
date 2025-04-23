import React, {useCallback, useEffect, useState} from 'react';

const useStorage = (type = 'localStorage' || 'sessionStorage')=>{
    console.log("type---",type)
const storageType = type;
const getItem = useCallback((key)=>{
try{
    const value = storageType.getItem(key);
    return value ? JSON.parse(value) : null;
} catch(error){
    console.error(`error getting ${key} from ${type}`, error);
return null;
}
},[storageType])

const setItem = useCallback((key, value)=>{
    try{
       const stringifiedValue = JSON.stringify(value);
       storageType.setItem(key, stringifiedValue);
    } catch(error){
        console.error(`error getting ${key} from ${type}`, error);
    }
    },[storageType])

    const removeItem = useCallback((key)=>{
        try{
            storageType.removeItem(key);
        } catch(error){
            console.error(`error getting ${key} from ${type}`, error);
        }
        },[storageType])

    return {getItem, setItem, removeItem}
}
export default useStorage;