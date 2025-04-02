let btn = document.querySelector("#btn")
let output = document.querySelector("#output")

function delayMsg(ms){
	return new Promise(resolve => setTimeout(resolve, ms))
}

btn.addEventListener("click", async ()=>{
	let msg = document.querySelector("#text").value
	let delay = parseInt(document.querySelector("#delay").value)
	
	await delayMsg(delay)
	output.textContent = msg;
})