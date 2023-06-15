import { IsString, IsNotEmpty, IsNumber, IsISO8601, IsEnum, ValidateNested } from 'class-validator';
import { Language } from '../../shared/shared.type';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PaginationSearchStandardRequestBodyDTO {
    @ApiProperty({ example: 10 })
    @IsNumber()
    @IsNotEmpty()
    itemsPerPage: number;

    @ApiProperty({ example: 1 })
    @IsNumber()
    @IsNotEmpty()
    page: number;
}

export class SearchStandardRequestBodyDTO {
    @ApiProperty({ example: 'Bangkok' })
    @IsString()
    @IsNotEmpty()
    keyword: string;

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

    @ApiProperty({ type: PaginationSearchStandardRequestBodyDTO })
    @ValidateNested()
    @Type(() => PaginationSearchStandardRequestBodyDTO)
    pagination: PaginationSearchStandardRequestBodyDTO;
}
