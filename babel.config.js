module.exports = function (api) {

  api.cache(true)

  return {
    presets: [
      [
        '@babel/env', { loose: true }
      ],
      '@babel/preset-react'
    ]
  }

}
