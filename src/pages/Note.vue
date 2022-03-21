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
    const note = reactive({
      title: '',
      description: '',
      content: '',
      noteId: notes.value.length+1//melih
    })
    debugger;//melih
    const submit = () => {
      const noteIdx=router.currentRoute.value.path.split("/note/")[1];
      note = notes.values[noteIdx];
      debugger;//melih
      /*notes.value[]]{//unshift({//melih
        ...note,
        createdAt: Date.now(),
        updatedAt: Date.now()
      })*/
      router.push('/')
      note.title = ''
      note.description = ''
      note.content = ''
      note.noteId = 0//melih
    }
    return { note, submit}
  }
})
</script>

<template>
  <q-page padding>
    <Container>
      <h3>New Note</h3>
      <form @submit="submit">

        <q-input class="q-mt-sm" outlined v-model="note.title" label="Title" />

        <q-input
          class="q-mt-sm"
          outlined
          v-model="note.description"
          label="Description"
          dense
        />

        <q-card flat bordered class="q-mt-sm">
          <q-editor v-model="note.content" min-height="5rem"/>
        </q-card>

        <div class="q-mt-md">
          <q-btn color="grey" to="/" type="reset">Cancel</q-btn>
          <q-btn class="q-ml-sm" color="positive" type="submit"> Create </q-btn>
        </div>

      </form>
    </Container>
  </q-page>
</template>
