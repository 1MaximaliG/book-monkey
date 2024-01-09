import { Injectable } from '@angular/core';
import { Book } from './book';
@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  private books: Book[] = [];

  constructor() {
    this.books = [
      {
        isbn: '1234',
        title: 'Tierisch gut Kochen',
        authors: ['Mrs Chimp', 'Mr Gorilla'],
        published: '2022-06-20',
        subtitle: 'Rezepte von Affe bis Zebra',
        thumbnailUrl: 'https://cdn.ng-buch.de/kochen.png',
        describtion: 'Immer lecker und gut',
      },
      {
        isbn: '67890',
        title: 'Backen mit Affen',
        authors: ['Orang Utan'],
        published: '2022-07-15',
        subtitle: 'Bananenbrot und mehr',
        thumbnailUrl: 'https://cdn.ng-buch.de/backen.png',
        describtion: 'Affige dinge',
      },
    ];
  }
  getAll(): Book[] {
    return this.books;
  }
}
