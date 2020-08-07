const fs = require('fs');
const os = require('os');

/**
 * 读取目录文件及文件夹，返回过滤后的文件及文件夹名
 * @param {String} dirpath 
 * @param {Array} excludes
 * @return {Array}
*/
function getFiles(dirpath, excludes) {
  let fileList = [];

  try {
    fileList = fs.readdirSync(dirpath)
                .filter(filename => !excludes.includes(filename));
  } catch (error) {
    return [];
  }
  
  return fileList;
}

/**
 * 获取本地ipv4地址
 * @return {string}
*/
function getIPAdress() {
  let address = '127.0.0.1';
  const interfaces = os.networkInterfaces();

  for (let devName in interfaces) {
    interfaces[devName].forEach((alias) => {
      if (
        alias.family === 'IPv4'
        && alias.address !== '127.0.0.1'
        && !alias.internal
      ) {
        address = alias.address;
      }
    });
  }

  return address;
}

module.exports = {
  getFiles,
  getIPAdress
}
