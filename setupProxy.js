const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://dylan-nodeapi-production.up.railway.app/",
      changeOrigin: true,
    })
  );
};
