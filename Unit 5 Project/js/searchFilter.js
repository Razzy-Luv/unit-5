// JavaScript to handle search functionality
document.addEventListener('DOMContentLoaded', () => {
    // Variable that targets the search input
    const searchInput = document.getElementById('search');
    // Variable that targets all the gallery items using the <a> tag
    const galleryItems = document.querySelectorAll('.gallery a');
    // function that is executed when the user types in the search input
    searchInput.addEventListener('keyup', (event) => {
        const searchText = event.target.value.toLowerCase();
        // Loop through each gallery item and check if the caption includes the search text
        galleryItems.forEach(item => {
            const caption = item.getAttribute('data-caption').toLowerCase();
            if (caption.includes(searchText)) {
                item.style.display = ''; 
            } else {
                item.style.display = 'none';
            }
        });
    });
});

