<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">QSL</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link to="/home" class="nav-link active" aria-current="page">Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/product" class="nav-link">Product</router-link>
                </li>
              </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default ({
    name: 'NavBarComponent',
})
</script>

<style></style>