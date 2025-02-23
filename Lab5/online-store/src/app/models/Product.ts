export interface Product {
    id: number;
    name: string;
    description: string;
    rating: number;
    image: string;
    link: string;
    gallery?: string[];
    like: number;
    categoryId: number;
}
