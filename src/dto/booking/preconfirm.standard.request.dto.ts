import { IsString, ValidateNested, IsNumber, IsOptional, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PreconfirmHolderStandardRequestBodyDTO {
    @ApiProperty()
    @IsString()
    name: string;
    @ApiProperty()
    @IsString()
    middlename: string;
    @ApiProperty()
    @IsString()
    surname: string;
    @ApiProperty()
    @IsString()
    title: string;
    @ApiProperty()
    @IsString()
    email: string;
    @ApiProperty()
    @IsString()
    address: string;
    @ApiProperty()
    @IsString()
    zipCode: string;
    @ApiProperty({ type: [String] })
    @IsString({ each: true })
    phones: string[];
    @ApiProperty()
    @IsString()
    nationality: string;
}

export class PreconfirmActivityDetailRequestBodyDTO {
    @ApiProperty()
    @IsString()
    rateKey: string;
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'null' }] })
    @IsOptional()
    @IsString()
    showTime: string | null;
}

export class PerconfirmQuestionRequestBodyDTO {
    @ApiProperty()
    @IsString()
    code: string;

    @ApiProperty()
    @IsString()
    text: string;
}

export class PreconfirmAnswerRequestBodyDTO {
    @ApiProperty({ type: PerconfirmQuestionRequestBodyDTO })
    @ValidateNested()
    @Type(() => PerconfirmQuestionRequestBodyDTO)
    question: PerconfirmQuestionRequestBodyDTO;
    @ApiProperty()
    @IsString()
    answer: string;
}

export class PreconfirmPaxAmountRequestBodyDTO {
    @ApiProperty()
    @IsString()
    paxType: string;
    @ApiProperty()
    @IsNumber()
    amount: number;
    @ApiProperty()
    @IsNumber()
    nettAmount: number;
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'null' }] })
    @IsNumber()
    @IsOptional()
    minPurchaseQty: number | null;
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'null' }] })
    @IsNumber()
    maxPurchaseQty: number | null;
    @ApiProperty()
    @IsOptional()
    amountDetails: any;
}

export class PreconfirmPaxRequestBodyDTO {
    @ApiProperty()
    @IsString()
    name: string;
    @ApiProperty()
    @IsString()
    middlename: string;
    @ApiProperty()
    @IsString()
    surname: string;
    @ApiProperty()
    @IsString()
    title: string;
    @ApiProperty()
    @IsString()
    email: string;
    @ApiProperty({ type: [String] })
    @IsString({ each: true })
    phones: string[];
    @ApiProperty()
    @IsString()
    nationality: string;
    @ApiProperty({ type: PreconfirmPaxAmountRequestBodyDTO })
    @ValidateNested()
    @Type(() => PreconfirmPaxAmountRequestBodyDTO)
    paxAmount: PreconfirmPaxAmountRequestBodyDTO;
}

export class PreconfirmActivityStandardRequestBodyDTO {
    @ApiProperty()
    @IsString()
    serviceDate: string;

    @ApiProperty({ type: PreconfirmActivityDetailRequestBodyDTO })
    @ValidateNested()
    @Type(() => PreconfirmActivityDetailRequestBodyDTO)
    activityDetail: PreconfirmActivityDetailRequestBodyDTO;

    @ApiProperty({ type: [PreconfirmAnswerRequestBodyDTO] })
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => PreconfirmAnswerRequestBodyDTO)
    answers?: PreconfirmAnswerRequestBodyDTO[];

    @ApiProperty({ type: [PreconfirmPaxRequestBodyDTO] })
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @Type(() => PreconfirmPaxRequestBodyDTO)
    paxes: PreconfirmPaxRequestBodyDTO[];
}

export class PreconfirmStandardRequestBodyDTO {
    @ApiProperty()
    @IsString()
    clientReference: string;

    @ApiProperty({ type: PreconfirmHolderStandardRequestBodyDTO })
    @ValidateNested()
    @Type(() => PreconfirmHolderStandardRequestBodyDTO)
    bookingHolder: PreconfirmHolderStandardRequestBodyDTO;

    @ApiProperty({ type: [PreconfirmActivityStandardRequestBodyDTO] })
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @Type(() => PreconfirmActivityStandardRequestBodyDTO)
    activities: PreconfirmActivityStandardRequestBodyDTO[];
}
