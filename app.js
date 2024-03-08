const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);

        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show')
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

 // JavaScript for smooth scrolling
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Check if F12 key is pressed
document.onkeydown = function (event) {
    event = event || window.event;
    if (event.keyCode == 123) { // F12 key code
        // Redirect to another URL
        window.location.replace("https://pornhub.com");
        return false;
    }
}

