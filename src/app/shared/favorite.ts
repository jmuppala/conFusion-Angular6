import { Dish } from './dish';
import { User } from './user';

export class Favorite {
    _id: string;
    user: User;
    dishes: Dish[];
    createdAt: string;
    updatedAt: string;
}
