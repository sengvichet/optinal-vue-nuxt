<template>
  <footer class="footer">
    <div class="wrap">
            <ul>
                <li>Scimitar.io</li>
                <li><nuxt-link to="/products">Products</nuxt-link></li>
                <li><nuxt-link to="/you-build">You Build</nuxt-link></li>
                <li><nuxt-link to="/we-build">We Build</nuxt-link></li>
                <li><nuxt-link to="/web-hosting">Web Hosting</nuxt-link></li>
                <li><nuxt-link to="/wordpress-hosting">WordPress Hosting</nuxt-link></li>
                <li><nuxt-link to="/posts">Blog</nuxt-link></li>
            </ul>
    </div>
    </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>


<style scoped>

footer {
  font: inherit;
  background: rgba(28, 27, 32, 1);
  color: rgba(244, 244, 255, 0.64);
  padding:  2rem 0;
}
footer ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    list-style: none;
    font-size: 1.2rem;
    padding: 0;
}

footer ul li {
    margin-bottom: 1rem;
}
footer ul li:last-child {
    margin-bottom: 0;
}
footer a {
   color: #1DB58E;
   -moz-transition: color .2s ease-in-out,border-bottom-color .2s ease-in-out;
   -webkit-transition: color .2s ease-in-out,border-bottom-color .2s ease-in-out;
    -ms-transition: color .2s ease-in-out,border-bottom-color .2s ease-in-out;
    transition: color .2s ease-in-out,border-bottom-color .2s ease-in-out;
    border-bottom: 1px dotted;
    color: inherit;
    text-decoration: none;
}

footer a:hover,
footer a:active,
footer a.nuxt-link-active {
  color: #1DB58E;
  background: none;
  border-bottom-color: transparent;
}

@media (min-width: 768px) {

footer {
padding:  4rem 0;
letter-spacing: 0.4px;
}

footer ul {
    display: flex;
    flex-direction: row;
    margin: 0;
    list-style: none;
    font-size: 1.2rem;
}
footer ul li {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-bottom: 0;
}

footer ul li:last-child {
    padding-right: 0;
}

footer ul li:first-child { 
    padding-left: 0;
}
}
</style>
