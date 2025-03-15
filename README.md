# Ruban.JS

**Ruban.JS** is a lightweight, small, and simple helper library designed to make modern web development easier. It provides shortcuts for common tasks like HTTP requests (GET, POST) and other utilities, all while keeping your project lightweight and fast.

---

## Features ✨

- **Lightweight**: Ruban.JS is incredibly small in size, making it perfect for performance-focused projects.
- **HTTP Shortcuts**: Simplify your HTTP requests with built-in shortcuts for GET and POST methods.
- **Easy to Use**: Designed with simplicity in mind, Ruban.JS is easy to integrate and use in any project.
- **Modern**: Built for modern JavaScript and web development practices.

---

## Installation 📦

You can install Ruban.JS by downloading the library directly.

---

## Usage 🚀

// GET request
Ruban.get({ url: 'https://jsonplaceholder.typicode.com/posts' })
    .then(response => console.log(response))
    .catch(error => console.error(error));

// POST request

Ruban.form('myFormID').post({
  url: 'https://jsonplaceholder.typicode.com/posts',
  data: {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }
})
.then(response => console.log(response))
.catch(error => console.error(error));
