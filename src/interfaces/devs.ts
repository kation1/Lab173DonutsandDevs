export interface Complete {
    firstName: string;
    lastName: string;
    innovation: string;
    year: number;
}

export interface Tiny {
    name: string;
    invented: string;
    year: number;
}

export interface Example {
    complete: Complete[];
    tiny: Tiny[];
}