import { faker } from '@faker-js/faker'
import { addMonths, format, getMonth, startOfMonth } from 'date-fns'

export type NoteI = {
  _id: string
  title: string
  content: string
  createdAt?: Date
  updatedAt?: string
  __v?: number
}

// Generated by https://quicktype.io

export interface DayI {
  monthYear: string[] | number[]
  date: string
  notes: string[] | any
  _id?: string
}

export type user = {
  username: string
  emailId: string
  noteArray: DayI[]
}

type DayArray = DayI[]

export const days: DayArray = [
  {
    date: new Date('2023-01-02').toString(),
    notes: [
      {
        title: 'colo vere',
        content: 'wow',
        createdAt: new Date('2023-01-02').toString(),
        _id: 'd5cfe0',
      },
      {
        title: 'vacuus tergeo',
        content: 'wow',
        createdAt: new Date('2023-01-02').toString(),
        _id: 'efdc70',
      },
    ],
    monthYear: [0, 2023],
  },
  {
    date: new Date('2023-02-05').toString(),
    notes: [
      {
        title: 'terminatio amoveo',
        content: 'wow',
        createdAt: new Date('2023-02-05').toString(),
        _id: 'e49180',
      },
      {
        title: 'vaco curis',
        content: 'wow',
        createdAt: new Date('2023-02-05').toString(),
        _id: 'ca7120',
      },
    ],
    monthYear: [1, 2023],
  },
  {
    date: new Date('2023-02-26').toString(),
    notes: [
      {
        title: 'terminatio amoveo',
        content: 'wow',
        createdAt: new Date('2023-02-26').toString(),
        _id: 'f92450',
      },
      {
        title: 'vaco curis',
        content: 'wow',
        createdAt: new Date('2023-02-26').toString(),
        _id: '2bb670',
      },
    ],
    monthYear: [1, 2023],
  },
  {
    date: new Date('2023-03-29').toString(),
    notes: [
      {
        title: 'aeger deficio',
        content: 'wow',
        createdAt: new Date('2023-03-29').toString(),
        _id: '42f0d0',
      },
      {
        title: 'verto stabilis',
        content: 'wow',
        createdAt: new Date('2023-03-29').toString(),
        _id: '6e0890',
      },
    ],
    monthYear: [2, 2023],
  },
  {
    date: new Date('2023-04-17').toString(),
    notes: [
      {
        title: 'contego voluptatum',
        content: 'wow',
        createdAt: new Date('2023-04-17').toString(),
        _id: 'fda9f0',
      },
      {
        title: 'apud sponte',
        content: 'wow',
        createdAt: new Date('2023-04-17').toString(),
        _id: 'cf29d0',
      },
    ],
    monthYear: [3, 2023],
  },
  {
    date: new Date('2023-04-04').toString(),
    notes: [
      {
        title: 'contego voluptatum',
        content: 'wow',
        createdAt: new Date('2023-04-04').toString(),
        _id: '15dcf0',
      },
      {
        title: 'apud sponte',
        content: 'wow',
        createdAt: new Date('2023-04-04').toString(),
        _id: '5813f0',
      },
    ],
    monthYear: [3, 2023],
  },
  {
    date: new Date('2023-05-26').toString(),
    notes: [
      {
        title: 'depereo spoliatio',
        content: 'wow',
        createdAt: new Date('2023-05-26').toString(),
        _id: 'b67770',
      },
      {
        title: 'claro tergo',
        content: 'wow',
        createdAt: new Date('2023-05-26').toString(),
        _id: 'dcf680',
      },
    ],
    monthYear: [4, 2023],
  },
  {
    date: new Date('2023-06-03').toString(),
    notes: [
      {
        title: 'angelus corona',
        content: 'wow',
        createdAt: new Date('2023-06-03').toString(),
        _id: '43f6f0',
      },
      {
        title: 'decumbo tribuo',
        content: 'wow',
        createdAt: new Date('2023-06-03').toString(),
        _id: '928a60',
      },
    ],
    monthYear: [5, 2023],
  },
  {
    date: new Date('2023-07-19').toString(),
    notes: [
      {
        title: 'ulciscor abstergo',
        content: 'wow',
        createdAt: new Date('2023-07-19').toString(),
        _id: 'b83000',
      },
      {
        title: 'audentia territo',
        content: 'wow',
        createdAt: new Date('2023-07-19').toString(),
        _id: '12fb10',
      },
    ],
    monthYear: [6, 2023],
  },
  {
    date: new Date('2023-07-12').toString(),
    notes: [
      {
        title: 'ulciscor abstergo',
        content: 'wow',
        createdAt: new Date('2023-07-12').toString(),
        _id: 'cb0000',
      },
      {
        title: 'audentia territo',
        content: 'wow',
        createdAt: new Date('2023-07-12').toString(),
        _id: '1ec300',
      },
    ],
    monthYear: [6, 2023],
  },
  {
    date: new Date('2023-08-05').toString(),
    notes: [
      {
        title: 'super laboriosam',
        content: 'wow',
        createdAt: new Date('2023-08-05').toString(),
        _id: 'e9b300',
      },
      {
        title: 'considero ventus',
        content: 'wow',
        createdAt: new Date('2023-08-05').toString(),
        _id: '70f2b0',
      },
    ],
    monthYear: [7, 2023],
  },
  {
    date: new Date('2023-09-05').toString(),
    notes: [
      {
        title: 'super laboriosam',
        content: 'wow',
        createdAt: new Date('2023-09-05').toString(),
        _id: 'c2cfa0',
      },
      {
        title: 'considero ventus',
        content: 'wow',
        createdAt: new Date('2023-09-05').toString(),
        _id: '71a6b0',
      },
    ],
    monthYear: [8, 2023],
  },
  {
    date: new Date('2023-10-6').toString(),
    notes: [
      {
        title: 'super laboriosam',
        content: 'wow',
        createdAt: new Date('2023-10-6').toString(),
        _id: '73f240',
      },
      {
        title: 'considero ventus',
        content: 'wow',
        createdAt: new Date('2023-10-6').toString(),
        _id: 'c802f0',
      },
    ],
    monthYear: [9, 2023],
  },
]

export const groupedByMonth = (days: DayI[]) =>
  days.reduce((acc: { [key: string]: DayI[] }, day) => {
    if (!acc[day.monthYear.toString()]) {
      acc[day.monthYear.toString()] = []
    }
    acc[day.monthYear.toString()].push(day)
    return acc
  }, {})

export function calculateMonthsBetween(startDate: Date, endDate: Date) {
  const months = []
  let currentDate = startDate

  while (currentDate <= endDate) {
    months.push({
      year: currentDate.getFullYear(),
      month: getMonth(currentDate),
      firstDay: startOfMonth(currentDate),
    })
    currentDate = addMonths(currentDate, 1)
  }

  return months
}
