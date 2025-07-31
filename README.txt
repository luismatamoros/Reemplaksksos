INSTRUCCIONES PARA EJECUTAR EL PROTOTIPO DE KSK

Este prototipo muestra un mapa interactivo con CENCINAI y trabajadores activos/inactivos.

REQUISITOS:
- Tener Python instalado (versión 3.x recomendada)

PASOS PARA EJECUTAR LOCALMENTE:
1. Abre una terminal o consola en la carpeta donde descomprimiste este ZIP.
2. Ejecuta el siguiente comando:
   python -m http.server 8000
3. Abre tu navegador y visita:
   http://localhost:8000

PASOS PARA PUBLICAR EN GITHUB PAGES:
1. Crea un repositorio en GitHub (por ejemplo: ksk-prototipo)
2. Sube todos los archivos y carpetas de este ZIP.
3. Ve a Settings > Pages y selecciona la rama 'main' y carpeta raíz.
4. GitHub generará una URL pública para tu prototipo.

CONTENIDO:
- index.html: Página principal
- js/main.js: Lógica del mapa
- data/cencinai.json: Datos de CENCINAI
- data/trabajadores.json: Datos de trabajadores
