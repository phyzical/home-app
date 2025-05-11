<template>
  <div class="page contact-me uk-container">
    <div class="sign uk-text-center">
      <span class="sign-1">Contact</span>
      <span class="sign-2"> Me</span>
    </div>
    <div class="content form">
      <contact-form />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ContactForm: () => import('../components/forms/ContactForm.vue')
  }
}
</script>
