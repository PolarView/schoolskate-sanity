export const pricingData = [
  {
    id: 0,
    currentDuration: "hour",
    trainingType: "Индивидуальное занятие",
    trainingDescription: "один на один с тренером",
    duration: {
      hour: {
        firstTrainPrice: 990,
        standardTrainPrice: 2000
      },
      halfAndHour: {
        firstTrainPrice: 1500,
        standardTrainPrice: 2800
      }
    }
  },
  {
    id: 1,
    currentDuration: "hour",
    trainingType: "Дуэт",
    trainingDescription: "занятие в компании друга, ребенка или второй половинки",
    duration: {
      hour: {
        firstTrainPrice: 1800,
        standardTrainPrice: 2800
      },
      halfAndHour: {
        firstTrainPrice: 2500,
        standardTrainPrice: 4000
      }
    }
  },
  {
    id: 2,
    currentDuration: "hour",
    trainingType: "Груповые",
    trainingDescription: "занятие в группе от 3 до 4 человек",
    duration: {
      hour: {
        firstTrainPrice: 700,
        standardTrainPrice: 1100
      },
      halfAndHour: {
        firstTrainPrice: 1000,
        standardTrainPrice: 1500
      }
    }
  }
];

export const mentorsData = [{}, {}, {}, {}, {}, {}];

export const faqData = [
  {
    id: 0,
    question: " Нужен ли с собой скейтборд на первое занятие?",
    answer: `Нет, нашим ученикам на время тренировки предоставляется скейтборд. Но если у вас уже есть собственный, вы можете взять его с собой . `,
    isOpen: false
  },
  {
    id: 1,
    question: "Нужна ли защита на время занятия?",
    answer:
      "Нет, нашим ученикам на время тренировки предоставляется защита: наколенники, налокотники и шлем. Но если у вас есть собственная защита, то вы можете ее с собой взять.",
    isOpen: false
  },
  {
    id: 2,
    question: " Вход в парк Bunker платный?",
    answer: `Да. Стоимость входа 500 рублей в будние дни и 600 в выходные.  `,
    isOpen: false
  },
  {
    id: 3,
    question: "Есть ли выездная тренировка?",
    answer:
      "Да, вы можете попросить наших тренеров приехать в другой скейт-парк. В таком случае тренировка будет стоить 2800 рублей за один час. ",
    isOpen: false
  },
  {
    id: 4,
    question: " Как часто нужно заниматься скейтбордингом, чтобы был результат?",
    answer: `Мы рекомендуем заниматься два раза в неделю с тренером и желательно два раза кататься самостоятельно, чтобы закрепить результат. `,
    isOpen: false
  },
  {
    id: 5,
    question: "Можно ли подарить тренировку ребенку/другу/коллеге/знакомому?",
    answer: `Да, в нашей школе есть электронные подарочные сертификаты на любое количество тренировок.`,
    isOpen: false
  }
];
