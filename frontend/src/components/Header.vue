<template>
  <header id="header">
    <nav id="navigation">
      <ul class="navigation__items">
        <li class="navigation__item">
          <a href="#" class="navigation__link active">Home</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">About</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Features</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Download</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  // props: {
  //   msg: String
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
  background-color: rgb(178, 34, 34);
  color: gainsboro;
  height: 100vh;
}
#navigation {
  background-color: #292929;
}
.navigation__items {
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  list-style: none;
  margin: 0;
}
.navigation__link {
  display: block;
  color: gainsboro;
  padding: 20px 10px;
  text-decoration: none;
}
.navigation__link:hover {
  background-color: #3d3d3d;
}
.navigation__link.active {
  background: linear-gradient(
    0deg,
    rgba(178, 34, 34, 1) 15%,
    rgba(41, 41, 41, 1) 100%
  );
}
</style>
