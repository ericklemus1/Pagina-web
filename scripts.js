window.addEventListener('load', () => {
    const pantallaCarga = document.getElementById('pantalla-carga');
    const progreso = document.getElementById('progreso');
    const porcentajeCarga = document.getElementById('porcentaje-carga');

    let porcentaje = 0;
    const intervalo = setInterval(() => {
        porcentaje += 1;
        progreso.style.width = porcentaje + '%';
        porcentajeCarga.textContent = porcentaje + '%';

        if (porcentaje === 100) {
            clearInterval(intervalo);
            setTimeout(() => {
                pantallaCarga.style.display = 'none'; // Ocultar la pantalla de carga
            }, 500); // Espera medio segundo después de llegar al 100%
        }
    }, 30); // Velocidad del progreso (ajustable)
});

let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 4000); // Cambia cada 4 segundos

function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

const btnMostrarMas = document.getElementById('mostrar-mas');
const imagenesOcultas = document.querySelectorAll('.galeria-item.hidden');

btnMostrarMas.addEventListener('click', () => {
    imagenesOcultas.forEach(imagen => {
        imagen.classList.toggle('hidden');
    });
    btnMostrarMas.textContent = btnMostrarMas.textContent === 'Mostrar más' ? 'Mostrar menos' : 'Mostrar más';
});


// Para hacer que las imágenes se agranden al hacer clic
document.querySelectorAll('.galeria-grid img').forEach(img => {
    img.addEventListener('click', () => {
        openModal(img);
    });
});

// Cerrar el modal al hacer clic fuera de la imagen
document.getElementById("modal").addEventListener('click', closeModal);
