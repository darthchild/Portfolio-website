// ************  FOR PROJECTS SECTION  ************
const projectBoxData = [
	{
		title: "Screenlit - Full Stack Movie Review Platform",
		description: "Spring Boot, React JS, PostgreSQL, Docker, AWS",
        repoUrl: "https://github.com/darthchild/Screenlit"
	},
	{
		title: "Samvaad AI - Multimodal & Multilingual AI assistant",
		description: "Flask, Bhashini Suite, Mixtral 8x7B, Python, JavaScript",
        repoUrl: "https://github.com/darthchild/Samvaad-AI"
	},
	{
		title: "Spotify Song Popularity Analysis",
		description: "R, Linear Regression, dplyr, RStudio,",
        repoUrl: "https://github.com/darthchild/Spotify-Song-Popularity-Analysis"
	},
	{
		title: "The Inquisitor - Real-time Android Quiz App",
		description: "Android SDK, Firebase, Android Studio, Gradle",
        repoUrl: "https://github.com/darthchild/The-Inquisitor"
	}
];

const projectBoxContainer = document.getElementById('project-box-container');

projectBoxData.forEach(data => {
	const box = document.createElement('a');
	box.className = 'project-box';
	box.href = data.repoUrl;
	box.target = "_blank"; // Opens link in a new tab
	box.rel = "noopener noreferrer"; // Security best practice for opening links in new tabs
	box.innerHTML = `
		<h2>${data.title}</h2>
		<p>${data.description}</p>
	`;
	projectBoxContainer.appendChild(box);
});

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
	
	// for burred background when sidebar opens
	document.querySelector('.main-container').classList.toggle('blur');
});

// ************  FOR CLOSING SIDEBAR  ************
function closeSidebar() {
	const bars = document.querySelectorAll('.bar');
	bars.forEach(bar => bar.classList.remove('open'));
	document.getElementById('sidebar').classList.remove('sidebar-open');
}



// <!-- Top language stats -->
// <a href="https://github.com/darthchild/github-readme-stats">
// 	<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=darthchild&layout=compact&theme=radical&show_icons=true" alt="Top Languages" />
// </a>

// <!-- Contributions & streak -->
// <a align= "center" href="https://github.com/darthchild">
// <img alt= "stats card" height="200px" width="400" src="https://github-readme-streak-stats.herokuapp.com/?user=darthchild&theme=radical">
// <br>

// <!-- overall GitHub stats -->
// <img height="200px" width="400" src="https://github-readme-stats.vercel.app/api?username=darthchild&count_private=true&theme=radical&show_icons=true" />
// <br>