import { IsNotEmpty, IsNumber } from "class-validator";

export class FileLifeDto{
    @IsNotEmpty()
    @IsNumber()
    lifeRemaining: number;
}