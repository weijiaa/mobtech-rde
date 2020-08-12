function importDir(requireComponent, componentPath) {
  const dirTree = {};
  const relativePath = componentPath.split('src/')[1].split('/')[0];
  
  requireComponent.keys().map(filename => {
    const dirs = filename.slice(2).split('/');
    let pointer = dirTree;
  
    while(dirs.length > 0) {
      const fileNode = dirs.shift();
  
      if(dirs.length === 0) {
        pointer[fileNode] = {
          ...requireComponent(filename),
          path: relativePath + filename.slice(1),
          isComponent: true
        }
        break;
      }
  
      if(pointer[fileNode] === undefined) {
        pointer[fileNode] = {};
      }
  
      pointer = pointer[fileNode];
    }
  });

  return dirTree;
}

function ajaxGetFile(path) {

  return new Promise((reslove) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', path, true);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
            if(xhr.status === 200 || xhr.status === 304){
              reslove(xhr.responseText);
            } else {
              reslove('');
            }
        }
    }

    xhr.send();
  });
}

export {
  importDir,
  ajaxGetFile
}