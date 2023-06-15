import { BookingStatus, CancellationPolicy } from '../../shared/shared.type';
export declare class CancelProviderInformationNameResponseDTO {
    name: string;
}
export declare class CancelSupplierResponseDTO {
    name: string;
    vatNumber: string;
}
export declare class CancelAmountDetailPaxAmountResponseDTO {
    paxType: string;
    amount: number;
}
export declare class CancelAmountDetailTotalAmountResponseDTO {
    amount: number;
}
export declare class CancelAmountDetailResponseDTO {
    paxAmounts: CancelAmountDetailPaxAmountResponseDTO[];
    totalAmount: CancelAmountDetailTotalAmountResponseDTO;
}
export declare class CancelAnswerQuestionResponseDTO {
    code: string;
    text: string;
}
export declare class CancelAnswerResponseDTO {
    question: CancelAnswerQuestionResponseDTO;
    answer: string;
}
export declare class CancelPaxResponseDTO {
    customerId: string;
    name: string;
    middlename: string;
    surname: string;
    title: string;
    age: number;
    nationality: string;
    paxType: string;
    passport: string;
}
export declare class CancelPackageResponseDTO {
    packageId: string;
    packageName: string;
}
export declare class CancelCommentResponseDTO {
    type: string;
    text: string;
}
export declare class CancelActivityResponseDTO {
    status: BookingStatus;
    activityReference: string;
    activityId: string;
    activityName: string;
    comments: CancelCommentResponseDTO[];
    package: CancelPackageResponseDTO;
    paxes: CancelPaxResponseDTO[];
    answers: CancelAnswerResponseDTO[];
    dateFrom: string;
    dateTo: string;
    cancellationPolicies: CancellationPolicy[];
    amountDetails: CancelAmountDetailResponseDTO;
    providerInformation: CancelProviderInformationNameResponseDTO | null;
    supplier: CancelSupplierResponseDTO | null;
    files: string[];
}
export declare class CancelBookingHolder {
    name: string;
    middlename: string;
    surname: string;
    title: string;
    nationality: string;
    email: string;
    phones: string[];
}
export declare class CancelDataStandardResponseDTO {
    bookingReference: string;
    clientReference: string;
    currency: string;
    amount: number;
    status: BookingStatus;
    bookingHolder: CancelBookingHolder;
    activities: CancelActivityResponseDTO[];
    creationDate: string;
    cancellationDate: string;
    cancelValuationAmount: number;
}
export declare class CancelStandardResponseDTO {
    success: boolean;
    identifier: string;
    data: CancelDataStandardResponseDTO;
}
