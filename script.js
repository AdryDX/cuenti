// detectar orientacion
        // Función para detectar orientación
        function checkOrientation() {
            const height = window.innerHeight;
            const width = window.innerWidth;
            let orientation;

            if (height > width) {
                orientation = 'P';
            } else {
                orientation = 'L';
            }
            console.log(orientation);
            return orientation;
        }

        // Función para mostrar u ocultar el mensaje según la orientación
        function mostrarMensajeGirar() {
            const mensajeGirar = document.getElementById('mensaje-girar');
            const orientation = checkOrientation();

            if (orientation === 'P') {
                mensajeGirar.style.opacity = '1'; // Orientación vertical (P)
                mensajeGirar.style.visibility = 'visible';
            } else {
                mensajeGirar.style.opacity = '0'; // Orientación horizontal (L)
                // Este timeout asegura que el mensaje se oculte después de que la transición haya terminado
                setTimeout(() => {
                    if (mensajeGirar.style.opacity === '0') {
                        mensajeGirar.style.visibility = 'hidden';
                    }
                }, 500); // El tiempo de espera debe ser igual a la duración de tu transición (en milisegundos)
            }
        }

        // Detectar al cargar
        window.addEventListener('DOMContentLoaded', (event) => {
            mostrarMensajeGirar();
        });

        // Volver a detectar al cambiar tamaño
        window.addEventListener('resize', mostrarMensajeGirar);

        // Agregar un controlador de evento para cambios en la orientación
        window.addEventListener('orientationchange', mostrarMensajeGirar);


// pantalla completa



