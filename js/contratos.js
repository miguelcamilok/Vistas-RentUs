const cards = document.querySelectorAll('.card');
let activeIndex = 0;
cards[activeIndex].classList.add('active');

document.getElementById('prevBtn').addEventListener('click', () => {
  if (activeIndex > 0) {
    cards[activeIndex].classList.remove('active');
    activeIndex--;
    cards[activeIndex].classList.add('active');
  }
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if (activeIndex < cards.length - 1) {
    cards[activeIndex].classList.remove('active');
    activeIndex++;
    cards[activeIndex].classList.add('active');
  }
});

// Modal logic
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.vista-previa').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const imgSrc = cards[index].getAttribute('data-img');
    modalImg.src = imgSrc;
    modal.style.display = 'block';
  });
});

closeModal.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
