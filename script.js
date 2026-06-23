document.getElementById('year').textContent = new Date().getFullYear();

const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const links = document.querySelectorAll('.mobile-link');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

function sendToWhatsApp(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    const text = `*New Corporate Inquiry*%0A%0A*Name:* ${name}%0A*Mobile:* ${mobile}%0A*Service:* ${service}%0A*Details:* ${message}`;
    window.open(`https://wa.me/919904970581?text=${text}`, '_blank');
}
