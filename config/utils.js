const fs = require('fs');

/**
 * 读取目录文件及文件夹，返回过滤后的文件及文件夹名
 * @param {String} dirpath 
 * @param {Array} excludes
 * @returns {Array}
*/
function getFiles(dirpath, excludes) {
  return fs.readdirSync(dirpath)
           .filter(filename => !excludes.includes(filename));
}

exports.getFiles = getFiles;
