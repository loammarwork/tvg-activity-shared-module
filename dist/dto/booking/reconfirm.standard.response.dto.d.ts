import { BookingStatus, CancellationPolicy } from '../../shared/shared.type';
export declare class ReconfirmProviderInformationNameResponseDTO {
    name: string;
}
export declare class ReconfirmSupplierResponseDTO {
    name: string;
    vatNumber: string;
}
export declare class ReconfirmAmountDetailPaxAmountResponseDTO {
    paxType: string;
    amount: number;
}
export declare class ReconfirmAmountDetailTotalAmountResponseDTO {
    amount: number;
}
export declare class ReconfirmAmountDetailResponseDTO {
    paxAmounts: ReconfirmAmountDetailPaxAmountResponseDTO[];
    totalAmount: ReconfirmAmountDetailTotalAmountResponseDTO;
}
export declare class ReconfirmAnswerQuestionResponseDTO {
    code: string;
    text: string;
}
export declare class ReconfirmAnswerResponseDTO {
    question: ReconfirmAnswerQuestionResponseDTO;
    answer: string;
}
export declare class ReconfirmPaxResponseDTO {
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
export declare class ReconfirmPackageResponseDTO {
    packageId: string;
    packageName: string;
}
export declare class ReconfirmCommentResponseDTO {
    type: string;
    text: string;
}
export declare class ReconfirmActivityResponseDTO {
    status: BookingStatus;
    activityReference: string;
    activityId: string;
    activityName: string;
    comments: ReconfirmCommentResponseDTO[];
    package: ReconfirmPackageResponseDTO;
    paxes: ReconfirmPaxResponseDTO[];
    answers: ReconfirmAnswerResponseDTO[];
    dateFrom: string;
    dateTo: string;
    cancellationPolicies: CancellationPolicy[];
    amountDetails: ReconfirmAmountDetailResponseDTO;
    providerInformation: ReconfirmProviderInformationNameResponseDTO | null;
    supplier: ReconfirmSupplierResponseDTO | null;
    files: string[];
}
export declare class ReconfirmBookingHolder {
    name: string;
    middlename: string;
    surname: string;
    title: string;
    nationality: string;
    email: string;
    phones: string[];
}
export declare class ReconfirmDataStandardResponseDTO {
    bookingReference: string;
    clientReference: string;
    currency: string;
    amount: number;
    status: BookingStatus;
    bookingHolder: ReconfirmBookingHolder;
    activities: ReconfirmActivityResponseDTO[];
    creationDate: string;
}
export declare class ReconfirmStandardResponseDTO {
    success: boolean;
    identifier: string;
    data: ReconfirmDataStandardResponseDTO;
}
