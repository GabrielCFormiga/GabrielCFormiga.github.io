// Opens contest photos in a dialog. Without JS the links open the image itself.
(function () {
	var viewer = document.getElementById('viewer');
	if (!viewer || typeof viewer.showModal !== 'function') return;

	var img = document.createElement('img');
	var caption = viewer.querySelector('p');
	var opener = null;
	viewer.insertBefore(img, caption);

	document.addEventListener('click', function (event) {
		var link = event.target.closest('a.photo');
		if (!link || event.metaKey || event.ctrlKey || event.shiftKey) return;
		event.preventDefault();
		opener = link;
		img.src = link.getAttribute('href');
		img.alt = link.querySelector('img').alt;
		caption.textContent = link.dataset.caption || '';
		viewer.showModal();
	});

	viewer.querySelector('.viewer__close').addEventListener('click', function () {
		viewer.close();
	});

	// Clicking the backdrop closes the viewer
	viewer.addEventListener('click', function (event) {
		if (event.target === viewer) viewer.close();
	});

	viewer.addEventListener('close', function () {
		img.removeAttribute('src');
		if (opener) opener.focus();
	});
})();
