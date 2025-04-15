document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        console.log(`Hovering over ${card.querySelector('h3').textContent}`);
    });
});