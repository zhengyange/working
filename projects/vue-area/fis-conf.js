fis.set('project.ignore', [
  'src/**',
  'test/**',
  'index.html',
  'package.json',
  'README.md',
  'fis-conf.js'
]);
fis
.match(/\/dist\/.*html/i, {
    release: '/vue-area.html'
})
// .match('/\/dist\/static\/css\/.*css/i', {
// 	release: 'vue-area/static/css.css'
// })
// .match('**.js', {
// 	release: '/vue-area/static/js$0'
// });
fis.match('*', {
  deploy: fis.plugin('local-deliver', {
    to: './area'
  })
})