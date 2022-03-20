const counterEl = document.querySelectorAll('.counter');

counterEl.forEach((e) => {
    console.log(e.getAttribute('data-target'));
})