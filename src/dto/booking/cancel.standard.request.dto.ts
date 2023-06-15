import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CancelStandardRequestBodyDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    bookingReference: string;
}
