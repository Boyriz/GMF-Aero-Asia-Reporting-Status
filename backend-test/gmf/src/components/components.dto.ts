import { IsIn, IsNotEmpty } from "class-validator";

const status = [
    'time-controlled',
    'non-time-controlled'
]

export class FileComponentDto{
    @IsNotEmpty()
    @IsIn(status)
    status: string
}