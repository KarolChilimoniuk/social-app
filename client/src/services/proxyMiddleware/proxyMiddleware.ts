import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = (app: any) => {
  app.use(
    createProxyMiddleware("/auth/signUp", {
      target: "http://localhost:4000",
      changeOrigin: true,
    })
  );
};
