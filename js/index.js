const apiUrl = 'http://localhost:3000/api/workexperience'; // Byt ut till din publicerade URL sen

fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('work-list');
    data.forEach(item => {
      // Formatera datumen
      const start = new Date(item.startdate).toLocaleDateString("sv-SE");
      const end = new Date(item.enddate).toLocaleDateString("sv-SE");

      // Skapa list-elementet
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${item.companyname}</strong> - ${item.jobtitle} (${start} till ${end})<br>
        ${item.description}
      `;

      // Skapa och lägg till delete-knappen
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Radera';
      deleteBtn.style.marginLeft = '10px';
      deleteBtn.addEventListener('click', async () => {
        if (confirm('Är du säker på att du vill radera posten?')) {
          await fetch(`${apiUrl}/${item.id}`, {
            method: 'DELETE'
          });
          location.reload(); // Ladda om listan
        }
      });

      li.appendChild(deleteBtn);
      list.appendChild(li);
    });
  })
  .catch(err => console.error('Fel vid hämtning:', err));
