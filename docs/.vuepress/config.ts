import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "运维工程狮笔记",
  description: "用技术实现自己的梦想。",

  base: "/",

  theme,
});
