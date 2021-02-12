const Util = {
  isEmpty: (val) => {
    if(val === null || val === '' || val === undefined){
      return true;
    }else{
      return false;
    }
  }
}

export default Util;