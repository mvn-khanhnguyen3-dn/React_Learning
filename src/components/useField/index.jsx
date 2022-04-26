export default function userField(type,value) {
  if(type === 'radio'){
    if(value === 'male' || value === 'female'){
      return{
        name:'gender',
        type,
        value:value
      }
    }
  }
  if(type === 'checkbox'){
    return{
      id:'agree',
      name:'agree',
      type,
      defaultChecked : false,
      required:true
    }
  }
 return{
      name:type,
      id:type,
      type,
      required : true
    }
}

