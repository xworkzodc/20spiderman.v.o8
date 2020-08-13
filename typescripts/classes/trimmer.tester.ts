import { Trimmer } from './trimmer.module';


let trim: Trimmer = new Trimmer(3);
console.log(trim.lengthAdjustment);

trim.lengthAdjustment = 4;

trim.trimHair('Beard', 3);
