import { faker } from '@faker-js/faker'
import { addMonths, format, getMonth, startOfMonth } from 'date-fns'

type Note = {
  title: string
  bodyText: string
  dateEdited: Date // You can use a Date type here if you prefer
}

type Day = {
  monthYear: string
  date: Date // You can use a Date type here if you prefer
  notes: Note[]
}

type DayArray = Day[]

export const days: DayArray = [
  {
    date: new Date('2023-01-02'),
    notes: [
      {
        title: 'colo vere',
        bodyText:
          'Vulnus urbs consequatur amor civis adhaero acsi ter. Adamo repellendus ex delinquo. Quis conculco adulatio illum varius crastinus subito distinctio depromo.',
        dateEdited: new Date('2023-01-02'),
      },
      {
        title: 'vacuus tergeo',
        bodyText:
          'Urbs nulla voveo non dolores stipes summa. Numquam timidus officia suscipio architecto. Conculco temporibus antea arbustum.',
        dateEdited: new Date('2023-01-02'),
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
      },
      {
        title: 'vaco curis',
        bodyText:
          'Amor eaque artificiose undique commodi tenuis tersus solus. Curso infit eius undique cohors. Arx stabilis quaerat vitae utique.',
        dateEdited: new Date('2023-02-05'),
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
      },
      {
        title: 'vaco curis',
        bodyText:
          'Amor eaque artificiose undique commodi tenuis tersus solus. Curso infit eius undique cohors. Arx stabilis quaerat vitae utique.',
        dateEdited: new Date('2023-02-26'),
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
      },
      {
        title: 'verto stabilis',
        bodyText:
          'Tertius cruentus brevis. Color votum vilis autem accusator ad auxilium pecus. Claustrum tergum capitulus est tamdiu corpus.',
        dateEdited: new Date('2023-03-29'),
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
      },
      {
        title: 'apud sponte',
        bodyText:
          'Ager spiculum vestigium autus. Vinitor conspergo sollers audentia curia vapulus. Cur demonstro cognomen vulgivagus ducimus spargo unus repellat cinis.',
        dateEdited: new Date('2023-04-17'),
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
      },
      {
        title: 'apud sponte',
        bodyText:
          'Ager spiculum vestigium autus. Vinitor conspergo sollers audentia curia vapulus. Cur demonstro cognomen vulgivagus ducimus spargo unus repellat cinis.',
        dateEdited: new Date('2023-04-04'),
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
      },
      {
        title: 'claro tergo',
        bodyText:
          'Usque volup tubineus ut. Nesciunt ultio ademptio aduro crebro sint deputo demo. Nemo depono eligendi suasoria vita dolor auditor.',
        dateEdited: new Date('2023-05-26'),
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
      },
      {
        title: 'decumbo tribuo',
        bodyText:
          'Tandem repellat neque veritas somnus. Suscipio comminor comminor. Varietas canis deleo abeo facere.',
        dateEdited: new Date('2023-06-03'),
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
      },
      {
        title: 'audentia territo',
        bodyText:
          'Volaticus stella dicta supra timor decimus arceo demens. Vel talus cenaculum accusator. Tutis consequuntur bardus.',
        dateEdited: new Date('2023-07-19'),
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
      },
      {
        title: 'audentia territo',
        bodyText:
          'Volaticus stella dicta supra timor decimus arceo demens. Vel talus cenaculum accusator. Tutis consequuntur bardus.',
        dateEdited: new Date('2023-07-12'),
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
      },
      {
        title: 'considero ventus',
        bodyText:
          'Denego ait advoco officia eius tibi pauper trado caelum. Voluptas tabernus sol callide sperno suggero vigilo temptatio caput theatrum. Tabernus accusator virtus torrens suggero videlicet dolorem.',
        dateEdited: new Date('2023-08-05'),
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
      },
      {
        title: 'considero ventus',
        bodyText:
          'Denego ait advoco officia eius tibi pauper trado caelum. Voluptas tabernus sol callide sperno suggero vigilo temptatio caput theatrum. Tabernus accusator virtus torrens suggero videlicet dolorem.',
        dateEdited: new Date('2023-09-05'),
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
      },
      {
        title: 'considero ventus',
        bodyText:
          'Denego ait advoco officia eius tibi pauper trado caelum. Voluptas tabernus sol callide sperno suggero vigilo temptatio caput theatrum. Tabernus accusator virtus torrens suggero videlicet dolorem.',
        dateEdited: new Date('2023-09-30'),
      },
    ],
    monthYear: '8,2023',
  },
]

export const groupedByMonth = days.reduce(
  (acc: { [key: string]: Day[] }, day) => {
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
