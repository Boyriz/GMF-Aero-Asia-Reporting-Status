import { IsNotEmpty } from "class-validator";

export class FileSerialnumDto{
    @IsNotEmpty()
    serialNumber: string;
}