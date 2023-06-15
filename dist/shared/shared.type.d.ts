export declare enum Language {
    en = "en",
    th = "th"
}
export declare enum ImageSize {
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE"
}
export declare enum CancellationType {
    FREE_CANCELLATION = "FREE.CANCELLATION",
    CANCEL_CONDITION = "CANCEL.CONDITION",
    NON_REFUNDABLE = "NON.REFUNDABLE"
}
export declare class UrlImageStandardResponseDTO {
    imageSize: ImageSize;
    resource: string;
}
export declare class ImageStandardResponseDTO {
    imageType: string;
    urls: UrlImageStandardResponseDTO[];
}
export declare class CancellationPolicyTitle {
    type: CancellationType;
    notes: string[];
}
export declare enum RefundType {
    AMOUNT = "AMOUNT",
    PERCENT = "PERCENT"
}
export declare class Refund {
    type: RefundType;
    value: number;
}
export declare class CancellationPolicy {
    type: CancellationType;
    cancelBefore: string | null;
    refund: Refund;
    notes: string[];
}
export declare enum BookingStatus {
    HOLD = "VENDOR_CONFIRMATION",
    PRECONFIRMED = "PRECONFIRMED",
    PRECONFIRMATION_FAILED = "PRECONFIRMATION_FAILED",
    CONFIRMED = "CONFIRMED",
    CONFIRMATION_FAILED = "CONFIRMATION_FAILED",
    CONFIRMATION_EXPIRED = "CONFIRMATION_EXPIRED",
    VENDOR_REFUSED = "VENDOR_REFUSED",
    CANCELLED = "CANCELLED",
    CANCELLATION_FAILED = "CANCELLATION_FAILED",
    PRECONFIRMATION_PARTIAL_SUCCESS = "PRECONFIRMATION_PARTIAL_SUCCESS",
    CONFIRMATION_PARTIAL_SUCCESS = "CONFIRMATION_PARTIAL_SUCCESS"
}
export declare enum BookingStatusCode {
    HOLD = 1,
    PRECONFIRMED = 2,
    PRECONFIRMATION_FAILED = 3,
    CONFIRMED = 4,
    CONFIRMATION_FAILED = 5,
    CONFIRMATION_EXPIRED = 6,
    VENDOR_REFUSED = 7,
    CANCELLED = 8,
    CANCELLATION_FAILED = 9,
    PRECONFIRMATION_PARTIAL_SUCCESS = 10,
    CONFIRMATION_PARTIAL_SUCCESS = 11
}
export declare enum PaymentStatus {
    PAYMENT_PENDING = "PENDING",
    PAYMENT_SUCCESS = "SUCCESS",
    PAYMENT_EXPIRED = "EXPIRED",
    PAYMENT_FAILED = "FAILED"
}
export declare enum PaymentStatusCode {
    PAYMENT_PENDING = 1,
    PAYMENT_SUCCESS = 2,
    PAYMENT_EXPIRED = 3,
    PAYMENT_FAILED = 4
}
