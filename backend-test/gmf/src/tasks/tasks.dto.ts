import { IsNotEmpty } from "class-validator";

export class FileTaskDto{
    @IsNotEmpty()
    task: string;
}