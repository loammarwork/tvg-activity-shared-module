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
exports.ReconfirmStandardResponseDTO = exports.ReconfirmDataStandardResponseDTO = exports.ReconfirmBookingHolder = exports.ReconfirmActivityResponseDTO = exports.ReconfirmCommentResponseDTO = exports.ReconfirmPackageResponseDTO = exports.ReconfirmPaxResponseDTO = exports.ReconfirmAnswerResponseDTO = exports.ReconfirmAnswerQuestionResponseDTO = exports.ReconfirmAmountDetailResponseDTO = exports.ReconfirmAmountDetailTotalAmountResponseDTO = exports.ReconfirmAmountDetailPaxAmountResponseDTO = exports.ReconfirmSupplierResponseDTO = exports.ReconfirmProviderInformationNameResponseDTO = void 0;
const shared_type_1 = require("../../shared/shared.type");
const swagger_1 = require("@nestjs/swagger");
class ReconfirmProviderInformationNameResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmProviderInformationNameResponseDTO.prototype, "name", void 0);
exports.ReconfirmProviderInformationNameResponseDTO = ReconfirmProviderInformationNameResponseDTO;
class ReconfirmSupplierResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmSupplierResponseDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmSupplierResponseDTO.prototype, "vatNumber", void 0);
exports.ReconfirmSupplierResponseDTO = ReconfirmSupplierResponseDTO;
class ReconfirmAmountDetailPaxAmountResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmAmountDetailPaxAmountResponseDTO.prototype, "paxType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ReconfirmAmountDetailPaxAmountResponseDTO.prototype, "amount", void 0);
exports.ReconfirmAmountDetailPaxAmountResponseDTO = ReconfirmAmountDetailPaxAmountResponseDTO;
class ReconfirmAmountDetailTotalAmountResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ReconfirmAmountDetailTotalAmountResponseDTO.prototype, "amount", void 0);
exports.ReconfirmAmountDetailTotalAmountResponseDTO = ReconfirmAmountDetailTotalAmountResponseDTO;
class ReconfirmAmountDetailResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ReconfirmAmountDetailPaxAmountResponseDTO] }),
    __metadata("design:type", Array)
], ReconfirmAmountDetailResponseDTO.prototype, "paxAmounts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ReconfirmAmountDetailTotalAmountResponseDTO }),
    __metadata("design:type", ReconfirmAmountDetailTotalAmountResponseDTO)
], ReconfirmAmountDetailResponseDTO.prototype, "totalAmount", void 0);
exports.ReconfirmAmountDetailResponseDTO = ReconfirmAmountDetailResponseDTO;
class ReconfirmAnswerQuestionResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmAnswerQuestionResponseDTO.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmAnswerQuestionResponseDTO.prototype, "text", void 0);
exports.ReconfirmAnswerQuestionResponseDTO = ReconfirmAnswerQuestionResponseDTO;
class ReconfirmAnswerResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: ReconfirmAnswerQuestionResponseDTO }),
    __metadata("design:type", ReconfirmAnswerQuestionResponseDTO)
], ReconfirmAnswerResponseDTO.prototype, "question", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmAnswerResponseDTO.prototype, "answer", void 0);
exports.ReconfirmAnswerResponseDTO = ReconfirmAnswerResponseDTO;
class ReconfirmPaxResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmPaxResponseDTO.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmPaxResponseDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmPaxResponseDTO.prototype, "middlename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmPaxResponseDTO.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmPaxResponseDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ReconfirmPaxResponseDTO.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmPaxResponseDTO.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmPaxResponseDTO.prototype, "paxType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmPaxResponseDTO.prototype, "passport", void 0);
exports.ReconfirmPaxResponseDTO = ReconfirmPaxResponseDTO;
class ReconfirmPackageResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmPackageResponseDTO.prototype, "packageId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmPackageResponseDTO.prototype, "packageName", void 0);
exports.ReconfirmPackageResponseDTO = ReconfirmPackageResponseDTO;
class ReconfirmCommentResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmCommentResponseDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmCommentResponseDTO.prototype, "text", void 0);
exports.ReconfirmCommentResponseDTO = ReconfirmCommentResponseDTO;
class ReconfirmActivityResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: shared_type_1.BookingStatus }),
    __metadata("design:type", String)
], ReconfirmActivityResponseDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmActivityResponseDTO.prototype, "activityReference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmActivityResponseDTO.prototype, "activityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmActivityResponseDTO.prototype, "activityName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ReconfirmCommentResponseDTO] }),
    __metadata("design:type", Array)
], ReconfirmActivityResponseDTO.prototype, "comments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ReconfirmPackageResponseDTO }),
    __metadata("design:type", ReconfirmPackageResponseDTO)
], ReconfirmActivityResponseDTO.prototype, "package", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ReconfirmPaxResponseDTO] }),
    __metadata("design:type", Array)
], ReconfirmActivityResponseDTO.prototype, "paxes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ReconfirmAnswerResponseDTO] }),
    __metadata("design:type", Array)
], ReconfirmActivityResponseDTO.prototype, "answers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmActivityResponseDTO.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmActivityResponseDTO.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [shared_type_1.CancellationPolicy] }),
    __metadata("design:type", Array)
], ReconfirmActivityResponseDTO.prototype, "cancellationPolicies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ReconfirmAmountDetailResponseDTO }),
    __metadata("design:type", ReconfirmAmountDetailResponseDTO)
], ReconfirmActivityResponseDTO.prototype, "amountDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ $ref: '#/components/schemas/ReconfirmProviderInformationNameResponseDTO' }, { type: 'null' }] }),
    __metadata("design:type", ReconfirmProviderInformationNameResponseDTO)
], ReconfirmActivityResponseDTO.prototype, "providerInformation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ $ref: '#/components/schemas/ReconfirmSupplierResponseDTO' }, { type: 'null' }] }),
    __metadata("design:type", ReconfirmSupplierResponseDTO)
], ReconfirmActivityResponseDTO.prototype, "supplier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], ReconfirmActivityResponseDTO.prototype, "files", void 0);
exports.ReconfirmActivityResponseDTO = ReconfirmActivityResponseDTO;
class ReconfirmBookingHolder {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmBookingHolder.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmBookingHolder.prototype, "middlename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmBookingHolder.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmBookingHolder.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmBookingHolder.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmBookingHolder.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], ReconfirmBookingHolder.prototype, "phones", void 0);
exports.ReconfirmBookingHolder = ReconfirmBookingHolder;
class ReconfirmDataStandardResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmDataStandardResponseDTO.prototype, "bookingReference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmDataStandardResponseDTO.prototype, "clientReference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmDataStandardResponseDTO.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ReconfirmDataStandardResponseDTO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: shared_type_1.BookingStatus }),
    __metadata("design:type", String)
], ReconfirmDataStandardResponseDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ReconfirmBookingHolder }),
    __metadata("design:type", ReconfirmBookingHolder)
], ReconfirmDataStandardResponseDTO.prototype, "bookingHolder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ReconfirmActivityResponseDTO] }),
    __metadata("design:type", Array)
], ReconfirmDataStandardResponseDTO.prototype, "activities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmDataStandardResponseDTO.prototype, "creationDate", void 0);
exports.ReconfirmDataStandardResponseDTO = ReconfirmDataStandardResponseDTO;
class ReconfirmStandardResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ReconfirmStandardResponseDTO.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ReconfirmStandardResponseDTO.prototype, "identifier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ReconfirmDataStandardResponseDTO }),
    __metadata("design:type", ReconfirmDataStandardResponseDTO)
], ReconfirmStandardResponseDTO.prototype, "data", void 0);
exports.ReconfirmStandardResponseDTO = ReconfirmStandardResponseDTO;
//# sourceMappingURL=reconfirm.standard.response.dto.js.map