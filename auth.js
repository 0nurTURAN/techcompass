// auth.js
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ── DOM refs ──────────────────────────────────────────────
const modal         = document.getElementById("authModal");
const modalOverlay  = document.getElementById("modalOverlay");
const closeModalBtn = document.getElementById("closeModal");
const loginForm     = document.getElementById("loginForm");
const signupForm    = document.getElementById("signupForm");
const tabLogin      = document.getElementById("tabLogin");
const tabSignup     = document.getElementById("tabSignup");
const authMessage   = document.getElementById("authMessage");

const loginEmail    = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const signupEmail   = document.getElementById("signupEmail");
const signupPassword= document.getElementById("signupPassword");
const signupConfirm = document.getElementById("signupConfirm");

const openModalBtn  = document.getElementById("openAuthModal");   // "Giriş Yap" button in header
const userInfo      = document.getElementById("userInfo");         // shown when logged in
const userEmailSpan = document.getElementById("userEmailDisplay");
const logoutBtn     = document.getElementById("logoutBtn");

// ── Helpers ───────────────────────────────────────────────
function showMessage(msg, isError = true) {
  authMessage.textContent = msg;
  authMessage.className = "auth-message " + (isError ? "error" : "success");
  authMessage.style.display = "block";
}

function clearMessage() {
  authMessage.style.display = "none";
  authMessage.textContent = "";
}

function openModal(tab = "login") {
  modal.classList.add("active");
  modalOverlay.classList.add("active");
  switchTab(tab);
  clearMessage();
}

function closeModal() {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
  clearMessage();
}

function switchTab(tab) {
  clearMessage();
  if (tab === "login") {
    loginForm.style.display  = "flex";
    signupForm.style.display = "none";
    tabLogin.classList.add("active");
    tabSignup.classList.remove("active");
  } else {
    loginForm.style.display  = "none";
    signupForm.style.display = "flex";
    tabSignup.classList.add("active");
    tabLogin.classList.remove("active");
  }
}

// ── Auth state ────────────────────────────────────────────
onAuthStateChanged(auth, (user) => {
  if (user) {
    openModalBtn.style.display  = "none";
    userInfo.style.display      = "flex";
    userEmailSpan.textContent   = user.email;
    document.getElementById("userAvatar").textContent = user.email[0].toUpperCase(); // ← add this
    closeModal();
  } else {
    openModalBtn.style.display = "inline-flex";
    userInfo.style.display     = "none";
  }
});

// ── Event listeners ───────────────────────────────────────
openModalBtn.addEventListener("click", () => openModal("login"));
closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
tabLogin.addEventListener("click",  () => switchTab("login"));
tabSignup.addEventListener("click", () => switchTab("signup"));

// Keyboard close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Login
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearMessage();
  const btn = loginForm.querySelector("button[type=submit]");
  btn.disabled = true;
  btn.textContent = "Giriş yapılıyor...";
  try {
    await signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value);
    // onAuthStateChanged handles the rest
  } catch (err) {
    showMessage(friendlyError(err.code));
    btn.disabled = false;
    btn.textContent = "Giriş Yap";
  }
});

// Sign Up
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearMessage();
  if (signupPassword.value !== signupConfirm.value) {
    showMessage("Şifreler eşleşmiyor.");
    return;
  }
  if (signupPassword.value.length < 6) {
    showMessage("Şifre en az 6 karakter olmalıdır.");
    return;
  }
  const btn = signupForm.querySelector("button[type=submit]");
  btn.disabled = true;
  btn.textContent = "Kayıt olunuyor...";
  try {
    await createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value);
  } catch (err) {
    showMessage(friendlyError(err.code));
    btn.disabled = false;
    btn.textContent = "Kayıt Ol";
  }
});

// Forgot password
document.getElementById("forgotPassword").addEventListener("click", async () => {
  const email = loginEmail.value.trim();
  if (!email) { showMessage("Lütfen önce e-posta adresinizi girin."); return; }
  try {
    await sendPasswordResetEmail(auth, email);
    showMessage("Şifre sıfırlama e-postası gönderildi!", false);
  } catch (err) {
    showMessage(friendlyError(err.code));
  }
});

// Logout
logoutBtn.addEventListener("click", () => signOut(auth));

// ── Friendly Turkish error messages ──────────────────────
function friendlyError(code) {
  const map = {
    "auth/email-already-in-use":   "Bu e-posta adresi zaten kullanılıyor.",
    "auth/invalid-email":          "Geçersiz e-posta adresi.",
    "auth/weak-password":          "Şifre çok zayıf. En az 6 karakter kullanın.",
    "auth/user-not-found":         "Bu e-posta ile kayıtlı kullanıcı bulunamadı.",
    "auth/wrong-password":         "Hatalı şifre. Tekrar deneyin.",
    "auth/invalid-credential":     "E-posta veya şifre hatalı.",
    "auth/too-many-requests":      "Çok fazla deneme. Lütfen biraz bekleyin.",
    "auth/network-request-failed": "Bağlantı hatası. İnternetinizi kontrol edin.",
  };
  return map[code] || "Bir hata oluştu. Lütfen tekrar deneyin.";
}
