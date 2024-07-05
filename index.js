document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn');
    btn.addEventListener('mouseenter', function() {
      btn.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.5)";
    });
    btn.addEventListener('mouseleave', function() {
      btn.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0)";
    });
  });
  


  let son=("XushKelipsiz");
  alert (son);