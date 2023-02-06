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
        size="full"
        type="primary white"
        label="Login"
        button-type="submit"
        icon="arrow-right"
      />
    </BaseCard>
    <!-- <h2>The numbers are {{ numbers }}!</h2> -->
    <numberComponent :numbers="numbers" />
    <span v-bind:title="message">
      Rê chuột lên đây một vài giây để xem thuộc tính `title` được bind!
    </span>

  </div>
</template>

<script>
import numberComponent from "../components/numberComponent";
export default {
  data() {
    return {
        numbers: [1, 2, 3],
        email: "",
        password: "",
        message: 'Bạn đã mở trang này vào ' + new Date().toLocaleString()
    };
  },
  components: {
    numberComponent
  }
};
</script>
