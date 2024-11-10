// Cookie Consent Logic
document.addEventListener('DOMContentLoaded', function () {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    
    // Check if the user already accepted cookies
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        cookieConsent.style.display = 'none';
    }

    acceptCookiesBtn.addEventListener('click', function () {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.style.display = 'none';
    });
});
