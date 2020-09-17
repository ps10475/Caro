export  const autoAddRowCell = (arraySize, rowId, cellId) => {
    var a = [...arraySize]; 
    if (rowId === 0 && cellId === arraySize[0].length - 1) {
      a = arraySize.map((res) => {
        res.push(null);
        return res;
      });
      let addRow = Array(arraySize[0].length).fill(null);
      a.unshift(addRow); 

    } else if (rowId === 0 && cellId === 0) {
      a = arraySize.map((res) => {
        res.unshift(null);
        return res;
      });
      let addRow = Array(arraySize[0].length).fill(null);
      a.unshift(addRow);
      
    } else if (rowId === arraySize.length - 1 && cellId === 0) {
      a = arraySize.map((res) => {
        res.unshift(null);
        return res;
      });
      let addRow = Array(arraySize[0].length).fill(null);
      a.push(addRow);
    } else if (
      rowId === arraySize.length - 1 &&
      cellId === arraySize[0].length - 1
    ) {
      a = arraySize.map((res) => {
        res.push(null);
        return res;
      });
      let addRow = Array(arraySize[0].length).fill(null);
      a.push(addRow);
    } else if (rowId === 0) {
      let addRow = Array(arraySize[0].length).fill(null);
      a.unshift(addRow);
    } else if (rowId === arraySize.length - 1) {
      let addRow = Array(arraySize[0].length).fill(null);
      a.push(addRow);
    } else if (cellId === arraySize[0].length - 1) {
      a = arraySize.map((res) => {
        res.push(null);
        return res;
      });
    } else if (cellId === 0) {
      a = arraySize.map((res) => {
        res.unshift(null);
        return res;
      });
    }
    return a;
  };