const usuarios = [
            { id: 1, nombre: "1234", contraseña: "1234", fechaVencimiento: "2024-12-01" },
           { id: 2, nombre: "12345", contraseña: "12345", fechaVencimiento: "2024-07-30" },
        
];

        document.getElementById('popupot-loginForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('popupot-username').value;
            const password = document.getElementById('popupot-password').value;
            const errorMessage = document.getElementById('popupot-error-message');
            const expirationDate = document.getElementById('popupot-expirationDate');

            const usuario = usuarios.find(user => user.nombre === username && user.contraseña === password);
            if (usuario) {
                const fechaVencimiento = new Date(usuario.fechaVencimiento);
                const fechaActual = new Date();

                if (fechaActual > fechaVencimiento) {
                    errorMessage.textContent = 'Usuario y contraseña han vencido';
                } else {
                    errorMessage.textContent = '';
                    expirationDate.textContent = `Bienvenid@ ${usuario.nombre} Fecha de vencimiento: ${fechaVencimiento.toLocaleDateString()}`;

                    setTimeout(() => {
                        document.getElementById('popupot-overlay').style.display = 'none';
                       
                    }, 3000);
                }
            } else {
                errorMessage.textContent = 'Usuario o contraseña incorrectos';
            }
        });

        window.onload = function() {
            document.getElementById('popupot-overlay').style.display = 'flex';
        };
