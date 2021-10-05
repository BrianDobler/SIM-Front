import { FormControl, FormGroup, Validators } from '@angular/forms';

export class Activity {
    // This class handles an activity. Made for handling ngFor on html.
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
        this.setDistributionForm(this.valueA, this.valueB);
    };

    selectDistribution = (value: string): void => {
        // Select the distribution to use.
        this.distributionType = value;
        this.setDistributionForm();
    };

    setDistributionForm = (valueA?: number, valueB?: number): void => {
        // Depends on the type of distribution that is selected. 
        // Set certain distribution form.
        if (this.distributionType === 'uniform') {
            this.distributionForm =  new FormGroup({
                A: new FormControl((valueA !==  null) ? valueA : '', [Validators.required]),
                B: new FormControl((valueB !==  null) ? valueB : '', [Validators.required])
            });   
        } else if (this.distributionType === 'normal') {
            this.distributionForm =  new FormGroup({
                mu: new FormControl((valueA !==  null) ? valueA : '', [Validators.required, Validators.min(0)]),
                sigma: new FormControl((valueB !==  null) ? valueB : '', [Validators.required, Validators.min(0)])
            });
        } else if (this.distributionType === 'exponential') {
            this.distributionForm =  new FormGroup({
                lambda: new FormControl((valueA !==  null) ? valueA : '', [Validators.required, Validators.min(0)])
            });
        }
    };
};
