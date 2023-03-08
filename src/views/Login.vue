<template>
  <div>
    <h1>Login</h1>
    <BaseCard size="is-small">
      <BaseInput
        v-model="email"
        type="email"
        placeholder="e.g. bobsmith@gmail.com"
        required
        icon="envelope"
      />
      <BaseInput
        v-model="password"
        type="password"
        placeholder="*******"
        required
        icon="lock"
      />
      <BaseButton
        type="primary white"
        label="Login"
        button-type="submit"
        icon="arrow-right"
      />
    </BaseCard>

  </div>
</template>

<script>
import numberComponent from "../components/numberComponent";
export default {
  data() {
    return {
        email: "",
        password: "",
    };
  },
  components: {
    numberComponent
  }
};
</script>
