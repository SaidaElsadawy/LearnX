// =====================================================
// 1) DARK / LIGHT MODE
// =====================================================

// نجيب زر تغيير الوضع
const themeBtn = document.getElementById("themeBtn");

// نجيب الـ body
const body = document.body;

// عند الضغط على الزر
themeBtn.addEventListener("click", function () {

  // إضافة أو إزالة light-mode
  body.classList.toggle("light-mode");

  // تغيير شكل الأيقونة
  if (body.classList.contains("light-mode")) {

    themeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';

  } else {

    themeBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';

  }

});


// =====================================================
// 2) SCROLL ANIMATION
// =====================================================

// نجيب كل العناصر التي تحتوي على reveal
const revealElements = document.querySelectorAll(".reveal");

// نراقب العناصر أثناء النزول في الصفحة
window.addEventListener("scroll", function () {

  revealElements.forEach(function (element) {

    // مكان العنصر بالنسبة للشاشة
    const elementTop = element.getBoundingClientRect().top;

    // إذا دخل العنصر داخل الشاشة
    if (elementTop < window.innerHeight - 80) {

      element.classList.add("show");

    }

  });

});


// تشغيل الأنيميشن أول مرة عند فتح الصفحة
window.dispatchEvent(new Event("scroll"));


// =====================================================
// 3) تغيير الـ Theme عند تحميل الصفحة
// =====================================================

// لو حبيتي تحفظي الوضع في LocalStorage
// يمكن إضافة الكود هنا لاحقًا.
// تركناه بسيطًا حاليًا حتى يكون سهل الفهم.
