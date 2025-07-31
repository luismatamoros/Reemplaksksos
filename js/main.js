// Cargar mapa
const map = L.map('map').setView([9.75, -83.75], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Cargar datos
Promise.all([
  fetch('data/cencinai.json').then(res => res.json()),
  fetch('data/trabajadores.json').then(res => res.json())
]).then(([cencinai, trabajadores]) => {
  // Mostrar CENCINAI
  cencinai.forEach(c => {
    L.circleMarker([c.lat, c.lng], {
      radius: 8,
      color: 'blue',
      fillColor: 'blue',
      fillOpacity: 1
    }).addTo(map).bindPopup(`<b>${c.nombre}</b>`);
  });

  // Mostrar trabajadores
  const markers = [];
  trabajadores.forEach(t => {
    const color = t.activo ? 'gold' : 'black';
    const opacity = t.activo ? 1 : 0.4;
    const marker = L.circleMarker([t.lat, t.lng], {
      radius: 6,
      color,
      fillColor: color,
      fillOpacity: opacity
    }).addTo(map).bindPopup(
      `<b>${t.nombre}</b><br>Cédula: ${t.cedula}<br>Tel: ${t.telefono}<br>Email: ${t.email}<br>Puesto: ${t.puesto}`
    );
    if (t.activo) {
      marker.on('click', () => {
        map.setView([t.lat, t.lng], 10);
        trabajadores.filter(r =>
          !r.activo && r.puesto === t.puesto
        ).forEach(r => {
          const m = L.circleMarker([r.lat, r.lng], {
            radius: 6,
            color: 'black',
            fillColor: 'black',
            fillOpacity: 0.4
          }).addTo(map).bindPopup(
            `<b>${r.nombre}</b><br>Cédula: ${r.cedula}<br>Tel: ${r.telefono}<br>Email: ${r.email}<br>Puesto: ${r.puesto}`
          );
          m._path.classList.add('blinking');
          setTimeout(() => {
            if (m._path) m._path.classList.remove('blinking');
          }, 5000);
          markers.push(m);
        });
      });
    }
  });
});
