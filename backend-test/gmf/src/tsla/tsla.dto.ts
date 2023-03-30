import { IsNotEmpty, IsNumber } from "class-validator";

export class FileTSLADto{
    @IsNotEmpty()
    @IsNumber()
    tslaHRS: number;

    @IsNotEmpty()
    @IsNumber()
    tslaCYC: number;

    @IsNotEmpty()
    @IsNumber()
    tslaDAYS: number;
}