const container = document.querySelector('.main');
console.log(container);

if (container) {
  container.addEventListener('click', async (event) => {
    if (event.target.classList.contains('btnFav')) {
      const card = event.target.closest('.recipeItem');

      const { id } = card.dataset;

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
