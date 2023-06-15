import { IsString, IsNotEmpty, IsISO8601, IsEnum } from 'class-validator';
import { Language } from '../../shared/shared.type';
import { ApiProperty } from '@nestjs/swagger';

export class DetailStandardRequestBodyDTO {
    @ApiProperty({ example: '2d43-d3ae-22d2-5d2d' })
    @IsString()
    @IsNotEmpty()
    activityId: string;

    @ApiProperty({ example: '2023-06-16' })
    @IsISO8601()
    @IsNotEmpty()
    from: string;

    @ApiProperty({ example: '2023-06-17' })
    @IsISO8601()
    @IsNotEmpty()
    to: string;

    @ApiProperty({ enum: Language })
    @IsEnum(Language)
    @IsNotEmpty()
    language: Language;
}
