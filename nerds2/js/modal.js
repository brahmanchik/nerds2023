const modal = document.querySelector('.modal');
const contactsBtn = document.querySelector('.contacts-button');
const modalClose = document.querySelector('.close');
const login = modal.querySelector('[name=login]');
const form = modal.querySelector('form');
const email = modal.querySelector('[name=email]');
const storage = localStorage.getItem('login');


contactsBtn.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal-show');
  login.focus();
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
})

modalClose.addEventListener ('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal-show');
  modal.classList.remove('modal-error');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (modal.classList.contains('modal-show')) {
      evt.preventDefault();
      modal.classList.remove('modal-show');
    }
  }
});

form.addEventListener('submit', function(evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    modal.classList.add('modal-error');
  }
});
