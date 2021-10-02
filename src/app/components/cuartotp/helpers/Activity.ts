import { FormControl, FormGroup, Validators } from '@angular/forms';

export class Activity {
    // This class handles an activity. Made for handling ngfor on html.
    name: string;
    distributionType: string;
    distributionForm: FormGroup

    constructor(name: string, distribution: string = '') {
        this.name = name;
        this.distributionType = distribution;
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
                A: new FormControl(20, Validators.required),
                B: new FormControl(40, Validators.required)
            });   
        } else if (this.distributionType === 'normal') {
            this.distributionForm =  new FormGroup({
                mu: new FormControl(20, Validators.required),
                sigma: new FormControl(30, Validators.required)
            });
        } else if (this.distributionType === 'exponential') {
            this.distributionForm =  new FormGroup({
                lambda: new FormControl(20, Validators.required)
            });
        }
    };
};
