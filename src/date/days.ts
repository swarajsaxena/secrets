import { faker } from '@faker-js/faker'
import { addMonths, format, getMonth, startOfMonth } from 'date-fns'

export type NoteI = {
  title: string
  bodyText: string
  dateEdited: Date // You can use a Date type here if you prefer
  id?: string
}

export type DayI = {
  monthYear: string
  date: Date // You can use a Date type here if you prefer
  notes: NoteI[]
}

type DayArray = DayI[]

export const days: DayArray = [
  {
    date: new Date('2023-01-02'),
    notes: [
      {
        title: 'colo vere',
        bodyText:
          'Vulnus urbs consequatur amor civis adhaero acsi ter. Adamo repellendus ex delinquo. Quis conculco adulatio illum varius crastinus subito distinctio depromo.',
        dateEdited: new Date('2023-01-02'),
        id: 'd5cfe0',
      },
      {
        title: 'vacuus tergeo',
        bodyText:
          'Urbs nulla voveo non dolores stipes summa. Numquam timidus officia suscipio architecto. Conculco temporibus antea arbustum.',
        dateEdited: new Date('2023-01-02'),
        id: 'efdc70',
      },
    ],
    monthYear: '0,2023',
  },
  {
    date: new Date('2023-02-05'),
    notes: [
      {
        title: 'terminatio amoveo',
        bodyText:
          'Socius arbitro turpis cunctatio callide aufero contigo temporibus decerno. Temperantia ambitus color velum tricesimus nesciunt vindico tergiversatio sum nobis. Cui rerum textus alter ipsam conventus coerceo.',
        dateEdited: new Date('2023-02-05'),
        id: 'e49180',
      },
      {
        title: 'vaco curis',
        bodyText:
          'Amor eaque artificiose undique commodi tenuis tersus solus. Curso infit eius undique cohors. Arx stabilis quaerat vitae utique.',
        dateEdited: new Date('2023-02-05'),
        id: 'ca7120',
      },
    ],
    monthYear: '1,2023',
  },
  {
    date: new Date('2023-02-26'),
    notes: [
      {
        title: 'terminatio amoveo',
        bodyText:
          'Socius arbitro turpis cunctatio callide aufero contigo temporibus decerno. Temperantia ambitus color velum tricesimus nesciunt vindico tergiversatio sum nobis. Cui rerum textus alter ipsam conventus coerceo.',
        dateEdited: new Date('2023-02-26'),
        id: 'f92450',
      },
      {
        title: 'vaco curis',
        bodyText:
          'Amor eaque artificiose undique commodi tenuis tersus solus. Curso infit eius undique cohors. Arx stabilis quaerat vitae utique.',
        dateEdited: new Date('2023-02-26'),
        id: '2bb670',
      },
    ],
    monthYear: '1,2023',
  },
  {
    date: new Date('2023-03-29'),
    notes: [
      {
        title: 'aeger deficio',
        bodyText:
          'Vorago copia audax votum. Acidus suscipit acidus. Statim solium compello caput sed attollo pax debeo sit eum.',
        dateEdited: new Date('2023-03-29'),
        id: '42f0d0',
      },
      {
        title: 'verto stabilis',
        bodyText:
          'Tertius cruentus brevis. Color votum vilis autem accusator ad auxilium pecus. Claustrum tergum capitulus est tamdiu corpus.',
        dateEdited: new Date('2023-03-29'),
        id: '6e0890',
      },
    ],
    monthYear: '2,2023',
  },
  {
    date: new Date('2023-04-17'),
    notes: [
      {
        title: 'contego voluptatum',
        bodyText:
          'Defendo utique vomer crur. Spectaculum creber adamo illum. Voluptatibus crustulum vereor earum depulso voluptatem consuasor aer.',
        dateEdited: new Date('2023-04-17'),
        id: 'fda9f0',
      },
      {
        title: 'apud sponte',
        bodyText:
          'Ager spiculum vestigium autus. Vinitor conspergo sollers audentia curia vapulus. Cur demonstro cognomen vulgivagus ducimus spargo unus repellat cinis.',
        dateEdited: new Date('2023-04-17'),
        id: 'cf29d0',
      },
    ],
    monthYear: '3,2023',
  },
  {
    date: new Date('2023-04-04'),
    notes: [
      {
        title: 'contego voluptatum',
        bodyText:
          'Defendo utique vomer crur. Spectaculum creber adamo illum. Voluptatibus crustulum vereor earum depulso voluptatem consuasor aer.',
        dateEdited: new Date('2023-04-04'),
        id: '15dcf0',
      },
      {
        title: 'apud sponte',
        bodyText:
          'Ager spiculum vestigium autus. Vinitor conspergo sollers audentia curia vapulus. Cur demonstro cognomen vulgivagus ducimus spargo unus repellat cinis.',
        dateEdited: new Date('2023-04-04'),
        id: '5813f0',
      },
    ],
    monthYear: '3,2023',
  },
  {
    date: new Date('2023-05-26'),
    notes: [
      {
        title: 'depereo spoliatio',
        bodyText:
          'Amaritudo tego temperantia sumo delego. Clementia communis curtus demulceo concido. Confero crur solus ullus corrigo atque.',
        dateEdited: new Date('2023-05-26'),
        id: 'b67770',
      },
      {
        title: 'claro tergo',
        bodyText:
          'Usque volup tubineus ut. Nesciunt ultio ademptio aduro crebro sint deputo demo. Nemo depono eligendi suasoria vita dolor auditor.',
        dateEdited: new Date('2023-05-26'),
        id: 'dcf680',
      },
    ],
    monthYear: '4,2023',
  },
  {
    date: new Date('2023-06-03'),
    notes: [
      {
        title: 'angelus corona',
        bodyText:
          'Patruus considero depono damnatio allatus angustus. Annus coepi acies architecto tremo cohors videlicet cariosus. Animadverto cum ullam utor delicate vehemens ab appositus pecco ante.',
        dateEdited: new Date('2023-06-03'),
        id: '43f6f0',
      },
      {
        title: 'decumbo tribuo',
        bodyText:
          'Tandem repellat neque veritas somnus. Suscipio comminor comminor. Varietas canis deleo abeo facere.',
        dateEdited: new Date('2023-06-03'),
        id: '928a60',
      },
    ],
    monthYear: '5,2023',
  },
  {
    date: new Date('2023-07-19'),
    notes: [
      {
        title: 'ulciscor abstergo',
        bodyText:
          'Amissio reprehenderit temporibus deprecator attonbitus triduana suscipio theologus animus. Adversus recusandae earum thermae. Venustas itaque studio exercitationem aperiam alveus stillicidium.',
        dateEdited: new Date('2023-07-19'),
        id: 'b83000',
      },
      {
        title: 'audentia territo',
        bodyText:
          'Volaticus stella dicta supra timor decimus arceo demens. Vel talus cenaculum accusator. Tutis consequuntur bardus.',
        dateEdited: new Date('2023-07-19'),
        id: '12fb10',
      },
    ],
    monthYear: '6,2023',
  },
  {
    date: new Date('2023-07-12'),
    notes: [
      {
        title: 'ulciscor abstergo',
        bodyText:
          'Amissio reprehenderit temporibus deprecator attonbitus triduana suscipio theologus animus. Adversus recusandae earum thermae. Venustas itaque studio exercitationem aperiam alveus stillicidium.',
        dateEdited: new Date('2023-07-12'),
        id: 'cb0000',
      },
      {
        title: 'audentia territo',
        bodyText:
          'Volaticus stella dicta supra timor decimus arceo demens. Vel talus cenaculum accusator. Tutis consequuntur bardus.',
        dateEdited: new Date('2023-07-12'),
        id: '1ec300',
      },
    ],
    monthYear: '6,2023',
  },
  {
    date: new Date('2023-08-05'),
    notes: [
      {
        title: 'super laboriosam',
        bodyText:
          'Cotidie summa coruscus nulla aeger pax credo copia video. Claustrum voluptatibus alter verbum aufero vorago via vulticulus delinquo tertius. Quaerat degusto verus tolero convoco thesis dapifer expedita crepusculum caritas.',
        dateEdited: new Date('2023-08-05'),
        id: 'e9b300',
      },
      {
        title: 'considero ventus',
        bodyText:
          'Denego ait advoco officia eius tibi pauper trado caelum. Voluptas tabernus sol callide sperno suggero vigilo temptatio caput theatrum. Tabernus accusator virtus torrens suggero videlicet dolorem.',
        dateEdited: new Date('2023-08-05'),
        id: '70f2b0',
      },
    ],
    monthYear: '7,2023',
  },
  {
    date: new Date('2023-09-05'),
    notes: [
      {
        title: 'super laboriosam',
        bodyText:
          'Cotidie summa coruscus nulla aeger pax credo copia video. Claustrum voluptatibus alter verbum aufero vorago via vulticulus delinquo tertius. Quaerat degusto verus tolero convoco thesis dapifer expedita crepusculum caritas.',
        dateEdited: new Date('2023-09-05'),
        id: 'c2cfa0',
      },
      {
        title: 'considero ventus',
        bodyText:
          'Denego ait advoco officia eius tibi pauper trado caelum. Voluptas tabernus sol callide sperno suggero vigilo temptatio caput theatrum. Tabernus accusator virtus torrens suggero videlicet dolorem.',
        dateEdited: new Date('2023-09-05'),
        id: '71a6b0',
      },
    ],
    monthYear: '8,2023',
  },
  {
    date: new Date('2023-09-30'),
    notes: [
      {
        title: 'super laboriosam',
        bodyText:
          'Cotidie summa coruscus nulla aeger pax credo copia video. Claustrum voluptatibus alter verbum aufero vorago via vulticulus delinquo tertius. Quaerat degusto verus tolero convoco thesis dapifer expedita crepusculum caritas.',
        dateEdited: new Date('2023-09-30'),
        id: '73f240',
      },
      {
        title: 'considero ventus',
        bodyText:
          'Denego ait advoco officia eius tibi pauper trado caelum. Voluptas tabernus sol callide sperno suggero vigilo temptatio caput theatrum. Tabernus accusator virtus torrens suggero videlicet dolorem.',
        dateEdited: new Date('2023-09-30'),
        id: 'c802f0',
      },
    ],
    monthYear: '8,2023',
  },
]

export const groupedByMonth = days.reduce(
  (acc: { [key: string]: DayI[] }, day) => {
    if (!acc[day.monthYear]) {
      acc[day.monthYear] = []
    }
    acc[day.monthYear].push(day)
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
