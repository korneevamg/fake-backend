var defaultTarget = 'http://api.bitcoincharts.com/';
module.exports = [
  {
    /**
     * @description FAKE BACKEND OPTION: Json-server and dynamic proxy. Proxy to fake backend on localhost if FAKE_BACKEND is true and to the real backend if not.
     */
    // More details on wildcard: https://github.com/chimurai/http-proxy-middleware/issues/103
    context: ['/v1/**', '/api/suggestion*'],
    target: process.env['FAKE_BACKEND']
      ? 'http://localhost:3000'
      : defaultTarget,
    secure: true,
    changeOrigin: true,
  },
];
