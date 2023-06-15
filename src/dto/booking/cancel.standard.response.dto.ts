import { BookingStatus, CancellationPolicy } from '../../shared/shared.type';
import { ApiProperty } from '@nestjs/swagger';

export class CancelProviderInformationNameResponseDTO {
    @ApiProperty()
    name: string;
}

export class CancelSupplierResponseDTO {
    @ApiProperty()
    name: string;
    @ApiProperty()
    vatNumber: string;
}

export class CancelAmountDetailPaxAmountResponseDTO {
    @ApiProperty()
    paxType: string;
    @ApiProperty()
    amount: number;
}
export class CancelAmountDetailTotalAmountResponseDTO {
    @ApiProperty()
    amount: number;
}

export class CancelAmountDetailResponseDTO {
    @ApiProperty({ type: [CancelAmountDetailPaxAmountResponseDTO] })
    paxAmounts: CancelAmountDetailPaxAmountResponseDTO[];
    @ApiProperty({ type: CancelAmountDetailTotalAmountResponseDTO })
    totalAmount: CancelAmountDetailTotalAmountResponseDTO;
}

export class CancelAnswerQuestionResponseDTO {
    @ApiProperty()
    code: string;
    @ApiProperty()
    text: string;
}

export class CancelAnswerResponseDTO {
    @ApiProperty({ type: CancelAnswerQuestionResponseDTO })
    question: CancelAnswerQuestionResponseDTO;
    @ApiProperty()
    answer: string;
}

export class CancelPaxResponseDTO {
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

export class CancelPackageResponseDTO {
    @ApiProperty()
    packageId: string;
    @ApiProperty()
    packageName: string;
}

export class CancelCommentResponseDTO {
    @ApiProperty()
    type: string;
    @ApiProperty()
    text: string;
}

export class CancelActivityResponseDTO {
    @ApiProperty({ enum: BookingStatus })
    status: BookingStatus;
    @ApiProperty()
    activityReference: string;
    @ApiProperty()
    activityId: string;
    @ApiProperty()
    activityName: string;
    @ApiProperty({ type: [CancelCommentResponseDTO] })
    comments: CancelCommentResponseDTO[];
    @ApiProperty({ type: CancelPackageResponseDTO })
    package: CancelPackageResponseDTO;
    @ApiProperty({ type: [CancelPaxResponseDTO] })
    paxes: CancelPaxResponseDTO[];
    @ApiProperty({ type: [CancelAnswerResponseDTO] })
    answers: CancelAnswerResponseDTO[];
    @ApiProperty()
    dateFrom: string;
    @ApiProperty()
    dateTo: string;
    @ApiProperty({ type: [CancellationPolicy] })
    cancellationPolicies: CancellationPolicy[];
    @ApiProperty({ type: CancelAmountDetailResponseDTO })
    amountDetails: CancelAmountDetailResponseDTO;
    @ApiProperty({ oneOf: [{ $ref: '#/components/schemas/CancelProviderInformationNameResponseDTO' }, { type: 'null' }] })
    providerInformation: CancelProviderInformationNameResponseDTO | null;
    @ApiProperty({ oneOf: [{ $ref: '#/components/schemas/CancelSupplierResponseDTO' }, { type: 'null' }] })
    supplier: CancelSupplierResponseDTO | null;
    @ApiProperty({ type: [String] })
    files: string[];
}

export class CancelBookingHolder {
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

export class CancelDataStandardResponseDTO {
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
    @ApiProperty({ type: CancelBookingHolder })
    bookingHolder: CancelBookingHolder;
    @ApiProperty({ type: [CancelActivityResponseDTO] })
    activities: CancelActivityResponseDTO[];
    @ApiProperty()
    creationDate: string;
    @ApiProperty()
    cancellationDate: string;
    @ApiProperty()
    cancelValuationAmount: number;
}

export class CancelStandardResponseDTO {
    @ApiProperty()
    success: boolean;
    @ApiProperty()
    identifier: string;
    @ApiProperty({ type: CancelDataStandardResponseDTO })
    data: CancelDataStandardResponseDTO;
}
