;(window as any).onNuxtReady(() => {
  ;(function (f, a, t, h, o, m) {
    a[h] =
      a[h] ||
      function () {
        ;(a[h].q = a[h].q || []).push(arguments)
      }
    ;(o = f.createElement('script')), (m = f.getElementsByTagName('script')[0])
    o.async = 1
    o.src = t
    o.id = 'fathom-script'
    m.parentNode.insertBefore(o, m)
  })(document, window, '//analytics.geofind.io/tracker.js', 'fathom')
  const fathom = (window as any).fathom
  fathom('set', 'siteId', 'VEQCX')
  fathom('trackPageview')
})