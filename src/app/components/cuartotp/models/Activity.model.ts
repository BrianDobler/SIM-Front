export class ActivityModel {
    // Model of an activity.
    // This is the data needed to simulate the activity on the backend.
    name: string;
    distributionName: string;
    distribution: any

    constructor (name: string, distributionName: string, distribution: any) {
        this.name = name;
        this.distributionName = distributionName;
        this.distribution = distribution;
    }
}