<template>
  <div id="page" class="grid no-row-gap">
    <NavBar />
    <div class="masthead">

    </div>
    <div class="content-container full-w">
      <Nuxt/>
    </div>
    <div class="page-footer">
      <div class="container grid grid-cols-3">
        <div class="footer-logo-space">
          <a href="https://www.bluebaytravel.co.uk" title="Blue Bay Travel">
            <img src="~/assets/img/bbt.webp" alt="Blue Bay Travel Logo" class="logo">
          </a>
          <address>
            Blue Bay Travel Ltd.<br>
            Some Street<br>
            Some Town<br>
            Some City<br>
            NO1 PST
          </address>
        </div>
      </div>
    </div>

    <AdminMenu/>
  </div>
</template>

<style>

</style>
<script>

export default {
  //
}
</script>
