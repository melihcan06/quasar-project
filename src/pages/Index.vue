<script>
/* eslint-disable */
import Container from 'src/components/Container.vue'
import NoteCard from 'src/components/NoteCard.vue'
import { useLocalNotes } from 'src/helper'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: { NoteCard, Container },
  name: 'PageIndex',
  setup() {
    const notes = useLocalNotes()
    debugger;
    const router = useRouter()
    const openNoteCard = (noteId) => {
      router.push(`/note/${noteId}`);
    }
    return { router, notes, openNoteCard }
  }
})
</script>

<template>
  <q-page padding>
    <Container>
      <div class="row items-center justify-between">
        <h3>Your notes</h3>
        <div>
          <q-btn round color="positive" icon="add" to="/new"></q-btn>
        </div>
      </div>

      <NoteCard
        v-for="({ title, description, content, noteId }, idx) in notes"
        :key="noteId"
        :title="title"
        :description="description"
        @click="openNoteCard(noteId)"
      /><!--melih @click="router.push(`/note/${noteId}`)"-->
      <div v-if="notes.length === 0">You have not created any notes.</div>
    </Container>
  </q-page>
</template>
