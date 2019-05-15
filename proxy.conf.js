const PROXY_CONFIG = [{
  context: ["/api1"],
  target: "http://localhost:3000",
  secure: false,
  logLevel: "debug",
  changeOrigin: false
}, {
  context: ["/api2"],
  target: "http://localhost:3001",
  secure: false,
  logLevel: "debug",
  changeOrigin: false
}];
module.exports = PROXY_CONFIG;
