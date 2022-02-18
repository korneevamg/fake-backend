var defaultTarget = 'http://api.bitcoincharts.com/';
module.exports = [
  {
    context: ['/v1/**'],
    target: defaultTarget,
    changeOrigin: true,
  },
  {
    context: ['/api/suggestion', '/v1/**'],
    target: process.env['FAKE_BACKEND']
      ? 'http://localhost:3000'
      : defaultTarget,
    secure: true,
    changeOrigin: true,
  },
];
