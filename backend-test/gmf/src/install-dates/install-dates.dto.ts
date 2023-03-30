import { IsNotEmpty } from "class-validator";

export class FileDateDto{
    @IsNotEmpty()
    installDate: Date;
}