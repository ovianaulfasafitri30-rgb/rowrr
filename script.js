function nextPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

function resultMood(mood) {
  let message = '';

  if (mood === 'happy') {
    message = 'wahh bahagia sekali, aku turut bahagia, pertahankan terus senyum manismu itu ya!! 💖';
  } else if (mood === 'sad') {
    message = 'aku turut sedih mendengar itu, tapi jangan terlalu sedih terus ya, aku tau kamu bisa melewati hal ini 🤍';
  } else if (mood === 'angry') {
    message = 'wah aku juga turut kesal nihh 😠 tapi jangan keterusan marah ya, ga baikk, ayo kamu pasti bisa ngelewati ini, biarin aja kalau kayak begitu 💕';
  }
