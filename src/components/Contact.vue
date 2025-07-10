<template>
  <div>
    <div class="container flex-column">
      <div class="text-center mb-5">
        <h1>Contact Us</h1>
        <p class="lead text-muted">
          Have a question, feedback, or partnership idea? We’d love to hear from
          you.
        </p>
      </div>

      <div class="row">
        <!-- Contact Info -->
        <div class="col-md-6">
          <h4>Get in Touch</h4>
          <p><strong>Email:</strong> contact@myblog.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p>
            <strong>Address:</strong> 123 Blog Street, Content City, Blogland
          </p>
          <p>
            You can also reach out on social media:
            <br />
            <a href="#" class="text-decoration-none me-2">Facebook</a>
            <a href="#" class="text-decoration-none me-2">Twitter</a>
            <a href="#" class="text-decoration-none">Instagram</a>
          </p>
        </div>

        <!-- Contact Form -->
        <div class="col-md-6">
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Your Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Full name"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Your Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="email@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Your Message</label>
              <textarea
                class="form-control"
                id="message"
                rows="5"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/style/variable.scss";
.container {
  padding: 90px 20px;

  button {
    background-color: $secondary-font;
    border: none;
  }
  a {
    color: $secondary-font;
  }
}
</style>
