document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
});

document.addEventListener('click', async (e) => {
  const payload = { x: 1, y: 2 };

  switch  (e.target.id) {
    case 'result':
      const response = await fetch('http://localhost:8080/api/add', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const res = await response.json();
      console.log('response', res);
      break;
    default:
      break;
  }
});
