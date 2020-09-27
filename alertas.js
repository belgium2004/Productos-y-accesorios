Swal.fire({
    imageUrl: 'https://fotografias.lasexta.com/clipping/cmsimages02/2013/11/25/947DC682-D79E-450E-A22D-15F77CB7661B/58.jpg',
  imageHeight: 200,
  imageWidth: 300,
  
    title: '<div class="hola">Bienvenido a los mejores productos</div>',
    footer: 'Espero te guste este sitio web con mucho gusto',
    timerProgressBar:true,
    timer:'70000',
    allowEnterKey:false,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonColor:'Bamonos de aqui',
    keydownListenerCapture:false,
    confirmButtonText: `Siguiente`,
    denyButtonText: `No quiero continuar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Listo continuemos', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('  <div class="hola">Tranquilo si quieres no continues</div>', '   <a id="fuera" href="https://www.google.es/">Si quieres no continues click aqui en este mensaje para irte</a>', 'info')
    }
  })