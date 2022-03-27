import {ref, watch, onMounted, onUnmounted} from 'vue'
import NoteServices from './services/NoteServices';

const useLocalStorage = async (key, defaultValue) => {
  const value = ref(defaultValue);
  const read = async () => {
    //const v3 = window.localStorage.getItem(key);
    //if(v3 != null) value.value = JSON.parse(v3);

    const list = await NoteServices.listNoteAll();
    if(list != null) value.value = list;
    debugger;
  }

  await read();

  onMounted(async () => {
    //let x = await NoteServices.getNoteByNoteId("1");
    let x = await NoteServices.listNoteAll();
    console.log(x.value);
    //window.addEventListener('storage', read);
  });

  onUnmounted(() => {
    //window.removeEventListener('storage', read);
  });

  const write = () => {
    //window.localStorage.setItem(key, JSON.stringify(value.value));
    //window.localStorage.setItem(key, JSON.stringify([]));
  }

  watch([value], write, {deep:true});
  //debugger;//melih
  return value;
}

export const useLocalNotes = () => {
  return useLocalStorage('notes', []);
}
