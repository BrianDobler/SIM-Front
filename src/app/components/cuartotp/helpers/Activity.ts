export class Activity {
    name: string;
    distributionType: string = '';

    constructor(name: string) {
        this.name = name;
    };

    selectDistribution = (value: string): void => {
        this.distributionType = value;
    };
};
