window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.nav');
        // Kapag nag-scroll ka ng higit sa 50 pixels pababa...
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            // Kapag bumalik ka sa pinakataas...
            navbar.classList.remove('scrolled');
        }
    });