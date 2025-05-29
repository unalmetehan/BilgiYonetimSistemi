document.addEventListener("DOMContentLoaded", () => {
    const menuToggles = document.querySelectorAll('.menu-toggle');
    
    // Menülerin tıklama olaylarını ayarla
    menuToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            // Tüm menüleri kontrol et ve açık olanları kapat
            menuToggles.forEach(otherToggle => {
                const otherSubmenu = otherToggle.nextElementSibling;
                if (otherToggle !== toggle && otherSubmenu) {
                    otherSubmenu.style.display = 'none'; // Alt menüyü kapat
                    otherToggle.querySelector('.arrow')?.classList.remove('up'); // Ok işaretini sıfırla
                }
            });

            // Tıklanan menünün alt menüsünü aç/kapat
            const submenu = toggle.nextElementSibling;
            const arrow = toggle.querySelector('.arrow');
            const isVisible = submenu.style.display === 'block';

            submenu.style.display = isVisible ? 'none' : 'block';
            if (arrow) {
                arrow.classList.toggle('up', !isVisible); // Ok işaretini güncelle
            }
        });
    });

    // Kullanıcı adını ayarla
    const username = 'E*** A***'; // Kullanıcı adını burada değiştirin
    document.getElementById('user-name').textContent = `Hoş geldiniz, ${username}`;

    // Rezervasyon alma linkine tıklama olayı
    document.getElementById('reservation-link')?.addEventListener('click', (event) => {
        event.preventDefault(); // Varsayılan davranışı engelle
        showReservationForm();
    });

    // Ders programı linkine tıklama olayı
    document.getElementById('course-schedule-link')?.addEventListener('click', (event) => {
        event.preventDefault(); // Varsayılan davranışı engelle
        showCourseSchedule();
    });

    // Notları gösterme linkine tıklama olayı
    document.getElementById('notes-link')?.addEventListener('click', (event) => {
        event.preventDefault(); // Varsayılan davranışı engelle
        showNotes();
    });
});

// Rezervasyon formunu gösterme fonksiyonu
function showReservationForm() {
    toggleVisibility('reservation-form', true);
}

// Ders programını gösterme fonksiyonu
function showCourseSchedule() {
    toggleVisibility('course-schedule', true);
}

// Notları gösterme fonksiyonu
function showNotes() {
    toggleVisibility('notes', true);
}

// Görünürlük değiştirme fonksiyonu
function toggleVisibility(elementId, show) {
    const elementsToHide = ['reservation-form', 'course-schedule', 'notes', 'welcome-message'];
    
    document.getElementById(elementId).style.display = show ? 'block' : 'none';
    
    elementsToHide.forEach(id => {
        if (id !== elementId) {
            document.getElementById(id).style.display = 'none';
        }
    });
}
