// =========================================
// 1. DATA LOGIN (Ganti sesuai keinginan)
// =========================================
const VALID_USER = "admin";
const VALID_PASS = "12345";

// =========================================
// 2. FUNGSI LOGIN
// =========================================
function handleLogin() {
    const userInp = document.getElementById('username').value;
    const passInp = document.getElementById('password').value;
    const errorMsg = document.getElementById('login-error');
    const loginPage = document.getElementById('login-page');
    const mainApp = document.getElementById('main-app');
    const displayUser = document.getElementById('display-user');

    if (userInp === VALID_USER && passInp === VALID_PASS) {
        // Sembunyikan login, tampilkan aplikasi materi
        loginPage.style.display = 'none';
        mainApp.style.display = 'block';
        
        // Tampilkan nama di header
        if (displayUser) {
            displayUser.innerHTML = `<i class="fas fa-user-circle"></i> ${userInp}`;
        }
        
        // Tampilkan beranda secara otomatis
        showContent('home');
        errorMsg.style.display = 'none';
    } else {
        // Tampilkan pesan error
        errorMsg.style.display = 'block';
        errorMsg.innerHTML = '<i class="fas fa-exclamation-circle"></i> Username atau Password salah!';
    }
}

// =========================================
// 3. FUNGSI LOGOUT
// =========================================
function handleLogout() {
    if (confirm("Apakah Anda yakin ingin keluar dari sistem?")) {
        // Segarkan halaman untuk kembali ke posisi login awal
        location.reload();
    }
}

// =========================================
// 4. FUNGSI NAVIGASI MATERI (Pindah Halaman)
// =========================================
function showContent(sectionId) {
    // 1. Sembunyikan semua section materi
    const sections = document.querySelectorAll('.materi-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // 2. Tampilkan section yang dipilih (misal p1, p2, dll)
    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = 'block';
    }

    // 3. Update warna tombol menu (Active State)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        // Cari link yang punya fungsi onclick ke sectionId tersebut
        if (link.getAttribute('onclick').includes(sectionId)) {
            link.classList.add('active');
        }
    });

    // Scroll ke atas otomatis
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// =========================================
// 5. FITUR TAMBAHAN (Enter untuk Login)
// =========================================
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const loginPage = document.getElementById('login-page');
        // Hanya jalankan jika user masih berada di halaman login
        if (loginPage && loginPage.style.display !== 'none') {
            handleLogin();
        }
    }
});