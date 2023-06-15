"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatusCode = exports.PaymentStatus = exports.BookingStatusCode = exports.BookingStatus = exports.CancellationPolicy = exports.Refund = exports.RefundType = exports.CancellationPolicyTitle = exports.ImageStandardResponseDTO = exports.UrlImageStandardResponseDTO = exports.CancellationType = exports.ImageSize = exports.Language = void 0;
const swagger_1 = require("@nestjs/swagger");
var Language;
(function (Language) {
    Language["en"] = "en";
    Language["th"] = "th";
})(Language = exports.Language || (exports.Language = {}));
var ImageSize;
(function (ImageSize) {
    ImageSize["SMALL"] = "SMALL";
    ImageSize["MEDIUM"] = "MEDIUM";
    ImageSize["LARGE"] = "LARGE";
})(ImageSize = exports.ImageSize || (exports.ImageSize = {}));
var CancellationType;
(function (CancellationType) {
    CancellationType["FREE_CANCELLATION"] = "FREE.CANCELLATION";
    CancellationType["CANCEL_CONDITION"] = "CANCEL.CONDITION";
    CancellationType["NON_REFUNDABLE"] = "NON.REFUNDABLE";
})(CancellationType = exports.CancellationType || (exports.CancellationType = {}));
class UrlImageStandardResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ImageSize }),
    __metadata("design:type", String)
], UrlImageStandardResponseDTO.prototype, "imageSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UrlImageStandardResponseDTO.prototype, "resource", void 0);
exports.UrlImageStandardResponseDTO = UrlImageStandardResponseDTO;
class ImageStandardResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ImageStandardResponseDTO.prototype, "imageType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [UrlImageStandardResponseDTO] }),
    __metadata("design:type", Array)
], ImageStandardResponseDTO.prototype, "urls", void 0);
exports.ImageStandardResponseDTO = ImageStandardResponseDTO;
class CancellationPolicyTitle {
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: CancellationType }),
    __metadata("design:type", String)
], CancellationPolicyTitle.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], CancellationPolicyTitle.prototype, "notes", void 0);
exports.CancellationPolicyTitle = CancellationPolicyTitle;
var RefundType;
(function (RefundType) {
    RefundType["AMOUNT"] = "AMOUNT";
    RefundType["PERCENT"] = "PERCENT";
})(RefundType = exports.RefundType || (exports.RefundType = {}));
class Refund {
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: RefundType }),
    __metadata("design:type", String)
], Refund.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Refund.prototype, "value", void 0);
exports.Refund = Refund;
class CancellationPolicy {
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: CancellationType }),
    __metadata("design:type", String)
], CancellationPolicy.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'null' }] }),
    __metadata("design:type", String)
], CancellationPolicy.prototype, "cancelBefore", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Refund }),
    __metadata("design:type", Refund)
], CancellationPolicy.prototype, "refund", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CancellationPolicy.prototype, "notes", void 0);
exports.CancellationPolicy = CancellationPolicy;
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["HOLD"] = "VENDOR_CONFIRMATION";
    BookingStatus["PRECONFIRMED"] = "PRECONFIRMED";
    BookingStatus["PRECONFIRMATION_FAILED"] = "PRECONFIRMATION_FAILED";
    BookingStatus["CONFIRMED"] = "CONFIRMED";
    BookingStatus["CONFIRMATION_FAILED"] = "CONFIRMATION_FAILED";
    BookingStatus["CONFIRMATION_EXPIRED"] = "CONFIRMATION_EXPIRED";
    BookingStatus["VENDOR_REFUSED"] = "VENDOR_REFUSED";
    BookingStatus["CANCELLED"] = "CANCELLED";
    BookingStatus["CANCELLATION_FAILED"] = "CANCELLATION_FAILED";
    BookingStatus["PRECONFIRMATION_PARTIAL_SUCCESS"] = "PRECONFIRMATION_PARTIAL_SUCCESS";
    BookingStatus["CONFIRMATION_PARTIAL_SUCCESS"] = "CONFIRMATION_PARTIAL_SUCCESS";
})(BookingStatus = exports.BookingStatus || (exports.BookingStatus = {}));
var BookingStatusCode;
(function (BookingStatusCode) {
    BookingStatusCode[BookingStatusCode["HOLD"] = 1] = "HOLD";
    BookingStatusCode[BookingStatusCode["PRECONFIRMED"] = 2] = "PRECONFIRMED";
    BookingStatusCode[BookingStatusCode["PRECONFIRMATION_FAILED"] = 3] = "PRECONFIRMATION_FAILED";
    BookingStatusCode[BookingStatusCode["CONFIRMED"] = 4] = "CONFIRMED";
    BookingStatusCode[BookingStatusCode["CONFIRMATION_FAILED"] = 5] = "CONFIRMATION_FAILED";
    BookingStatusCode[BookingStatusCode["CONFIRMATION_EXPIRED"] = 6] = "CONFIRMATION_EXPIRED";
    BookingStatusCode[BookingStatusCode["VENDOR_REFUSED"] = 7] = "VENDOR_REFUSED";
    BookingStatusCode[BookingStatusCode["CANCELLED"] = 8] = "CANCELLED";
    BookingStatusCode[BookingStatusCode["CANCELLATION_FAILED"] = 9] = "CANCELLATION_FAILED";
    BookingStatusCode[BookingStatusCode["PRECONFIRMATION_PARTIAL_SUCCESS"] = 10] = "PRECONFIRMATION_PARTIAL_SUCCESS";
    BookingStatusCode[BookingStatusCode["CONFIRMATION_PARTIAL_SUCCESS"] = 11] = "CONFIRMATION_PARTIAL_SUCCESS";
})(BookingStatusCode = exports.BookingStatusCode || (exports.BookingStatusCode = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PAYMENT_PENDING"] = "PENDING";
    PaymentStatus["PAYMENT_SUCCESS"] = "SUCCESS";
    PaymentStatus["PAYMENT_EXPIRED"] = "EXPIRED";
    PaymentStatus["PAYMENT_FAILED"] = "FAILED";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
var PaymentStatusCode;
(function (PaymentStatusCode) {
    PaymentStatusCode[PaymentStatusCode["PAYMENT_PENDING"] = 1] = "PAYMENT_PENDING";
    PaymentStatusCode[PaymentStatusCode["PAYMENT_SUCCESS"] = 2] = "PAYMENT_SUCCESS";
    PaymentStatusCode[PaymentStatusCode["PAYMENT_EXPIRED"] = 3] = "PAYMENT_EXPIRED";
    PaymentStatusCode[PaymentStatusCode["PAYMENT_FAILED"] = 4] = "PAYMENT_FAILED";
})(PaymentStatusCode = exports.PaymentStatusCode || (exports.PaymentStatusCode = {}));
//# sourceMappingURL=shared.type.js.map