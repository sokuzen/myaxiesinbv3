import { AxieCardAbility } from "./AxieCardAbility";

export interface AxiePart {
    id: string;
    name: string;
    class: string;
    type: string;
    abilities: AxieCardAbility[];
}