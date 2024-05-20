

document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is fully loaded and parsed');
    
    const aboutSection = document.querySelector('section:nth-of-type(1)');
    aboutSection.style.backgroundColor = '#f0f0f0';
    
    const email = document.querySelector('footer p');
    email.addEventListener('click', () => {
        alert('Email address clicked!');
    });
});
