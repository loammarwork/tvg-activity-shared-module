import { BookingStatus, CancellationPolicy } from '../../shared/shared.type';
import { ApiProperty } from '@nestjs/swagger';

export class ReconfirmProviderInformationNameResponseDTO {
    @ApiProperty()
    name: string;
}

export class ReconfirmSupplierResponseDTO {
    @ApiProperty()
    name: string;
    @ApiProperty()
    vatNumber: string;
}

export class ReconfirmAmountDetailPaxAmountResponseDTO {
    @ApiProperty()
    paxType: string;
    @ApiProperty()
    amount: number;
}
export class ReconfirmAmountDetailTotalAmountResponseDTO {
    @ApiProperty()
    amount: number;
}

export class ReconfirmAmountDetailResponseDTO {
    @ApiProperty({ type: [ReconfirmAmountDetailPaxAmountResponseDTO] })
    paxAmounts: ReconfirmAmountDetailPaxAmountResponseDTO[];
    @ApiProperty({ type: ReconfirmAmountDetailTotalAmountResponseDTO })
    totalAmount: ReconfirmAmountDetailTotalAmountResponseDTO;
}

export class ReconfirmAnswerQuestionResponseDTO {
    @ApiProperty()
    code: string;
    @ApiProperty()
    text: string;
}

export class ReconfirmAnswerResponseDTO {
    @ApiProperty({ type: ReconfirmAnswerQuestionResponseDTO })
    question: ReconfirmAnswerQuestionResponseDTO;
    @ApiProperty()
    answer: string;
}

export class ReconfirmPaxResponseDTO {
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

export class ReconfirmPackageResponseDTO {
    @ApiProperty()
    packageId: string;
    @ApiProperty()
    packageName: string;
}

export class ReconfirmCommentResponseDTO {
    @ApiProperty()
    type: string;
    @ApiProperty()
    text: string;
}

export class ReconfirmActivityResponseDTO {
    @ApiProperty({ enum: BookingStatus })
    status: BookingStatus;
    @ApiProperty()
    activityReference: string;
    @ApiProperty()
    activityId: string;
    @ApiProperty()
    activityName: string;
    @ApiProperty({ type: [ReconfirmCommentResponseDTO] })
    comments: ReconfirmCommentResponseDTO[];
    @ApiProperty({ type: ReconfirmPackageResponseDTO })
    package: ReconfirmPackageResponseDTO;
    @ApiProperty({ type: [ReconfirmPaxResponseDTO] })
    paxes: ReconfirmPaxResponseDTO[];
    @ApiProperty({ type: [ReconfirmAnswerResponseDTO] })
    answers: ReconfirmAnswerResponseDTO[];
    @ApiProperty()
    dateFrom: string;
    @ApiProperty()
    dateTo: string;
    @ApiProperty({ type: [CancellationPolicy] })
    cancellationPolicies: CancellationPolicy[];
    @ApiProperty({ type: ReconfirmAmountDetailResponseDTO })
    amountDetails: ReconfirmAmountDetailResponseDTO;
    @ApiProperty({ oneOf: [{ $ref: '#/components/schemas/ReconfirmProviderInformationNameResponseDTO' }, { type: 'null' }] })
    providerInformation: ReconfirmProviderInformationNameResponseDTO | null;
    @ApiProperty({ oneOf: [{ $ref: '#/components/schemas/ReconfirmSupplierResponseDTO' }, { type: 'null' }] })
    supplier: ReconfirmSupplierResponseDTO | null;
    @ApiProperty({ type: [String] })
    files: string[];
}

export class ReconfirmBookingHolder {
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

export class ReconfirmDataStandardResponseDTO {
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
    @ApiProperty({ type: ReconfirmBookingHolder })
    bookingHolder: ReconfirmBookingHolder;
    @ApiProperty({ type: [ReconfirmActivityResponseDTO] })
    activities: ReconfirmActivityResponseDTO[];
    @ApiProperty()
    creationDate: string;
}

export class ReconfirmStandardResponseDTO {
    @ApiProperty()
    success: boolean;
    @ApiProperty()
    identifier: string;
    @ApiProperty({ type: ReconfirmDataStandardResponseDTO })
    data: ReconfirmDataStandardResponseDTO;
}
