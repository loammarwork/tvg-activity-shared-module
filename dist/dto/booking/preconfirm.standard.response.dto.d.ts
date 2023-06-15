import { BookingStatus, CancellationPolicy } from '../../shared/shared.type';
export declare class PreconfirmProviderInformationNameResponseDTO {
    name: string;
}
export declare class PreconfirmSupplierResponseDTO {
    name: string;
    vatNumber: string;
}
export declare class PreconfirmAmountDetailPaxAmountResponseDTO {
    paxType: string;
    amount: number;
}
export declare class PreconfirmAmountDetailTotalAmountResponseDTO {
    amount: number;
}
export declare class PreconfirmAmountDetailResponseDTO {
    paxAmounts: PreconfirmAmountDetailPaxAmountResponseDTO[];
    totalAmount: PreconfirmAmountDetailTotalAmountResponseDTO;
}
export declare class PreconfirmAnswerQuestionResponseDTO {
    code: string;
    text: string;
}
export declare class PreconfirmAnswerResponseDTO {
    question: PreconfirmAnswerQuestionResponseDTO;
    answer: string;
}
export declare class PreconfirmPaxResponseDTO {
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
export declare class PreconfirmPackageResponseDTO {
    packageId: string;
    packageName: string;
}
export declare class PreconfirmCommentResponseDTO {
    type: string;
    text: string;
}
export declare class PreconfirmActivityResponseDTO {
    status: BookingStatus;
    activityReference: string;
    activityId: string;
    activityName: string;
    comments: PreconfirmCommentResponseDTO[];
    package: PreconfirmPackageResponseDTO;
    paxes: PreconfirmPaxResponseDTO[];
    answers: PreconfirmAnswerResponseDTO[];
    dateFrom: string;
    dateTo: string;
    cancellationPolicies: CancellationPolicy[];
    amountDetails: PreconfirmAmountDetailResponseDTO;
    providerInformation: PreconfirmProviderInformationNameResponseDTO | null;
    supplier: PreconfirmSupplierResponseDTO | null;
    files: string[];
}
export declare class PreconfirmBookingHolder {
    name: string;
    middlename: string;
    surname: string;
    title: string;
    nationality: string;
    email: string;
    phones: string[];
}
export declare class PreconfirmDataStandardResponseDTO {
    bookingReference: string;
    clientReference: string;
    currency: string;
    amount: number;
    status: BookingStatus;
    bookingHolder: PreconfirmBookingHolder;
    activities: PreconfirmActivityResponseDTO[];
}
export declare class PreconfirmStandardResponseDTO {
    success: boolean;
    identifier: string;
    data: PreconfirmDataStandardResponseDTO;
}
