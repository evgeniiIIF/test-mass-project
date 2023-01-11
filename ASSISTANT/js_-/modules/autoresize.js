let textAreas = document.querySelectorAll("[data-autoresize]");

textAreas.forEach((item) => {
	let textAreaH = item.offsetHeight;
	item.addEventListener("input", (e) => {
		let $this = e.target;

		$this.style.height = textAreaH + "px";
		$this.style.height = $this.scrollHeight + "px";
	});
});
