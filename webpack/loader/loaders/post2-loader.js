function loader(source) {
  console.log('post2-loader')
  return source + '//post2-loader'
}
loader.pitch = function () {
  console.log('post2-pitch')
}

module.exports = loader