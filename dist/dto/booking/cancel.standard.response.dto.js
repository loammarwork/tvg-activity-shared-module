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
exports.CancelStandardResponseDTO = exports.CancelDataStandardResponseDTO = exports.CancelBookingHolder = exports.CancelActivityResponseDTO = exports.CancelCommentResponseDTO = exports.CancelPackageResponseDTO = exports.CancelPaxResponseDTO = exports.CancelAnswerResponseDTO = exports.CancelAnswerQuestionResponseDTO = exports.CancelAmountDetailResponseDTO = exports.CancelAmountDetailTotalAmountResponseDTO = exports.CancelAmountDetailPaxAmountResponseDTO = exports.CancelSupplierResponseDTO = exports.CancelProviderInformationNameResponseDTO = void 0;
const shared_type_1 = require("../../shared/shared.type");
const swagger_1 = require("@nestjs/swagger");
class CancelProviderInformationNameResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelProviderInformationNameResponseDTO.prototype, "name", void 0);
exports.CancelProviderInformationNameResponseDTO = CancelProviderInformationNameResponseDTO;
class CancelSupplierResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelSupplierResponseDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelSupplierResponseDTO.prototype, "vatNumber", void 0);
exports.CancelSupplierResponseDTO = CancelSupplierResponseDTO;
class CancelAmountDetailPaxAmountResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelAmountDetailPaxAmountResponseDTO.prototype, "paxType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CancelAmountDetailPaxAmountResponseDTO.prototype, "amount", void 0);
exports.CancelAmountDetailPaxAmountResponseDTO = CancelAmountDetailPaxAmountResponseDTO;
class CancelAmountDetailTotalAmountResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CancelAmountDetailTotalAmountResponseDTO.prototype, "amount", void 0);
exports.CancelAmountDetailTotalAmountResponseDTO = CancelAmountDetailTotalAmountResponseDTO;
class CancelAmountDetailResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CancelAmountDetailPaxAmountResponseDTO] }),
    __metadata("design:type", Array)
], CancelAmountDetailResponseDTO.prototype, "paxAmounts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: CancelAmountDetailTotalAmountResponseDTO }),
    __metadata("design:type", CancelAmountDetailTotalAmountResponseDTO)
], CancelAmountDetailResponseDTO.prototype, "totalAmount", void 0);
exports.CancelAmountDetailResponseDTO = CancelAmountDetailResponseDTO;
class CancelAnswerQuestionResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelAnswerQuestionResponseDTO.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelAnswerQuestionResponseDTO.prototype, "text", void 0);
exports.CancelAnswerQuestionResponseDTO = CancelAnswerQuestionResponseDTO;
class CancelAnswerResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: CancelAnswerQuestionResponseDTO }),
    __metadata("design:type", CancelAnswerQuestionResponseDTO)
], CancelAnswerResponseDTO.prototype, "question", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelAnswerResponseDTO.prototype, "answer", void 0);
exports.CancelAnswerResponseDTO = CancelAnswerResponseDTO;
class CancelPaxResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelPaxResponseDTO.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelPaxResponseDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelPaxResponseDTO.prototype, "middlename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelPaxResponseDTO.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelPaxResponseDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CancelPaxResponseDTO.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelPaxResponseDTO.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelPaxResponseDTO.prototype, "paxType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelPaxResponseDTO.prototype, "passport", void 0);
exports.CancelPaxResponseDTO = CancelPaxResponseDTO;
class CancelPackageResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelPackageResponseDTO.prototype, "packageId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelPackageResponseDTO.prototype, "packageName", void 0);
exports.CancelPackageResponseDTO = CancelPackageResponseDTO;
class CancelCommentResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelCommentResponseDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelCommentResponseDTO.prototype, "text", void 0);
exports.CancelCommentResponseDTO = CancelCommentResponseDTO;
class CancelActivityResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: shared_type_1.BookingStatus }),
    __metadata("design:type", String)
], CancelActivityResponseDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelActivityResponseDTO.prototype, "activityReference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelActivityResponseDTO.prototype, "activityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelActivityResponseDTO.prototype, "activityName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CancelCommentResponseDTO] }),
    __metadata("design:type", Array)
], CancelActivityResponseDTO.prototype, "comments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: CancelPackageResponseDTO }),
    __metadata("design:type", CancelPackageResponseDTO)
], CancelActivityResponseDTO.prototype, "package", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CancelPaxResponseDTO] }),
    __metadata("design:type", Array)
], CancelActivityResponseDTO.prototype, "paxes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CancelAnswerResponseDTO] }),
    __metadata("design:type", Array)
], CancelActivityResponseDTO.prototype, "answers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelActivityResponseDTO.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelActivityResponseDTO.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [shared_type_1.CancellationPolicy] }),
    __metadata("design:type", Array)
], CancelActivityResponseDTO.prototype, "cancellationPolicies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: CancelAmountDetailResponseDTO }),
    __metadata("design:type", CancelAmountDetailResponseDTO)
], CancelActivityResponseDTO.prototype, "amountDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ $ref: '#/components/schemas/CancelProviderInformationNameResponseDTO' }, { type: 'null' }] }),
    __metadata("design:type", CancelProviderInformationNameResponseDTO)
], CancelActivityResponseDTO.prototype, "providerInformation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ $ref: '#/components/schemas/CancelSupplierResponseDTO' }, { type: 'null' }] }),
    __metadata("design:type", CancelSupplierResponseDTO)
], CancelActivityResponseDTO.prototype, "supplier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], CancelActivityResponseDTO.prototype, "files", void 0);
exports.CancelActivityResponseDTO = CancelActivityResponseDTO;
class CancelBookingHolder {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelBookingHolder.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelBookingHolder.prototype, "middlename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelBookingHolder.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelBookingHolder.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelBookingHolder.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelBookingHolder.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], CancelBookingHolder.prototype, "phones", void 0);
exports.CancelBookingHolder = CancelBookingHolder;
class CancelDataStandardResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelDataStandardResponseDTO.prototype, "bookingReference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelDataStandardResponseDTO.prototype, "clientReference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelDataStandardResponseDTO.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CancelDataStandardResponseDTO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: shared_type_1.BookingStatus }),
    __metadata("design:type", String)
], CancelDataStandardResponseDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: CancelBookingHolder }),
    __metadata("design:type", CancelBookingHolder)
], CancelDataStandardResponseDTO.prototype, "bookingHolder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CancelActivityResponseDTO] }),
    __metadata("design:type", Array)
], CancelDataStandardResponseDTO.prototype, "activities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelDataStandardResponseDTO.prototype, "creationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelDataStandardResponseDTO.prototype, "cancellationDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CancelDataStandardResponseDTO.prototype, "cancelValuationAmount", void 0);
exports.CancelDataStandardResponseDTO = CancelDataStandardResponseDTO;
class CancelStandardResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CancelStandardResponseDTO.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CancelStandardResponseDTO.prototype, "identifier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: CancelDataStandardResponseDTO }),
    __metadata("design:type", CancelDataStandardResponseDTO)
], CancelStandardResponseDTO.prototype, "data", void 0);
exports.CancelStandardResponseDTO = CancelStandardResponseDTO;
//# sourceMappingURL=cancel.standard.response.dto.js.map