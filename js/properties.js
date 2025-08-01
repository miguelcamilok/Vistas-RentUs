const properties = [
    {
        images: ['img/casa1.webp', 'img/casa2.jpg', 'img/casa3.webp'],
        title: 'Casa moderna en zona residencial',
        location: '📍 Barrio El Poblado, Popayán',
        price: "$1'200.000",
        beds: '🛏️ 3 Habitaciones',
        baths: '🛁 2 Baños',
        size: '📐 180m²',
        desc: '🏡 Amplia casa con jardín, cocina integral y acabados de lujo.'
    },
    {
        images: ['img/casa2.webp', 'img/casa2_2.webp'],
        title: 'Apartamento en el centro',
        location: '📍 Centro histórico, Popayán',
        price: "$950.000",
        beds: '🛏️ 2 Habitaciones',
        baths: '🛁 1 Baño',
        size: '📐 90m²',
        desc: '🏙️ Ideal para parejas o estudiantes. Vista panorámica.'
    },
    {
        images: ['img/casa3.webp'],
        title: 'Casa campestre con vista',
        location: '📍 Vereda La Rejoya, Popayán',
        price: "$1'800.000",
        beds: '🛏️ 4 Habitaciones',
        baths: '🛁 3 Baños',
        size: '📐 250m²',
        desc: '🌄 Casa rodeada de naturaleza, ideal para desconectarse de la ciudad.'
    }
];

let currentIndex = 0;
let currentImageIndex = 0;

const modal = document.getElementById('property-detail-modal');
const closeBtn = document.querySelector('.property-detail-close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const thumbnailsContainer = document.getElementById('property-thumbnails');
const imageEl = document.getElementById('property-detail-image');

function updateArrowVisibility() {
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === properties.length - 1 ? 'none' : 'block';
}

function updateImage(index) {
    const data = properties[currentIndex];
    imageEl.src = data.images[index];
    currentImageIndex = index;

    document.querySelectorAll('.image-thumbnails img').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function updateModal(index) {
    const data = properties[index];
    document.getElementById('property-detail-title').textContent = data.title;
    document.getElementById('property-detail-location').textContent = data.location;
    document.getElementById('property-detail-price').textContent = data.price;
    document.getElementById('property-detail-beds').textContent = data.beds;
    document.getElementById('property-detail-baths').textContent = data.baths;
    document.getElementById('property-detail-size').textContent = data.size;
    document.getElementById('property-detail-desc').textContent = data.desc;

    // Miniaturas
    thumbnailsContainer.innerHTML = '';
    data.images.forEach((img, i) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        if (i === 0) thumb.classList.add('active');
        thumb.addEventListener('click', () => updateImage(i));
        thumbnailsContainer.appendChild(thumb);
    });

    updateImage(0);
    updateArrowVisibility();
}

function openModal(index) {
    currentIndex = index;
    updateModal(index);
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
}

function closeModal() {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}

function showNext() {
    if (currentIndex < properties.length - 1) {
        currentIndex++;
        updateModal(currentIndex);
    }
}

function showPrev() {
    if (currentIndex > 0) {
        currentIndex--;
        updateModal(currentIndex);
    }
}

closeBtn.addEventListener('click', closeModal);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Vincular cada .property-card al abrir el modal
document.querySelectorAll('.property-card').forEach((card, i) => {
    card.addEventListener('click', () => openModal(i));
});