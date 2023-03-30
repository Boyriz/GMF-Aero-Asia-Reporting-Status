import { IsNotEmpty } from "class-validator";

export class FileDescriptionDto{
    @IsNotEmpty()
    description: string;
}