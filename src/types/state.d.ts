declare namespace State {
  interface Movie {
    name: string;
    year: number;
    genres: string[];
    ageLimit: number;
    rating: number;
    actors: Person[];
    director: Person;
    synopsis: string;
  }

  interface Person {
    firstName: string;
    lastName: string;
  }
}
