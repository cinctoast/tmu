document.addEventListener('DOMContentLoaded', function () {
	const courseTitle = document.querySelectorAll('.au-course-title');
	const courseModule = document.querySelectorAll('.au-course-module');

	if (courseTitle) {
		courseTitle.forEach((section, index) => {
			section.addEventListener('click', function (event) {
				if (window.innerWidth < 1100) {
					event.preventDefault();
					section.classList.toggle('course-title-active');
					courseModule[index].classList.toggle('course-active');
				}
			});

			section.addEventListener('keydown', function (event) {
				if (window.innerWidth < 1100 && (event.key === 'Enter' || event.key === ' ')) {
					event.preventDefault();
					section.classList.toggle('course-title-active');
					courseModule[index].classList.toggle('course-active');
				}
			});
		});
	}
});

document.addEventListener('DOMContentLoaded', function () {
	const course = document.querySelectorAll('.au-course');
	const courseModule = document.querySelectorAll('.au-course-module');
	const courseButton = document.querySelectorAll('.au-course-button');

	if (course) {
		course.forEach((section, index) => {
			section.addEventListener('mouseenter', function (event) {
				if (window.innerWidth >= 1100) {
					event.preventDefault();
					section.classList.add('course-module-active');
					courseModule[index].classList.add('course-active');
				}
			});

			section.addEventListener('mouseleave', function (event) {
				if (window.innerWidth >= 1100) {
					event.preventDefault();
					section.classList.remove('course-module-active');
					courseModule[index].classList.remove('course-active');
				}
			});

			section.addEventListener('keydown', function (event) {
				if (window.innerWidth >= 1100 && event.key === ' ') {
					event.preventDefault();
					if (section.classList.contains('course-module-active')) {
						section.classList.remove('course-module-active');
						courseModule[index].classList.remove(
							'course-active',
						);
						courseButton.setAttribute('tabindex', '-1');
					} else {
						section.classList.add('course-module-active');
						courseModule[index].classList.add('course-active');
					}
				}
			});

			section.style.transition = 'all 0.3s';
			courseModule[index].style.transition = 'all 0.3s';
		});
	}
});
