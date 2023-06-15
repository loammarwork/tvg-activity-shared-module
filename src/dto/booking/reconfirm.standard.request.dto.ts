import { IsString, IsNotEmpty } from 'class-validator';

export class ReconfirmStandardRequestBodyDTO {
    @IsString()
    @IsNotEmpty()
    bookingReference: string;
}
