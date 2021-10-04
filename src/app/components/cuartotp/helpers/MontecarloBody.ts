import { Activity } from './Activity';

export class MontecarloBody {
    numberOfSimulations: number;
    generatorType: string;
    generatorParameters: {
        a: number,
        c: number,
        mod: number,
        seed:number
    };
    activities: Activity[];
}