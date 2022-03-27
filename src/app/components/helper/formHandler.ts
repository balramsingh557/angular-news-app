export const createForm = (data: object) => {
  let formData: any = data;
  let formSubmitted = false;
  return {
    get: (key: string) => formData[key],

    onInput :(e: any):void => {
      formData = {...formData, [e.target.id]:e.target.value};
    },

    submit :():void => {
      formSubmitted = true;
    },

    ifInvalid :(value: string):boolean => {    
      return formSubmitted && !!!value.trim();
    },

    ifDisabled :():boolean => {
      return Object.values(formData).some((value:any) => !!!value.trim());
    },

    reset :() => {
      formSubmitted = false;
      Object.keys(formData).forEach(key => {
        let field:any = document.getElementById(key);
        field.value = '';
        formData[key] = '';
      })
    }
  }
}