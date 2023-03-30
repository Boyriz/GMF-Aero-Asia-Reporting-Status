import { IsNotEmpty } from "class-validator";

export class FilePartnumDto{
    @IsNotEmpty()
    partNumber: string;
}