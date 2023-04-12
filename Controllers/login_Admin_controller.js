import { adminService } from '../Services/admins-service.js'

const formLogin = document.querySelector('[data-tipo="formLogin"]')

formLogin.addEventListener('submit', async (evento) => {
  evento.preventDefault();

  const email = document.querySelector('[data-tipo="email"]').value;
  const password = document.querySelector('[data-tipo="password"]').value;

  try {
    const admins = await adminService.adminList()

    admins.forEach(admin => {
      if (admin.email === email && admin.contraseña === password) {
        window.location.href = '../all_products_admin.html'
      } else {
        Swal.fire({
          title: 'No es administrador',
          text: 'Comuníquese con su administrador para obtener acceso',
          icon: 'error',
          confirmButtonText: 'Continuar'
        }).then(() => {
          window.location.href = '../login.html'
        })
      }
    })
  } catch (error) {
    Swal.fire({
      title: 'Hubo un error!!!',
      text: 'Se produjo un error. Intente más tarde',
      icon: 'error',
      confirmButtonText: 'Continuar'
    }).then(() => {
      window.location.href = './index.html'
    })
  }
})