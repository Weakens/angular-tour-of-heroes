import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 1, name: 'Mr. Accurato', logo: 'xXx' },
        { id: 2, name: 'Bombasto', logo: '<<o>>' },
        { id: 3, name: 'Speedo', logo: '>>>' },
        { id: 4, name: 'Celeritas', logo: '' },
        { id: 5, name: 'Vulcano', logo: '/|\\' },
        { id: 6, name: 'RubberMan', logo: '~o~' },
        { id: 7, name: 'Teleporto', logo: '.:\'' },
        { id: 8, name: 'Dr IQ', logo: '[3.14]' },
        { id: 9, name: 'Magmato', logo: '(/\)' },
        { id: 10, name: 'Tornado', logo: '(|()|)' }
    ];
    return {heroes};
  }
}
