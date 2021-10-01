export class Activity {
    name: string;
    distributionType: string;

    constructor(name: string, distribution: string = '') {
        this.name = name;
        this.distributionType = distribution;
    };

    selectDistribution = (value: string): void => {
        this.distributionType = value;
    };
};
