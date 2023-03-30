import { IsNotEmpty, IsNumber } from "class-validator";

export class FileTSNDto{
    @IsNotEmpty()
    @IsNumber()
    tsnHRS: number;
    
    @IsNotEmpty()
    @IsNumber()
    tsnCYC: number;
}