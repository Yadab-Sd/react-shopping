import store from 'store';

export const getData = (key) => { 
  var data = store.get(key);
  return data;
}

export const setData = (key, data) => { 
  var existedData = getData(key);
  var expandableData = [];
  if (existedData) expandableData = [...existedData];
  expandableData.push(data);
  store.set(key, expandableData);
}
