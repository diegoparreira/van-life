type VanTypes = "simple" | "luxury" | "rugged";

export type Van = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    type: VanTypes;
};
