function importDir(requireComponent) {
  const dirTree = {};
  
  requireComponent.keys().map(filename => {
    const dirs = filename.slice(2).split('/');
    let pointer = dirTree;
  
    while(dirs.length > 0) {
      const fileNode = dirs.shift();
  
      if(dirs.length === 0) {
        pointer[fileNode] = {
          ...requireComponent(filename),
          path: filename.slice(2),
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

export {
  importDir
}