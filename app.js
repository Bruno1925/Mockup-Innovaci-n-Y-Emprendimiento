// app.js

document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.getElementById('registroForm');

    if (registroForm) {
        registroForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que la página se recargue

            const btn = document.getElementById('btnRegistrar');
            const btnText = document.getElementById('btnText');
            const spinner = document.getElementById('btnSpinner');
            const toast = document.getElementById('successToast');

            // 1. Estado de Carga (Simulando petición AJAX)
            btn.disabled = true;
            btn.classList.add('opacity-75', 'cursor-not-allowed');
            btnText.innerText = "Procesando Registro...";
            spinner.classList.remove('hidden');

            // 2. Esperar 2 segundos para simular latencia de red en Django
            setTimeout(() => {
                // Restaurar botón
                btnText.innerText = "Registrar Pyme";
                spinner.classList.add('hidden');
                btn.disabled = false;
                btn.classList.remove('opacity-75', 'cursor-not-allowed');
                
                // Mostrar alerta de éxito nativa
                toast.classList.remove('hidden');

                // 3. Esperar 3 segundos para redirigir al Dashboard
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 3000);

            }, 2000);
        });
    }
});