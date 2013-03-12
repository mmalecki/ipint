var a = 256,
    b = 256 * 256,
    c = 256 * 256 * 256;

exports.ipToInt = function (ip) {
  ip = ip.split('.');
  return (c * parseInt(ip[0], 10)) +
         (b * parseInt(ip[1], 10)) +
         (a * parseInt(ip[2], 10)) +
         parseInt(ip[3]);
};

exports.intToIp = function (int) {
  return (Math.floor(int / c) % 256).toString() + '.' +
         (Math.floor(int / b) % 256).toString() + '.' +
         (Math.floor(int / a) % 256).toString() + '.' +
         (int % 256).toString();
};
