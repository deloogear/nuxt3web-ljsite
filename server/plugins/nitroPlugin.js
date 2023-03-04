export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
        // 页面添加附加内容
      html.bodyAppend.push('<div style="display: none;"><script src="https://s4.cnzz.com/z_stat.php"></script></div>');
    //   此处可以处理去除__NUXT__ 对象  //Todo
    })
  })