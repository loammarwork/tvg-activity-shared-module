import { IsString, IsNotEmpty, IsISO8601, IsEnum } from 'class-validator';
import { Language } from '../../shared/shared.type';
import { ApiProperty } from '@nestjs/swagger';

export class DetailStandardRequestBodyDTO {
    @IsString()
    @IsNotEmpty()
    activityId: string;

    @IsISO8601()
    @IsNotEmpty()
    from: string;

    @IsISO8601()
    @IsNotEmpty()
    to: string;

    @ApiProperty({ enum: Language })
    @IsEnum(Language)
    @IsNotEmpty()
    language: Language;
}
