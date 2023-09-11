const refs = {
  burgerIcon: document.querySelector('.burger-icon'),
  closeIcon: document.querySelector('.icon-x'),
  modalmenu: document.querySelector('.modal-menu'),
  body: document.querySelector('body')
};

refs.burgerIcon.addEventListener('click', () => {
  refs.modalmenu.classList.remove('is-hidden');
  refs.body.style.overflow='hidden'
});

refs.closeIcon.addEventListener('click', () => {
  refs.modalmenu.classList.add('is-hidden');
  refs.body.style.overflow = 'scroll';
});
