export default function attachImage(e, setImgAttached){
		let files  = e.target.files
		let reader = new FileReader()
		reader.readAsDataURL(files[0])
		reader.onload = (e) =>{
			setImgAttached(e.target.result)
		}
	}