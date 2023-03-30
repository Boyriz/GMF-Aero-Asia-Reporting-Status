import { IsNotEmpty } from "class-validator";

export class FileLocationDto{
    @IsNotEmpty()
    functionalLocation: string;
}