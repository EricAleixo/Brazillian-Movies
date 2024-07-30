alert("Bem-vindo caro usuário, nesta página você irá encontrar alguns dos mais diversos filmes brasileiros. Aproveite!")

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    let currentIndex = 0;

    // Função para alternar os slides
    function showSlide(index) {
        slides.forEach((slide) => (slide.style.display = "none"));
        slides[index].style.display = "block";
    }

    // Função para avançar automaticamente
    function autoAdvance() {
        currentIndex = (currentIndex + 1) % slides.length;
        radioButtons[currentIndex].checked = true;
        showSlide(currentIndex);
    }

    // Inicializa o primeiro slide
    showSlide(currentIndex);

    // Configura o intervalo
    setInterval(autoAdvance, 2500); // 2 seg e meio de intervalo
});
