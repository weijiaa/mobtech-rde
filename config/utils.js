const fs = require('fs');

/**
 * 读取目录文件及文件夹，返回过滤后的文件及文件夹名
 * @param {String} dirpath 
 * @param {Array} excludes
 * @returns {Array}
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

exports.getFiles = getFiles;
