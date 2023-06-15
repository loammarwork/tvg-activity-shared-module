import { IsString, IsNotEmpty } from 'class-validator';
export class CancelStandardRequestBodyDTO {
    @IsString()
    @IsNotEmpty()
    bookingReference: string;
}
