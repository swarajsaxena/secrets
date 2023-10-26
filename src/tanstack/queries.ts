import { DayI, NoteI } from '@/date/days'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

const getNotesForOneDay = (day: string) => {
  return useQuery({
    staleTime: 60000,
    refetchOnWindowFocus: false,
    queryKey: [`getNotesForOneDay_${day}`],
    queryFn: (): Promise<NoteI[]> =>
      axios.get(`/api/getDay?day=${day}`).then((res) => {
        if (res.data) {
          return res.data.notes
        } else {
          return null
        }
      }),
  })
}

const getNote = (entry_id: string) => {
  return useQuery({
    // staleTime: 60000,
    refetchOnWindowFocus: false,
    queryKey: [`getNote_${entry_id}`],
    queryFn: (): Promise<NoteI> =>
      axios.get(`/api/getNote/${entry_id}`).then((res) => {
        return res.data.note
      }),
  })
}

const getDays = () => {
  return useQuery({
    staleTime: 60000,
    refetchOnWindowFocus: false,
    queryKey: ['getDays'],
    queryFn: (): Promise<DayI[]> =>
      axios.get(`/api/getDays`).then((res) => {
        return res.data.days
      }),
  })
}

const getNotesForMonth = (notesForTheMonth: DayI[]) => {
  return useQuery({
    staleTime: 60000,
    refetchOnWindowFocus: false,
    queryKey: ['getNotesForMonth'],
    queryFn: (): Promise<NoteI[]> =>
      axios
        .get(
          `/api/getNotes?noteIds=${notesForTheMonth
            .map((noteForTheDay) => noteForTheDay.notes)
            .flat()
            .join(',')}`
        )
        .then((res) => {
          return res.data.notes
        }),
  })
}

const postNote = () => {
  return useMutation({
    mutationKey: ['postNote'],
    mutationFn: ({
      richText,
      title,
      month,
      year,
      date,
      router,
    }: {
      richText: string
      title: string
      month: number
      year: number
      date: number
      router: AppRouterInstance
    }) =>
      axios
        .post('/api/new', {
          content: richText,
          title,
          monthYear: [month - 1, year],
          date: new Date(`${year}-${month}-${date}`),
        })
        .then((res) => {
          router.push(`/in/entry/${res.data.noteId}`)
        }),
  })
}
const updateNote = () => {
  return useMutation({
    mutationKey: ['updateNote'],
    mutationFn: ({
      noteId,
      content,
      title,
    }: {
      noteId: string
      content: string
      title: string
    }) =>
      axios.post('/api/updateNote', {
        noteId,
        content,
        title,
      }),
  })
}

export {
  getNotesForOneDay,
  getNote,
  getDays,
  getNotesForMonth,
  postNote,
  updateNote,
}
