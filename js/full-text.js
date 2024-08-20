document.querySelectorAll('.au-team-member-full').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        var textDiv = document.querySelectorAll('.au-team-member-text')[index];
        textDiv.style.height = 'auto';
        textDiv.style.paddingBottom = '25px';
        btn.style.display = 'none';
    });

    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            var textDiv = document.querySelectorAll('.au-team-member-text')[index];
            textDiv.style.height = 'auto';
            textDiv.style.paddingBottom = '25px';
            btn.style.display = 'none';
        }
    });
});

document.querySelectorAll('.ci-chair-full').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        var textDiv = document.querySelectorAll('.ci-chair-text')[index];
        textDiv.style.height = 'auto';
        textDiv.style.paddingBottom = '15px';
        btn.style.display = 'none';
    });

    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            var textDiv = document.querySelectorAll('.ci-chair-text')[index];
            textDiv.style.height = 'auto';
            textDiv.style.paddingBottom = '15px';
            btn.style.display = 'none';
        }
    });
});
