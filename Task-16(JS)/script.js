const buttons = document.querySelectorAll('.btn');
const icons = document.querySelectorAll('.btn_icon');
const statuses = document.querySelectorAll('.btn_status');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('darkmode');
    icons[index].classList.add('animated');

    if (btn.classList.contains('darkmode')) {
      icons[index].classList.remove('fa-face-smile');
      icons[index].classList.add('fa-face-frown');
      statuses[index].textContent = 'on';
    } else {
      icons[index].classList.remove('fa-face-frown');
      icons[index].classList.add('fa-face-smile');
      statuses[index].textContent = 'off';
    }

    
  });
});
