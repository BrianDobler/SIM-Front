import { ActivityModel } from './Activity.model';

export class MontecarloBody {
    // This class represents a model of the body objetct used to make a post request to the api.
    numberOfSimulations: number;
    generatorType: string;
    generatorParameters: {
        a: number,
        c: number,
        mod: number,
        seed:number
    };
    activities: ActivityModel[];
}