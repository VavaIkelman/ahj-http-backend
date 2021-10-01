module.exports =  class Tickets {
  constructor() {
    this.tickets = [];

    this.tickets.push(
      {
        id: 1,
        name: 'Заменить белый картридж в принтере',
        description: 'Закончилась белая краска для черной бухгалтерии',
        status: '0',
        created: '1633095112706',
      },
      {
        id: 2,
        name: 'Переустановить настроение',
        description: 'Надо подумать над обновлением коллектива',
        status: '0',
        created: '1633095112808',
      },
      {
        id: 3,
        name: 'Поменять плейлист',
        description: 'Заменить плейлист на корпоративном радиовещании. Добавить хардрока',
        status: '1',
        created: '1633095112910',
      },
    );
  }

  allTickets() {
    const ticketsShort = this.tickets.map(({
      id, name, status, created,
    }) => ({
      id, name, status, created,
    }));
    return ticketsShort;
  }

  ticketById(id) {
    return this.tickets.find((ticket) => ticket.id === +id);
  }

  createTicket(name, description) {
    const maxId = this.tickets.reduce((acc, curr) => (acc.id > curr.id ? acc.id : curr.id));
    this.tickets.push(
      {
        id: maxId + 1,
        name,
        description,
        status: 0,
        created: Date.now(),
      },
    );
  }

  deleteTicket(id) {
    const ticketIndex = this.tickets.findIndex((ticket) => ticket.id === id);
    this.tickets.splice(ticketIndex, 1);
  }

  changeStatus(id) {
    const ticket = this.tickets.find((ticket) => ticket.id === id);
    ticket.status = 1 - ticket.status;
  }

  editTicket(id, name, description) {
    const ticket = this.tickets.find((ticket) => ticket.id === id);
    ticket.name = name;
    ticket.description = description;
  }
}