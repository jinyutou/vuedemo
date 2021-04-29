<template>
  <div id="login">
    <lottie
      :options="defaultOptions"
      :height="60"
      :width="1242"
      v-on:animCreated="handleAnimation"
    />
    <div>
      <p>Speed: x{{ animationSpeed }}</p>
      <input
        type="range"
        value="1"
        min="0"
        max="3"
        step="0.5"
        v-on:change="onSpeedChange"
        v-model="animationSpeed"
      />
    </div>
    <button v-on:click="stop">stop</button>
    <button v-on:click="pause">pause</button>
    <button v-on:click="play">play</button>
    <el-row>
      <el-button @click="toMain">Element 登录</el-button>
    </el-row>
    <button type="button" class="layui-btn" @click="toMain">Layui 登录</button>
  </div>
</template>
<script>
import * as animationData from "../assets/lottie/antrun.json";
export default {
  name: "login",
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1,
    };
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },

    stop: function () {
      this.anim.stop();
    },

    play: function () {
      this.anim.play();
    },

    pause: function () {
      this.anim.pause();
    },

    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
    },
    toMain() {
      this.$message("登录跳转");
      this.$router.push({
        path: "/Main",
      });
    },
  },
};
</script>