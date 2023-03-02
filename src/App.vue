<template>
  <div>{{ a.map(v => ({ num: v })) }}</div>
  <div v-text="b"></div>
  <div v-html="c"></div>
  <div v-if="d == 'd'">v-if 指令测试</div>
  <div v-else-if="d == 'D'">v-else-if 指令测试</div>
  <div v-else>v-else 指令测试</div>
  <div v-show="e">v-show 指令测试</div>
  <div @click="parentFn"><button @[event].stop="OnClickFn">测试按钮</button></div>
  <div :id="ids" :class="['a', 'b']">v-bind 指令测试</div>
  <div><input type="text" v-model="f"><div>{{ f }}</div></div>
  <div :key="index" v-for="(index, item) in g">{{ item }} - {{ index }}</div>
</template>

<script setup lang="ts">
// ref 可之间引入
import { ref } from 'vue'

const a: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const b: string = 'v-text 指令测试'
const c: string = "<section style='color: red'>v-html 指令测试</section>"
const d: string = 'd' //【可选】 d、D、!d
const e: Boolean = true
const event = 'click' //【可选】 单击：click、双击：dblclick
const parentFn = () => {
  console.log('我是父级');
}
const OnClickFn = () => {
  console.log('点击了测试按钮');
  console.log('.stop 阻止了冒泡事件');
}
const ids: string = "123"
const style = {
  backgroundcolor: 'red',
  fontsize: '16px'
}
const f = ref('v-model 指令测试')
const g: string[] = ["v-for", "指令测试"]
</script>

<style scoped>
.a {
  color: green
}

.b {
  color: blue
}
</style>
