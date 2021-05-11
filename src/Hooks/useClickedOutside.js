import React, {useEffect} from 'react'

export default function useClickedOutside(ref, setElement){
	useEffect(() => {
		// add when mounted
		document.addEventListener("mousedown", (e)=>closeWhenClickedOutside(e, ref, setElement));
		// return function to be called when unmounted
		return () => {
		  document.removeEventListener("mousedown", (e)=>closeWhenClickedOutside(e, ref, setElement));
		};
	 }, []);
	const closeWhenClickedOutside = (e, ref, setElement) =>{
		if (ref.current.contains(e.target)) return;
		setElement(false)
	}
}