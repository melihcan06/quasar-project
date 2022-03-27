<script>
import Container from 'src/components/Container.vue'
import { defineComponent, reactive } from 'vue'
import { useLocalNotes } from 'src/helper'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: { Container },
  name: 'PageNew',

  setup() {
    const router = useRouter()
    const notes = useLocalNotes()
    const noteIdx = parseInt(router.currentRoute.value.path.split("/note/")[1]);//melih
    debugger;
    //melih
    const note = reactive({
      title: notes.value[noteIdx-1].title,
      description: notes.value[noteIdx-1].description,
      content: notes.value[noteIdx-1].content,
      noteId: noteIdx
    })
    const assignNote = (newNote) => {
      note.value.title = newNote.title;
      note.value.description = newNote.description;
      note.value.content = newNote.content;
      note.value.noteId = newNote.noteId;
    }

    //debugger;//melih
    const submit = () => {
      //melih
      //debugger;
      //note = notes.value[noteIdx];
      //assignNote(notes.value[noteIdx]);
      notes.value[noteIdx - 1] = {//melih
        ...note,
        createdAt: Date.now(),
        updatedAt: Date.now()
      };
      router.push('/')
      /*note.title = ''
      note.description = ''
      note.content = ''
      note.noteId = 0//melih*/
    }
    return { note, submit, assignNote }
  }
})
</script>

<template>
  <q-page padding>
    <Container>
      <h3>New Note</h3>
      <form @submit="submit">
        <q-input class="q-mt-sm" outlined v-model="note.title" label="Title" />

        <q-input class="q-mt-sm" outlined v-model="note.description" label="Description" dense />

        <q-card flat bordered class="q-mt-sm">
          <q-editor v-model="note.content" min-height="5rem" />
        </q-card>

        <div class="q-mt-md">
          <q-btn color="grey" to="/" type="reset">Cancel</q-btn>
          <q-btn class="q-ml-sm" color="positive" type="submit">Update</q-btn>
        </div>
      </form>
    </Container>
  </q-page>
</template>
