const apiUrl = 'http://localhost:3000/api/workexperience'; // byta ut sen om jag lyckas med publicering till render

fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('work-list');
    data.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${item.companyname}</strong> - ${item.jobtitle} (${item.startdate} till ${item.enddate})<br>
        ${item.description}
      `;
      list.appendChild(li);
    });
  })
  .catch(err => console.error('Fel vid hämtning:', err));