import { FormControl, FormGroup, Validators } from '@angular/forms';

export class Activity {
    // This class handles an activity. Made for handling ngfor on html.
    name: string;
    distributionType: string;
    distributionForm: FormGroup
    valueA: number;
    valueB: number;

    constructor(name: string, distribution: string = '', valueA: number, valueB?: number) {
        this.name = name;
        this.distributionType = distribution;
        this.valueA = valueA;

        if (valueB !== undefined) {
            this.valueB = valueB;
        }
        this.setDistributionForm();
    };

    selectDistribution = (value: string): void => {
        // Select the distribution to use.
        this.distributionType = value;
    };

    setDistributionForm = (): void => {
        // Depends on the type of distribution that is selected. 
        // Set certain distribution form.
        if (this.distributionType === 'uniform') {
            this.distributionForm =  new FormGroup({
                A: new FormControl(this.valueA, [Validators.required]),
                B: new FormControl(this.valueB, [Validators.required])
            });   
        } else if (this.distributionType === 'normal') {
            this.distributionForm =  new FormGroup({
                mu: new FormControl(this.valueA, [Validators.required, Validators.min(0)]),
                sigma: new FormControl(this.valueB, [Validators.required, Validators.min(0)])
            });
        } else if (this.distributionType === 'exponential') {
            this.distributionForm =  new FormGroup({
                lambda: new FormControl(this.valueA, [Validators.required, Validators.min(0)])
            });
        }
    };
};
