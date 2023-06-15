import { IsString, IsNotEmpty } from 'class-validator';
export class CancelStandardResponseBodyDTO {
    @IsString()
    @IsNotEmpty()
    bookingReference: string;
}
