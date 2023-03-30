import { IsIn, IsNotEmpty } from "class-validator";

const actype = [
    'ATR72-600',
    'B737-Max',
    'B737-800',
    'B737CL',
    'A330-343',
    'A330-NEO',
    'B777-300ER',
    'ATR72-600',
    'A320-200',
    'B737-800',
    'A330-341',
    'A330-243',
    'A330-343',
    'A320-200',
    'CRJ1000',
    'A320-NEO',
];

export class FileActypesDto{
    @IsNotEmpty()
    @IsIn(actype)
    acType: string
}