const workName = document.querySelectorAll('[data-name ="work-name"]')

workName.forEach(function (item) {
   item.addEventListener('click', function () {
      this.nextElementSibling.classList.toggle('work-diskription-hidden')
   })
})
