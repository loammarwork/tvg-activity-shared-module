import { BookingStatus, CancellationPolicy } from '../../shared/shared.type';
import { ApiProperty } from '@nestjs/swagger';

export class PreconfirmProviderInformationNameResponseDTO {
    @ApiProperty()
    name: string;
}

export class PreconfirmSupplierResponseDTO {
    @ApiProperty()
    name: string;
    @ApiProperty()
    vatNumber: string;
}

export class PreconfirmAmountDetailPaxAmountResponseDTO {
    @ApiProperty()
    paxType: string;
    @ApiProperty()
    amount: number;
}
export class PreconfirmAmountDetailTotalAmountResponseDTO {
    @ApiProperty()
    amount: number;
}

export class PreconfirmAmountDetailResponseDTO {
    @ApiProperty({ type: [PreconfirmAmountDetailPaxAmountResponseDTO] })
    paxAmounts: PreconfirmAmountDetailPaxAmountResponseDTO[];
    @ApiProperty({ type: PreconfirmAmountDetailTotalAmountResponseDTO })
    totalAmount: PreconfirmAmountDetailTotalAmountResponseDTO;
}

export class PreconfirmAnswerQuestionResponseDTO {
    @ApiProperty()
    code: string;
    @ApiProperty()
    text: string;
}

export class PreconfirmAnswerResponseDTO {
    @ApiProperty({ type: PreconfirmAnswerQuestionResponseDTO })
    question: PreconfirmAnswerQuestionResponseDTO;
    @ApiProperty()
    answer: string;
}

export class PreconfirmPaxResponseDTO {
    @ApiProperty()
    customerId: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    middlename: string;
    @ApiProperty()
    surname: string;
    @ApiProperty()
    title: string;
    @ApiProperty()
    age: number;
    @ApiProperty()
    nationality: string;
    @ApiProperty()
    paxType: string;
    @ApiProperty()
    passport: string;
}

export class PreconfirmPackageResponseDTO {
    @ApiProperty()
    packageId: string;
    @ApiProperty()
    packageName: string;
}

export class PreconfirmCommentResponseDTO {
    @ApiProperty()
    type: string;
    @ApiProperty()
    text: string;
}

export class PreconfirmActivityResponseDTO {
    @ApiProperty({ enum: BookingStatus })
    status: BookingStatus;
    @ApiProperty()
    activityReference: string;
    @ApiProperty()
    activityId: string;
    @ApiProperty()
    activityName: string;
    @ApiProperty({ type: [PreconfirmCommentResponseDTO] })
    comments: PreconfirmCommentResponseDTO[];
    @ApiProperty({ type: PreconfirmPackageResponseDTO })
    package: PreconfirmPackageResponseDTO;
    @ApiProperty({ type: [PreconfirmPaxResponseDTO] })
    paxes: PreconfirmPaxResponseDTO[];
    @ApiProperty({ type: [PreconfirmAnswerResponseDTO] })
    answers: PreconfirmAnswerResponseDTO[];
    @ApiProperty()
    dateFrom: string;
    @ApiProperty()
    dateTo: string;
    @ApiProperty({ type: [CancellationPolicy] })
    cancellationPolicies: CancellationPolicy[];
    @ApiProperty({ type: PreconfirmAmountDetailResponseDTO })
    amountDetails: PreconfirmAmountDetailResponseDTO;
    @ApiProperty({ oneOf: [{ $ref: '#/components/schemas/PreconfirmProviderInformationNameResponseDTO' }, { type: 'null' }] })
    providerInformation: PreconfirmProviderInformationNameResponseDTO | null;
    @ApiProperty({ oneOf: [{ $ref: '#/components/schemas/PreconfirmSupplierResponseDTO' }, { type: 'null' }] })
    supplier: PreconfirmSupplierResponseDTO | null;
    @ApiProperty({ type: [String] })
    files: string[];
}

export class PreconfirmBookingHolder {
    @ApiProperty()
    name: string;
    @ApiProperty()
    middlename: string;
    @ApiProperty()
    surname: string;
    @ApiProperty()
    title: string;
    @ApiProperty()
    nationality: string;
    @ApiProperty()
    email: string;
    @ApiProperty({ type: [String] })
    phones: string[];
}

export class PreconfirmDataStandardResponseDTO {
    @ApiProperty()
    bookingReference: string;
    @ApiProperty()
    clientReference: string;
    @ApiProperty()
    currency: string;
    @ApiProperty()
    amount: number;
    @ApiProperty({ enum: BookingStatus })
    status: BookingStatus;
    @ApiProperty({ type: PreconfirmBookingHolder })
    bookingHolder: PreconfirmBookingHolder;
    @ApiProperty({ type: [PreconfirmActivityResponseDTO] })
    activities: PreconfirmActivityResponseDTO[];
}

export class PreconfirmStandardResponseDTO {
    @ApiProperty()
    success: boolean;
    @ApiProperty()
    identifier: string;
    @ApiProperty({ type: PreconfirmDataStandardResponseDTO })
    data: PreconfirmDataStandardResponseDTO;
}
