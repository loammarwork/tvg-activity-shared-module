import { ApiProperty } from '@nestjs/swagger';

export enum Language {
    en = 'en',
    th = 'th',
}
export enum ImageSize {
    SMALL = 'SMALL',
    MEDIUM = 'MEDIUM',
    LARGE = 'LARGE',
}

export enum CancellationType {
    FREE_CANCELLATION = 'FREE.CANCELLATION',
    CANCEL_CONDITION = 'CANCEL.CONDITION',
    NON_REFUNDABLE = 'NON.REFUNDABLE',
}

export class UrlImageStandardResponseDTO {
    @ApiProperty({ enum: ImageSize })
    imageSize: ImageSize;
    @ApiProperty()
    resource: string;
}

export class ImageStandardResponseDTO {
    @ApiProperty()
    imageType: string;
    @ApiProperty({ type: [UrlImageStandardResponseDTO] })
    urls: UrlImageStandardResponseDTO[];
}

export class CancellationPolicyTitle {
    @ApiProperty({ enum: CancellationType })
    type: CancellationType;
    @ApiProperty({ type: [String] })
    notes: string[];
}

export enum RefundType {
    AMOUNT = 'AMOUNT',
    PERCENT = 'PERCENT',
}

export class Refund {
    @ApiProperty({ enum: RefundType })
    type: RefundType;
    @ApiProperty()
    value: number;
}

export class CancellationPolicy {
    @ApiProperty({ enum: CancellationType })
    type: CancellationType;
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'null' }] })
    cancelBefore: string | null;
    @ApiProperty({ type: Refund })
    refund: Refund;
    @ApiProperty()
    notes: string[];
}

export enum BookingStatus {
    HOLD = 'VENDOR_CONFIRMATION',
    PRECONFIRMED = 'PRECONFIRMED',
    PRECONFIRMATION_FAILED = 'PRECONFIRMATION_FAILED',
    CONFIRMED = 'CONFIRMED',
    CONFIRMATION_FAILED = 'CONFIRMATION_FAILED',
    CONFIRMATION_EXPIRED = 'CONFIRMATION_EXPIRED',
    VENDOR_REFUSED = 'VENDOR_REFUSED',
    CANCELLED = 'CANCELLED',
    CANCELLATION_FAILED = 'CANCELLATION_FAILED',
    PRECONFIRMATION_PARTIAL_SUCCESS = 'PRECONFIRMATION_PARTIAL_SUCCESS',
    CONFIRMATION_PARTIAL_SUCCESS = 'CONFIRMATION_PARTIAL_SUCCESS',
}

export enum BookingStatusCode {
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
    CONFIRMATION_PARTIAL_SUCCESS = 11,
}

export enum PaymentStatus {
    PAYMENT_PENDING = 'PENDING',
    PAYMENT_SUCCESS = 'SUCCESS',
    PAYMENT_EXPIRED = 'EXPIRED',
    PAYMENT_FAILED = 'FAILED',
}

export enum PaymentStatusCode {
    PAYMENT_PENDING = 1,
    PAYMENT_SUCCESS = 2,
    PAYMENT_EXPIRED = 3,
    PAYMENT_FAILED = 4,
}
