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

export type DayI = {
  monthYear: [Number, Number]
  date: Date // You can use a Date type here if you prefer
  notes: NoteI[]
}

export type user = {
  username: string
  emailId: string
  noteArray: DayI[]
}

type DayArray = DayI[]

export const days: DayArray = [
  {
    date: new Date('2023-01-02'),
    notes: [
      {
        title: 'colo vere',
        content: 'wow',
        createdAt: new Date('2023-01-02'),
        _id: 'd5cfe0',
      },
      {
        title: 'vacuus tergeo',
        content: 'wow',
        createdAt: new Date('2023-01-02'),
        _id: 'efdc70',
      },
    ],
    monthYear: [0, 2023],
  },
  {
    date: new Date('2023-02-05'),
    notes: [
      {
        title: 'terminatio amoveo',
        content: 'wow',
        createdAt: new Date('2023-02-05'),
        _id: 'e49180',
      },
      {
        title: 'vaco curis',
        content: 'wow',
        createdAt: new Date('2023-02-05'),
        _id: 'ca7120',
      },
    ],
    monthYear: [1, 2023],
  },
  {
    date: new Date('2023-02-26'),
    notes: [
      {
        title: 'terminatio amoveo',
        content: 'wow',
        createdAt: new Date('2023-02-26'),
        _id: 'f92450',
      },
      {
        title: 'vaco curis',
        content: 'wow',
        createdAt: new Date('2023-02-26'),
        _id: '2bb670',
      },
    ],
    monthYear: [1, 2023],
  },
  {
    date: new Date('2023-03-29'),
    notes: [
      {
        title: 'aeger deficio',
        content: 'wow',
        createdAt: new Date('2023-03-29'),
        _id: '42f0d0',
      },
      {
        title: 'verto stabilis',
        content: 'wow',
        createdAt: new Date('2023-03-29'),
        _id: '6e0890',
      },
    ],
    monthYear: [2, 2023],
  },
  {
    date: new Date('2023-04-17'),
    notes: [
      {
        title: 'contego voluptatum',
        content: 'wow',
        createdAt: new Date('2023-04-17'),
        _id: 'fda9f0',
      },
      {
        title: 'apud sponte',
        content: 'wow',
        createdAt: new Date('2023-04-17'),
        _id: 'cf29d0',
      },
    ],
    monthYear: [3, 2023],
  },
  {
    date: new Date('2023-04-04'),
    notes: [
      {
        title: 'contego voluptatum',
        content: 'wow',
        createdAt: new Date('2023-04-04'),
        _id: '15dcf0',
      },
      {
        title: 'apud sponte',
        content: 'wow',
        createdAt: new Date('2023-04-04'),
        _id: '5813f0',
      },
    ],
    monthYear: [3, 2023],
  },
  {
    date: new Date('2023-05-26'),
    notes: [
      {
        title: 'depereo spoliatio',
        content: 'wow',
        createdAt: new Date('2023-05-26'),
        _id: 'b67770',
      },
      {
        title: 'claro tergo',
        content: 'wow',
        createdAt: new Date('2023-05-26'),
        _id: 'dcf680',
      },
    ],
    monthYear: [4, 2023],
  },
  {
    date: new Date('2023-06-03'),
    notes: [
      {
        title: 'angelus corona',
        content: 'wow',
        createdAt: new Date('2023-06-03'),
        _id: '43f6f0',
      },
      {
        title: 'decumbo tribuo',
        content: 'wow',
        createdAt: new Date('2023-06-03'),
        _id: '928a60',
      },
    ],
    monthYear: [5, 2023],
  },
  {
    date: new Date('2023-07-19'),
    notes: [
      {
        title: 'ulciscor abstergo',
        content: 'wow',
        createdAt: new Date('2023-07-19'),
        _id: 'b83000',
      },
      {
        title: 'audentia territo',
        content: 'wow',
        createdAt: new Date('2023-07-19'),
        _id: '12fb10',
      },
    ],
    monthYear: [6, 2023],
  },
  {
    date: new Date('2023-07-12'),
    notes: [
      {
        title: 'ulciscor abstergo',
        content: 'wow',
        createdAt: new Date('2023-07-12'),
        _id: 'cb0000',
      },
      {
        title: 'audentia territo',
        content: 'wow',
        createdAt: new Date('2023-07-12'),
        _id: '1ec300',
      },
    ],
    monthYear: [6, 2023],
  },
  {
    date: new Date('2023-08-05'),
    notes: [
      {
        title: 'super laboriosam',
        content: 'wow',
        createdAt: new Date('2023-08-05'),
        _id: 'e9b300',
      },
      {
        title: 'considero ventus',
        content: 'wow',
        createdAt: new Date('2023-08-05'),
        _id: '70f2b0',
      },
    ],
    monthYear: [7, 2023],
  },
  {
    date: new Date('2023-09-05'),
    notes: [
      {
        title: 'super laboriosam',
        content: 'wow',
        createdAt: new Date('2023-09-05'),
        _id: 'c2cfa0',
      },
      {
        title: 'considero ventus',
        content: 'wow',
        createdAt: new Date('2023-09-05'),
        _id: '71a6b0',
      },
    ],
    monthYear: [8, 2023],
  },
  {
    date: new Date('2023-10-6'),
    notes: [
      {
        title: 'super laboriosam',
        content: 'wow',
        createdAt: new Date('2023-10-6'),
        _id: '73f240',
      },
      {
        title: 'considero ventus',
        content: 'wow',
        createdAt: new Date('2023-10-6'),
        _id: 'c802f0',
      },
    ],
    monthYear: [9, 2023],
  },
]

export const groupedByMonth = days.reduce(
  (acc: { [key: string]: DayI[] }, day) => {
    if (!acc[day.monthYear.toString()]) {
      acc[day.monthYear.toString()] = []
    }
    acc[day.monthYear.toString()].push(day)
    return acc
  },
  {}
)

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
