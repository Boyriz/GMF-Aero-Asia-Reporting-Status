import { IsNotEmpty, IsNumber } from "class-validator";

export class FileNonTimeDto{
    @IsNotEmpty()
    functionalLocation: string;

    @IsNotEmpty()
    partNumber: string;

    @IsNotEmpty()
    serialNumber: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    task: string;

    @IsNotEmpty()
    @IsNumber()
    mpNumberId: number;

    @IsNotEmpty()
    installDate: Date;

    @IsNotEmpty()
    @IsNumber()
    tsnHRS: number;

    @IsNotEmpty()
    @IsNumber()
    tsnCYC: number;

    @IsNotEmpty()
    @IsNumber()
    intervalHRS: number;

    @IsNotEmpty()
    @IsNumber()
    intervalCYC: number;

    @IsNotEmpty()
    @IsNumber()
    intervalDAYS: number;

    @IsNotEmpty()
    @IsNumber()
    tslaHRS: number;

    @IsNotEmpty()
    @IsNumber()
    tslaCYC: number;

    @IsNotEmpty()
    @IsNumber()
    tslaDAYS: number;

    @IsNotEmpty()
    @IsNumber()
    lifeRemaining: number;
}