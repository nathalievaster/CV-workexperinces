const form = document.getElementById('work-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  try {
    const res = await fetch('http://localhost:3000/api/workexperience', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error('Något gick fel');

    alert('Posten sparades!');
    form.reset();
  } catch (err) {
    alert('Fel: ' + err.message);
  }
});