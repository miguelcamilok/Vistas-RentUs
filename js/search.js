document.addEventListener('DOMContentLoaded', function () {
    const searchSection = document.querySelector('.search-section');
    const searchWrapper = document.querySelector('.search-wrapper');
    const searchPlaceholder = document.querySelector('.search-placeholder');

    let isSticky = false;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting && !isSticky) {
                // Se vuelve sticky
                isSticky = true;
                searchWrapper.classList.add('sticky');
                searchPlaceholder.classList.add('active');
            } else if (entry.isIntersecting && isSticky) {
                // Vuelve a su lugar
                isSticky = false;
                searchWrapper.classList.remove('sticky');
                searchPlaceholder.classList.remove('active');
            }
        },
        {
            root: null,
            threshold: 0,
            rootMargin: '-1px 0px 0px 0px' // Justo cuando toca el top
        }
    );

    observer.observe(searchSection);
});
