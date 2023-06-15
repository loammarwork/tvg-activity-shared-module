import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class ReconfirmStandardRequestBodyDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    bookingReference: string;
}
