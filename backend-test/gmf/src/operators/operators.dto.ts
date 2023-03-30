import { IsIn, IsNotEmpty } from "class-validator";

const operator = [
    'Garuda',
    'Citilink'
];

export class FileOperatorDto {
    @IsNotEmpty()
    @IsIn(operator)
    operator: string
}