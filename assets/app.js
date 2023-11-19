// ************  FOR APPEARENCE ON SCROLL  ************
const obsever = new IntersectionObserver((entries) => {
 
	entries.forEach((entry) => {
		console.log(entry)

		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(
	(el) => obsever.observe(el)
);


// ************  FOR SCROLLING TO NEXT SECTION  ************
function scrollToSection(sectionId) {
	const targetElement = document.getElementById(sectionId);
	const targetPosition = targetElement.offsetTop;
	const duration = 700; // milliseconds
	const startTime = performance.now();

	function scroll() {
		const currentTime = performance.now();
		const progress = Math.min((currentTime - startTime) / duration, 1);
		window.scrollTo(0, targetPosition * progress);

		if (progress < 1) {
			requestAnimationFrame(scroll);
		}
	}
	scroll();
}

// ************  FOR OPENING SIDEBAR ************
document.getElementById('menuToggle').addEventListener('click', function () {
	const bars = document.querySelectorAll('.bar');
	bars.forEach(bar => bar.classList.toggle('open'));
	document.getElementById('sidebar').classList.toggle('sidebar-open');
});

// ************  FOR CLOSING SIDEBAR  ************
function closeSidebar() {
	const bars = document.querySelectorAll('.bar');
	bars.forEach(bar => bar.classList.remove('open'));
	document.getElementById('sidebar').classList.remove('sidebar-open');
}
