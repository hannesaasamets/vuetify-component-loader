module.exports = {
  chainWebpack: config => {
    config.plugin('VuetifyLoaderPlugin').tap(args => [{
      match (originalTag, { kebabTag, camelTag, path, component }) {
        if (kebabTag.startsWith('hello-')) {
          return [camelTag, `import ${camelTag} from '@/components/${camelTag}.vue'`]
        }
      }
    }])
  },
  transpileDependencies: [
    'vuetify'
  ]
}
