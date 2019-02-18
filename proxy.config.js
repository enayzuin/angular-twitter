const proxy = [
    {
      context: '/sendMessage',
      target: 'http://localhost:8080',
      pathRewrite: {'^/sendMessage' : ''}
    }
  ];

  module.exports = proxy;