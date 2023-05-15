export const getProducts = () => {
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      resolve(
        [
          {
            name: 'Мясная бомба',
            price: 689,
            weight: 520,
            id: 1,
            image: 'meat.jpg',
            cat_id: 1,
            description: 'Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.',
            structure: ['Пшеничная булочка', 'Котлета из говядины', 'Красный лук', 'Листья салата', 'Соус горчичный'],
            calories: '430'
          },
          {
            name: 'Супер сырный',
            price: 550,
            weight: 512,
            id: 2,
            image: 'cheez.jpg',
            cat_id: 1,
            description: 'Супер наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          },
          {
            name: 'Сытный',
            price: 639,
            weight: 580,
            id: 3,
            image: 'sitnay.jpg',
            cat_id: 1,
            description: 'Супер наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          },
          {
            name: 'Тяжелый удар',
            price: 480,
            weight: 470,
            id: 4,
            image: 'hard.jpg',
            cat_id: 1,
            description: 'Супер наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          },
          {
            name: 'Вечная классика',
            price: 450,
            weight: 450,
            id: 5,
            image: 'classic.jpg',
            cat_id: 1,
            description: 'Супер наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          },
          {
            name: 'Итальянский',
            price: 560,
            weight: 510,
            id: 6,
            image: 'italiano.jpg',
            cat_id: 1,
            description: 'Супер наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          },
          {
            name: 'Начос',
            price: 250,
            weight: 220,
            id: 7,
            image: 'nachos.jpg',
            cat_id: 2,
            description: 'Супер наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          },
          {
            name: 'Картошка фри',
            price: 245,
            weight: 180,
            id: 8,
            image: 'free.jpg',
            cat_id: 2,
            description: 'Супер  наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          },
          {
            name: 'Луковые кольца',
            price: 230,
            weight: 160,
            id: 9,
            image: 'rings.jpg',
            cat_id: 2,
            description: 'Супер  наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          },
          {
            name: 'Домашний хот-дог',
            price: 290,
            weight: 250,
            id: 10,
            image: 'home-dog.jpg',
            cat_id: 3,
            description: 'Супер  наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          },
          {
            name: 'Жгучий хот-дог',
            price: 239,
            weight: 245,
            id: 11,
            image: 'spice-dog.jpg',
            cat_id: 3,
            description: 'Супер  наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          },
          {
            name: 'Классический хот-дог',
            price: 220,
            weight: 215,
            id: 12,
            image: 'classic-dog.jpg',
            cat_id: 3,
            description: 'Супер  наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          },
          {
            name: 'Комбо',
            price: 220,
            weight: 215,
            id: 13,
            image: 'classic-dog.jpg',
            cat_id: 4,
            description: 'Супер  наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          },
          {
            name: 'Шаурма',
            price: 220,
            weight: 215,
            id: 14,
            image: 'classic-dog.jpg',
            cat_id: 5,
            description: 'Супер  наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          },
          {
            name: 'Пицца',
            price: 220,
            weight: 215,
            id: 15,
            image: 'classic-dog.jpg',
            cat_id: 6,
            description: 'Супер  наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          },
          {
            name: 'Вок',
            price: 220,
            weight: 215,
            id: 16,
            image: 'classic-dog.jpg',
            cat_id: 7,
            description: 'Супер  наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          },
          {
            name: 'Десерты',
            price: 220,
            weight: 215,
            id: 17,
            image: 'classic-dog.jpg',
            cat_id: 8,
            description: 'Супер  наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          },
          {
            name: 'Соусы',
            price: 220,
            weight: 215,
            id: 18,
            image: 'classic-dog.jpg',
            cat_id: 9,
            description: 'Супер  наслаждение!',
            structure: ['колбаса', 'огурец', 'помидор'],
            calories: '430'
          }
        ]
      ) 
    }, 2000)
  })
}

export const getFilters = () => {
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      resolve(
        [          
          {
            name: 'Бургеры',
            id: 1,
            image: 'Бургеры.svg'
          },
          {
            name: 'Закуски',
            id: 2,
            image: 'Закуски.svg'
          },
          {
            name: 'Хот-доги',
            id: 3,
            image: 'Хот-доги.svg'
          },
          {
            name: 'Комбо',
            id: 4,
            image: 'Комбо.svg'
          },
          {
            name: 'Шаурма',
            id: 5,
            image: 'Шаурма.svg',
          },
          {
            name: 'Пицца',
            id: 6,
            image: 'Пицца.svg'
          },
          {
            name: 'Вок',
            id: 7,
            image: 'Вок.svg'
          },
          {
            name: 'Десерты',
            id: 8,
            image: 'Десерты.svg'
          },
          {
            name: 'Соусы',
            id: 9,
            image: 'Соусы.svg'
          }          
        ]
      ) 
    }, 2000)
  })
}