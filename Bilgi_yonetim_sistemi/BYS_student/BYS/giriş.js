document.addEventListener("DOMContentLoaded", function () {
    const studentTab = document.getElementById("student-tab");
    const staffTab = document.getElementById("staff-tab");
    const usernameField = document.getElementById("username");
    const loginForm = document.getElementById('login-form');

    // Başlangıçta öğrenci formunun aktif olmasını sağla
    studentTab.classList.add("active");
    staffTab.classList.remove("active");
    usernameField.placeholder = "Öğrenci Numarası";

    // Giriş işlemi
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Formun sayfayı yenilemesini engeller

        const username = usernameField.value;
        const password = document.getElementById('password').value;

        // Basit kimlik doğrulama
        if (username === '426939' && password === '09048') {
            // Kullanıcı bilgilerini URL ile panel sayfasına gönder
            window.location.href = `panel.html?username=${encodeURIComponent(username)}`;
        } else {
            alert('Hatalı kullanıcı adı veya şifre!');
        }
    });

    // Öğrenci ve personel tab'ları arasında geçiş
    studentTab.addEventListener("click", function () {
        studentTab.classList.add("active");
        staffTab.classList.remove("active");
        usernameField.placeholder = "Öğrenci Numarası";
    });

    staffTab.addEventListener("click", function () {
        staffTab.classList.add("active");
        studentTab.classList.remove("active");
        usernameField.placeholder = "Kullanıcı Adı";
    });
});





