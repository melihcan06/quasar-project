//melih
import { ref } from 'vue';

const SERVER_URL = 'http://localhost:8081/note/';

export default {

  listNoteAll: async() => {
    const url = SERVER_URL + 'list/'
    var headers = {};
    var retVal;
    await fetch(url, { method: "GET", mode: 'cors', headers: headers })
      .then(response => response.json())
      .then(data => {retVal = data;});
    return retVal;
  },
  getNoteByNoteId: async (noteId) => {
    const url = SERVER_URL + 'get/' + noteId;
    var headers = {};
    let _this = this;
    var retVal = ref({});
    await fetch(url, { method: "GET", mode: 'cors', headers: headers })
      .then(response => response.json())
      .then(data => {retVal.value = data;});
    return retVal;
    /*const response = fetch(url, { method: "GET", mode: 'cors', headers: headers });
    debugger;
    return response.json();*/
    /*let resp =  fetch(url,
      {
        method : "GET",
        mode: 'cors',
        headers: headers
      }
    ).then(response => {
      let x=response.json();
      debugger;});*/
    /*fetch(url)
    .then(response => response.json())
    .then(data => {debugger;console.log(data);});
    debugger;*/
    /*fetch(url,
      {
        method : "GET",
        mode: 'cors',
        headers: headers
      }
    ).then(function(resp){
      debugger;
      return JSON.parse(resp);
    });*/
  }
}

/*let data = {userName: "awdaw", password: "awdawd"};
fetch{ url, {
  body: JSON.stringfy(data)
  method:"POST"
  headers: {
           "Content-Type": "application/json",
       },
 }).then(
        response =>  {
            return response.json();
        }*/





/*const instance = axios.create({
  baseURL: SERVER_URL,
  timeout: 1000
});*/

/*export default {
  getByNoteId:(noteId) =>{
    //axios.get('');
  }
  {
    instance.get('get/'+noteId,{
    transformResponse: [function (data) {
      debugger;
      return JSON.parse(data);}]
    })
  }*//*,
// (C)reate
createNew: (text, completed) => instance.post('todos', {title: text, completed: completed}),
// (R)ead
getAll: () => instance.get('todos', {
transformResponse: [function (data) {
return data? JSON.parse(data)._embedded.todos : data;
}]
}),
// (U)pdate
updateForId: (id, text, completed) => instance.put('todos/'+id, {title: text, completed: completed}),
// (D)elete
removeForId: (id) => instance.delete('todos/'+id)
}*/

