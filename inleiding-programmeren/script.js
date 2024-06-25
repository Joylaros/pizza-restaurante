// Wacht tot de DOM volledig is geladen
document.addEventListener('DOMContentLoaded', function() {
    // Controleer of de huidige pagina bereiden.html is
    if (window.location.pathname.includes('bereiden.html')) {
        // Gebruik setTimeout om na 5 seconden de pagina om te leiden
        setTimeout(function() {
            window.location.href = 'index.html'; // Omleiden naar index.html
        }, 5000); // 5000 milliseconden = 5 seconden
    }
});

// Wacht tot de DOM geladen is
document.addEventListener('DOMContentLoaded', function() {
    // Selecteer alle icoon-elementen
    const sauceIcon = document.getElementById('sauce-icon');
    const cheeseIcon = document.getElementById('cheese-icon');
    const tomatoIcon = document.getElementById('tomato-icon');
    const pineappleIcon = document.getElementById('pineapple-icon');
    const salamiIcon = document.getElementById('salami-icon');
    const onionIcon = document.getElementById('onion-icon');

    // Voeg klikgebeurtenissen toe aan elk icoon
    sauceIcon.addEventListener('click', function() {
        toggleIngredient('sauce');
    });

    cheeseIcon.addEventListener('click', function() {
        toggleIngredient('cheese');
    });

    tomatoIcon.addEventListener('click', function() {
        toggleIngredient('tomato');
    });

    pineappleIcon.addEventListener('click', function() {
        toggleIngredient('pineapple');
    });

    salamiIcon.addEventListener('click', function() {
        toggleIngredient('salami');
    });

    onionIcon.addEventListener('click', function() {
        toggleIngredient('onion');
    });

    // Functie om ingrediënt toe te voegen of te verwijderen van de pizza
    function toggleIngredient(ingredientId) {
        const ingredient = document.getElementById(ingredientId);

        // Controleer of het ingrediënt zichtbaar is of niet
        if (ingredient.style.display === 'none' || !ingredient.style.display) {
            ingredient.style.display = 'block'; // Maak zichtbaar
        } else {
            ingredient.style.display = 'none'; // Verberg
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.volume = 0.5; // Stel het volume in (0.0 - 1.0)

    // Optioneel: Automatisch afspelen van de muziek bij het laden van de pagina
    backgroundMusic.play();

    // Optioneel: Pauzeer de muziek als de gebruiker de pagina verlaat
    window.addEventListener('beforeunload', function() {
        backgroundMusic.pause();
    });
});

