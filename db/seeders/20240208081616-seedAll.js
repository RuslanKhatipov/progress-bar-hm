const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'Администратор', email: 'admin@admin', password: await bcrypt.hash('123', 10), isAdmin: true,
      },
      {
        username: 'Юзер', email: 'user@user', password: await bcrypt.hash('123', 10), isAdmin: false,
      },

    ], {});
    await queryInterface.bulkInsert('Positions', [
      {
        position: 'Разработчик',
      },
      {
        position: 'Менеджер',
      },
      {
        position: 'Уборщик',
      },

    ], {});
    await queryInterface.bulkInsert('Ankets', [
      {
        name: 'Иван Иванов', email: 'ivan@ivan', posId: 1, url: 'localhost3000/list/1',
      },
      {
        name: 'Петр Петров', email: 'petr@petr', posId: 2, url: 'localhost3000/list/2',
      },
      {
        name: 'Сидор Сидоров', email: 'sidor@sidor', posId: 3, url: 'localhost3000/list/3',
      },

    ], {});
    await queryInterface.bulkInsert('Questions', [
      {
        question: 'Наставник выдал мне пропуск',
        posId: 1,
      },
      {
        question: 'Наставник сообщил пароль от Wi-Fi',
        posId: 1,
      },
      {
        question: 'Системный администратор выдал мне ноутбук',
        posId: 1,
      },
      {
        question: 'Системный администратор выдал мне доступы к почте',
        posId: 1,
      },
      {
        question: 'Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии',
        posId: 1,
      },
      {
        question: 'Ты познакомился (-ась) со своим руководителем',
        posId: 1,
      },
      {
        question: 'Ты написал(-а) сообщение в командный чат',
        posId: 1,
      },
      {
        question: 'Напиши имена трех твоих коллег по отделу: ____________',
        posId: 1,
      },
      {
        question: 'Ты отправил (-а)  сканды документы на оформление в отдел кадров',
        posId: 1,
      },
      {
        question: 'Ты подписал (-а) соглашение о коммерческой тайне',
        posId: 1,
      },
      {
        question: 'Получи свою первую задачу у руководителя',
        posId: 1,
      },
      {
        question: 'Создай подпись в почте по корпоративному шаблону',
        posId: 1,
      },
    ], {});
    await queryInterface.bulkInsert('Answers', [
      {
        anketId: 1, questId: 1, answer: 'true',
      },
      {
        anketId: 1, questId: 2, answer: 'true',
      },
      {
        anketId: 1, questId: 3, answer: 'true',
      },
      {
        anketId: 1, questId: 4, answer: 'true',
      },
    ], {});

    await queryInterface.bulkInsert('Lists', [
      {
        userId: 1, anketId: 1,
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
  },
};
