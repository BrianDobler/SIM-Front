export class ActivityModel {
    // Model of an activity.
    // This is the data needed to simulate the activity on the backend.
    name: string;
    distribution: any

    constructor (name: string, distribution: any) {
        this.name = name;
        this.distribution = distribution;
    }
}