<template lang="pug">
  main.profile
    .u-container.mod-small
      Head(tag="h1" label="CONTACT" align="center")
      ValidationObserver(v-slot="{invalid}" ref="form")
        transition(name="TopToDown" tag="div" )
          .form(v-if="phase === 1")
            .form_row
              Input(v-model="form.name" @on-update="form.name = $event" label="Name" rules="required")
            .form_row
              Input(v-model="form.email" @on-update="form.email = $event" label="Email" rules="required|email")
            .form_row
              Input(v-model="form.tel" @on-update="form.tel = $event" label="Tel" rules="numeric|max:11")
            .form_row
              Textarea(v-model="form.message" @on-update="form.message = $event" label="Message" rules="required")
            .form_row.u-mt--2.u-text-center
              Button(label="Confirm" @click="confirm" :disabled="invalid")

        transition(name="TopToDown" tag="div" )
          .form(v-if="phase === 2")
            pre {{ form }}
            .form_row.u-mt--2.u-text-center
              Button(label="Back" @click="setPhase(1)" :disabled="invalid")
              Button(label="Submit" @click="submit" :disabled="invalid")

        transition(name="TopToDown" tag="div" )
          .form(v-if="phase === 3")
            p 
              | お問い合わせありがとうございました！
              span Thank You!
            .form_row.u-mt--2.u-text-center
              nuxt-link(to="/")
                Button(label="Top")

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      form: {
        name: 'null',
        tel: '09809098',
        email: 'null@aoda.com',
        message: 'null'
      },
      phase: 1
    }
  },
  methods: {
    async confirm() {
      const form = this.$refs.form
      const valid = await form.validate()
      if (!valid) return false
      this.phase = 2
      this.setPhase(2)
    },
    async submit() {
      const form = this.$refs.form
      const valid = await form.validate()
      if (!valid) return false
      try {
        const res = await this.$axios.post(
          process.env.NETLIFY_URL + '/sendMail',
          this.form
        )
        this.setPhase(3)
      } catch (e) {}
    },
    setPhase(num: number) {
      this.phase = num
    }
  }
})
</script>

<style lang="scss" scoped></style>
