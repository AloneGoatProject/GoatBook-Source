# 给开发者

开发者您好！

现在目录结构大变样，请按照 [我](./name/name.md#me) 写好的 Markdown 文件进行编写。

- **不要使用老式的数字锚点**，请改为使用文字锚点，例如：`#me`。
- 编辑模式下花括号 `{}` 中的内容就是锚点（如 `{#me}`）。

## 各目录引用 `name` 文件的方法

| 目录            | 引用方案                                              |
|----------------|-------------------------------------------------------|
| `docs`（主目录） | `./name/name.md` 或 `./name/name_thing.md`           |
| `name`          | `name.md` 或 `name_thing.md`                         |
| `thing`         | `../name/name.md` 或 `../name/name_thing.md`          |
| `thing/history` | `../../name/name.md` 或 `../../name/name_thing.md`    |

> ⚠️ 注意：路径区分大小写，请勿使用中文或全角字符。

## 名词与对应锚点

| 名词             | 锚点           |
|------------------|----------------|
| 茕山羊           | `#goat`        |
| 我               | `#me`          |
| MDN              | `#mdn`         |
| 绿宝石           | `#emerald`     |
| 维多利亚         | `#wdly`        |
| COVD19           | `#codvi9`      |
| 蜃涟             | `#qsj`         |
| 马步芳（非真实） | `#creeper`     |
| 议会             | `#meeting`     |
| mumu             | `#mumu`        |
| 醉鸡王           | `#linbiao`     |
| MickyMomse       | `#mickymomse`  |
| 红树原木         | `#redwood`     |

## 注意事项

- **2025年8月4日 18:30**：[我](./name/name.md#mdn) 闲得没事干，加了个评论功能。
- **请务必避开每个文件末尾的 HTML 标签**（如 `<script>`、`<div id="giscus">` 等），以免破坏页面结构。

## 第三方组件许可证

### 1. `https://unpkg.com/oh-my-live2d@latest`
- 来源：[oh-my-live2d](https://github.com/oh-my-live2d/oh-my-live2d)
- 许可证：**MIT**

### 2. `live2d-widget`
- 来源：[stevenjoezhang/live2d-widget](https://github.com/stevenjoezhang/live2d-widget)
- 许可证：**GPL-3.0**
- 修改内容：添加了多模型配置设置

### 3. `https://cdn.plyr.io/3.7.8/plyr.js`
- 来源：[sampotts/plyr](https://github.com/sampotts/plyr)
- 许可证：**MIT**

### 4. GitHub Actions 工作流文件
- 路径：
  - `.github/workflows/auto-comment-pr.yml`
  - `.github/workflows/auto_request_review.yml`
  - `.github/workflows/automerge.yml`
  - `.github/reviewers.yml`
- 来源：[rocketmq-rust](https://github.com/mxsm/rocketmq-rust)
- 许可证：**MIT** 与 **Apache License 2.0**

<script src="/js/dist/autoload.js"></script>
<script>
// 页面加载完成后开始定期执行
window.addEventListener('load', () => {
  console.log("Live2D waifu script loaded.");
  updateWaifuStyle();
  setInterval(() => {
    console.log("running");
    updateWaifuStyle();
  }, 1000);
});
</script>

<div id="giscus"></div>
<script src="https://giscus.app/client.js"
        data-repo="nomdn/GoatBook-Source"
        data-repo-id="R_kgDOPXYjCw"
        data-category="General"
        data-category-id="DIC_kwDOPXYjC84Ctwim"
        data-mapping="title"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
</script>
