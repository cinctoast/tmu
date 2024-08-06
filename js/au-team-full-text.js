if (window.innerWidth < 1100) {
    document.querySelectorAll('.au-team-member-full').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            var textDiv = document.querySelectorAll('.au-team-member-text')[index];
            textDiv.style.height = 'auto';
            textDiv.style.paddingBottom = '25px';
            btn.style.display = 'none';
        });
    });
}