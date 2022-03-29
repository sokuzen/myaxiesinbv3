import { AxiePart } from "./AxiePart";

export interface Axie {
    id: string;
    image: string;
    // class: string;
    // chain: string;
    // genes: string;
    // owner: string;
    // birthDate: number;
    // bodyShape: string;
    // sireId: string;
    // sireClass: string;
    // matronId: string;
    // matronClass: string;
    // stage: string;
    // title: string;
    // breedCount: string;
    // level: string;
    parts: AxiePart[];
}