const container = document.querySelector('.main');
console.log(container);

if (container) {
  container.addEventListener('click', async (event) => {
    if (event.target.classList.contains('btnFav')) {
      const card = event.target.closest('.recipeItem');
      console.log(card);
      const { id } = card.dataset;
      console.log(id, '2222');
      const res = await fetch(`/api/recipe/`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          id,
          //   name: card.name,
        }),
      });
    }
  });
}
