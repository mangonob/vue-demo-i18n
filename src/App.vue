<template>
  <div id="app">
    <Space direction="vertical" align="end">
      <a-input :placeholder="usernameHint" />
      <a-input :placeholder="passwordHint" />
      <Space>
        <img :src="imageUrl" width="28" height="28" />
        <Button src>{{ $t("user.signup") }}</Button>
        <Button type="primary">{{ $t("user.login") }}</Button>
      </Space>
    </Space>
  </div>
</template>

<script>
import { Button, Space } from "ant-design-vue";
import i18n from "./i18n";

export default {
  name: "App",
  components: {
    Button,
    Space,
  },
  data: () => {
    return {
      imageUrl: i18n.t("user.image_url"),
      usernameHint: i18n.t("user.username_placeholder"),
      passwordHint: i18n.t("user.password_placeholder"),
    };
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  margin: 0;
  min-height: 100%;
  background-color: #f0f0f0;
}

.ant-space-item input {
  width: 240px;
}
</style>
