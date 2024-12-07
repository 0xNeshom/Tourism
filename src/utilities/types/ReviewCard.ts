export interface Review {
    id: number;
    user: {
        username: string;
      };
    date: string;
    text: string;
    rating: number;
    tour: string;
  }