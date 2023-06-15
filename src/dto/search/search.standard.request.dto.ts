import { IsString, IsNotEmpty, IsNumber, IsISO8601, IsEnum, ValidateNested } from 'class-validator';
import { Language } from '../../shared/shared.type';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class PaginationSearchStandardRequestBodyDTO {
    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    itemsPerPage: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    page: number;
}

export class SearchStandardRequestBodyDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    keyword: string;

    @ApiProperty()
    @IsISO8601()
    @IsNotEmpty()
    from: string;

    @ApiProperty()
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
