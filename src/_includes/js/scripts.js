<script>

	theme = localStorage.getItem("theme");
	if (theme) {
		document.querySelector('html').setAttribute('data-user-color-scheme', theme);
		}



	document.querySelectorAll(".alt-themes li input").forEach(theitem => {theitem.addEventListener("click", handleClick)});
	function handleClick() {
	var setting = this.getAttribute('id');
	console.log(setting);
	document.querySelector('html').setAttribute('data-user-color-scheme' , setting );
	localStorage.setItem("theme", setting);
	}
</script>

