<template>
  <contact-form mode="update" :contact="contact" />
</template>

<script>
import ContactForm from "./ContactForm";

export default {
  name: "updateContact",
  components: { ContactForm },
  props: ["contact"]
};
</script>