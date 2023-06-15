export declare class PreconfirmHolderStandardRequestBodyDTO {
    name: string;
    middlename: string;
    surname: string;
    title: string;
    email: string;
    address: string;
    zipCode: string;
    phones: string[];
    nationality: string;
}
export declare class PreconfirmActivityDetailRequestBodyDTO {
    rateKey: string;
    showTime: string | null;
}
export declare class PerconfirmQuestionRequestBodyDTO {
    code: string;
    text: string;
}
export declare class PreconfirmAnswerRequestBodyDTO {
    question: PerconfirmQuestionRequestBodyDTO;
    answer: string;
}
export declare class PreconfirmPaxAmountRequestBodyDTO {
    paxType: string;
    amount: number;
    nettAmount: number;
    minPurchaseQty: number | null;
    maxPurchaseQty: number | null;
    amountDetails: any;
}
export declare class PreconfirmPaxRequestBodyDTO {
    name: string;
    middlename: string;
    surname: string;
    title: string;
    email: string;
    phones: string[];
    nationality: string;
    paxAmount: PreconfirmPaxAmountRequestBodyDTO;
}
export declare class PreconfirmActivityStandardRequestBodyDTO {
    serviceDate: string;
    activityDetail: PreconfirmActivityDetailRequestBodyDTO;
    answers?: PreconfirmAnswerRequestBodyDTO[];
    paxes: PreconfirmPaxRequestBodyDTO[];
}
export declare class PreconfirmStandardRequestBodyDTO {
    clientReference: string;
    bookingHolder: PreconfirmHolderStandardRequestBodyDTO;
    activities: PreconfirmActivityStandardRequestBodyDTO[];
}
