export default {
  // сделал лист обьектом а не массивом потому что вставка более
  // редкая чем поиск  это заметно в аддкард
  cards: {
    0: {
      id: 0,
      name: 'Вася',
      fio: 'Вася Иванович Иванов',
      comment: 'aaa',
    },
    1: {
      id: 1,
      name: 'Петя',
      fio: 'Петя Петрович Петров',
      comment: 'one',
    },
    2: {
      id: 2,
      name: 'Настя',
      fio: 'Настя Валкановна Огурцова',
      comment: 'two',
    },
    3: {
      id: 3,
      name: 'Вера',
      fio: 'Вера Екинешна Удмуктка',
      comment: '',
    },
  },
  lists:{
    4: {
      id: 4,
      name: 'list Best',
      cards:[0,1,2,3]

    },
  },
  dashboards: {
    5: {
      id: 5,
      name: 'dasboard Lar',
      lists: [4]
    }
  },
  currentComponent: 'card-form',
  currentId: 1,
};
