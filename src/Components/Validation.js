export default class Validation {
  kiemTraRong = (value) => {
    if (value.trim() === "") return true;
    return false;
  };
  kiemTraEmail =(value) => {
      let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //   if(regex.test(value)) {
    //       return true;
    //   }
    //   return false;
      return regex.test(value);
  }
}
