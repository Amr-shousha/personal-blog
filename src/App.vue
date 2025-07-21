<script setup>
import Search from "./components/Search.vue";
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/" active-class="active">
          <img class="home-icon" src="./assets/imgs/icons/facicon.svg" alt="" />
        </router-link>

        <!-- Mobile toggler button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Collapsible menu -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li
              class="nav-item d-flex flex-column justify-content-center align-items-center"
            >
              <Search />
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about" active-class="active">
                About
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/blog" active-class="active">
                Articles
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/author" active-class="active">
                Authors
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact" active-class="active">
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="d-flex flex-column">
      <router-view />
    </main>
    <footer class="footer py-1">
      <div class="container">
        <div class="footer-content">
          <!-- About Section -->
          <div class="footer-section about">
            <h3>About This Blog</h3>
            <p>
              Welcome to our blog — your place to find articles, stories, and
              insights on tech, travel, and lifestyle.
            </p>
          </div>

          <!-- Categories -->
          <div class="footer-section categories">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Tech</a></li>
              <li><a href="#">Travel</a></li>
              <li><a href="#">Lifestyle</a></li>
              <li><a href="#">Tutorials</a></li>
            </ul>
          </div>

          <!-- Social Links -->
          <div class="footer-section social">
            <h3>Follow Us</h3>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>

        <hr class="footer-divider" />

        <p class="footer-copy">&copy; 2025 MyBlog. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/style/variable.scss";
main {
  padding-top: 60px;
}
.navbar {
  background-color: #000000;
  box-shadow: 0 30px 100px rgb(0, 0, 0);

  .home-icon {
    width: 30px !important;
  }
}
.nav-link {
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #910000;
  }
  .active {
    color: $secondary-font;
    font-weight: bold;
  }
}
.footer {
  background-color: #000000;
  padding: 15px 0px;

  .footer-content {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    padding: 20px 0;
  }

  .footer-section {
    &.about {
      flex: 1 1 250px;
    }

    &.categories,
    &.social {
      flex: 1 1 150px;
    }

    h3 {
      color: $primary-font;
    }
    p,
    ul,
    a {
      color: #646464;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 6px;
      }
    }

    a {
      text-decoration: none;
      display: block;
      transition: all 0.5s ease-in-out;
      &:hover {
        color: #690101;
      }
      &:active {
        color: $secondary-font;
      }
    }
  }
}
</style>
