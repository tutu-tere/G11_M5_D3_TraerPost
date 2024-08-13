//Se agrega un evento click al botón para iniciar la solicitud.
document.getElementById('fetchPosts').addEventListener('click', async () => {
  const postsList = document.getElementById('postsList');
  postsList.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos

  //Se utiliza fetch con async-await para realizar la solicitud a la API.
  //Se maneja los posibles errores con try-catch.
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
          throw new Error('Error en la solicitud');
      }
      const posts = await response.json();

      posts.forEach(post => {
          const listItem = document.createElement('li');
          listItem.textContent = `${post.title}: ${post.body}`;
          postsList.appendChild(listItem);
      });
  } catch (error) {
      console.error('Error al traer los posts:', error);
      const errorItem = document.createElement('li');
      errorItem.textContent = 'Error al traer los posts. Inténtalo de nuevo más tarde.';
      postsList.appendChild(errorItem);
  }
});
