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
        name: 'Иван Иванов', email: 'ivan@ivan', posId: 1, url: 'tretert',
      },
      {
        name: 'Петр Петров', email: 'petr@petr', posId: 2, url: 'fgsderer',
      },
      {
        name: 'Сидор Сидоров', email: 'sidor@sidor', posId: 3, url: 'reseresrser',
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
      {
        question: 'Верно ли, что руководитель должен обладать определенными лидерскими качествами?',
        posId: 2,
      },
      {
        question: 'Какие навыки необходимы руководителю для эффективного управления командой?',
        posId: 2,
      },
      {
        question: 'Что делать, если возникают конфликты между сотрудниками под вашим руководством?',
        posId: 2,
      },
      {
        question: 'Как вы оцениваете свои навыки в области управления проектами?',
        posId: 2,
      },
      {
        question: 'Как вы поощряете и мотивируете свою команду к достижению высоких результатов?',
        posId: 2,
      },
      {
        question: 'Вы имели опыт разработки стратегических планов для вашего отдела/компании?',
        posId: 3,
      },
      {
        question: 'Какие методы вы используете для оптимизации процессов уборки?',
        posId: 3,
      },
      {
        question: 'Как вы подходите к обеспечению чистоты и порядка на рабочем месте?',
        posId: 3,
      },
      {
        question: 'Как вы реагируете на запросы клиентов или сотрудников относительно состояния уборки?',
        posId: 3,
      },
      {
        question: 'Какие меры безопасности вы принимаете при выполнении своих обязанностей?',
        posId: 3,
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
