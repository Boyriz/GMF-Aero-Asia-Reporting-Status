import { IsNotEmpty, IsNumber } from "class-validator";

export class FileIntervalDto{
    @IsNotEmpty()
    @IsNumber()
    intervalHRS: number;

    @IsNotEmpty()
    @IsNumber()
    intervalCYC: number;
    @IsNotEmpty()
    @IsNumber()
    intervalDAYS: number;
}