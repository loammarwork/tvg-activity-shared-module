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
exports.PreconfirmStandardResponseDTO = exports.PreconfirmDataStandardResponseDTO = exports.PreconfirmBookingHolder = exports.PreconfirmActivityResponseDTO = exports.PreconfirmCommentResponseDTO = exports.PreconfirmPackageResponseDTO = exports.PreconfirmPaxResponseDTO = exports.PreconfirmAnswerResponseDTO = exports.PreconfirmAnswerQuestionResponseDTO = exports.PreconfirmAmountDetailResponseDTO = exports.PreconfirmAmountDetailTotalAmountResponseDTO = exports.PreconfirmAmountDetailPaxAmountResponseDTO = exports.PreconfirmSupplierResponseDTO = exports.PreconfirmProviderInformationNameResponseDTO = void 0;
const shared_type_1 = require("../../shared/shared.type");
const swagger_1 = require("@nestjs/swagger");
class PreconfirmProviderInformationNameResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmProviderInformationNameResponseDTO.prototype, "name", void 0);
exports.PreconfirmProviderInformationNameResponseDTO = PreconfirmProviderInformationNameResponseDTO;
class PreconfirmSupplierResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmSupplierResponseDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmSupplierResponseDTO.prototype, "vatNumber", void 0);
exports.PreconfirmSupplierResponseDTO = PreconfirmSupplierResponseDTO;
class PreconfirmAmountDetailPaxAmountResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmAmountDetailPaxAmountResponseDTO.prototype, "paxType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PreconfirmAmountDetailPaxAmountResponseDTO.prototype, "amount", void 0);
exports.PreconfirmAmountDetailPaxAmountResponseDTO = PreconfirmAmountDetailPaxAmountResponseDTO;
class PreconfirmAmountDetailTotalAmountResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PreconfirmAmountDetailTotalAmountResponseDTO.prototype, "amount", void 0);
exports.PreconfirmAmountDetailTotalAmountResponseDTO = PreconfirmAmountDetailTotalAmountResponseDTO;
class PreconfirmAmountDetailResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PreconfirmAmountDetailPaxAmountResponseDTO] }),
    __metadata("design:type", Array)
], PreconfirmAmountDetailResponseDTO.prototype, "paxAmounts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PreconfirmAmountDetailTotalAmountResponseDTO }),
    __metadata("design:type", PreconfirmAmountDetailTotalAmountResponseDTO)
], PreconfirmAmountDetailResponseDTO.prototype, "totalAmount", void 0);
exports.PreconfirmAmountDetailResponseDTO = PreconfirmAmountDetailResponseDTO;
class PreconfirmAnswerQuestionResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmAnswerQuestionResponseDTO.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmAnswerQuestionResponseDTO.prototype, "text", void 0);
exports.PreconfirmAnswerQuestionResponseDTO = PreconfirmAnswerQuestionResponseDTO;
class PreconfirmAnswerResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: PreconfirmAnswerQuestionResponseDTO }),
    __metadata("design:type", PreconfirmAnswerQuestionResponseDTO)
], PreconfirmAnswerResponseDTO.prototype, "question", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmAnswerResponseDTO.prototype, "answer", void 0);
exports.PreconfirmAnswerResponseDTO = PreconfirmAnswerResponseDTO;
class PreconfirmPaxResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmPaxResponseDTO.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmPaxResponseDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmPaxResponseDTO.prototype, "middlename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmPaxResponseDTO.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmPaxResponseDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PreconfirmPaxResponseDTO.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmPaxResponseDTO.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmPaxResponseDTO.prototype, "paxType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmPaxResponseDTO.prototype, "passport", void 0);
exports.PreconfirmPaxResponseDTO = PreconfirmPaxResponseDTO;
class PreconfirmPackageResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmPackageResponseDTO.prototype, "packageId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmPackageResponseDTO.prototype, "packageName", void 0);
exports.PreconfirmPackageResponseDTO = PreconfirmPackageResponseDTO;
class PreconfirmCommentResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmCommentResponseDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmCommentResponseDTO.prototype, "text", void 0);
exports.PreconfirmCommentResponseDTO = PreconfirmCommentResponseDTO;
class PreconfirmActivityResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: shared_type_1.BookingStatus }),
    __metadata("design:type", String)
], PreconfirmActivityResponseDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmActivityResponseDTO.prototype, "activityReference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmActivityResponseDTO.prototype, "activityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmActivityResponseDTO.prototype, "activityName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PreconfirmCommentResponseDTO] }),
    __metadata("design:type", Array)
], PreconfirmActivityResponseDTO.prototype, "comments", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PreconfirmPackageResponseDTO }),
    __metadata("design:type", PreconfirmPackageResponseDTO)
], PreconfirmActivityResponseDTO.prototype, "package", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PreconfirmPaxResponseDTO] }),
    __metadata("design:type", Array)
], PreconfirmActivityResponseDTO.prototype, "paxes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PreconfirmAnswerResponseDTO] }),
    __metadata("design:type", Array)
], PreconfirmActivityResponseDTO.prototype, "answers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmActivityResponseDTO.prototype, "dateFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmActivityResponseDTO.prototype, "dateTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [shared_type_1.CancellationPolicy] }),
    __metadata("design:type", Array)
], PreconfirmActivityResponseDTO.prototype, "cancellationPolicies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PreconfirmAmountDetailResponseDTO }),
    __metadata("design:type", PreconfirmAmountDetailResponseDTO)
], PreconfirmActivityResponseDTO.prototype, "amountDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ $ref: '#/components/schemas/PreconfirmProviderInformationNameResponseDTO' }, { type: 'null' }] }),
    __metadata("design:type", PreconfirmProviderInformationNameResponseDTO)
], PreconfirmActivityResponseDTO.prototype, "providerInformation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ $ref: '#/components/schemas/PreconfirmSupplierResponseDTO' }, { type: 'null' }] }),
    __metadata("design:type", PreconfirmSupplierResponseDTO)
], PreconfirmActivityResponseDTO.prototype, "supplier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], PreconfirmActivityResponseDTO.prototype, "files", void 0);
exports.PreconfirmActivityResponseDTO = PreconfirmActivityResponseDTO;
class PreconfirmBookingHolder {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmBookingHolder.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmBookingHolder.prototype, "middlename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmBookingHolder.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmBookingHolder.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmBookingHolder.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmBookingHolder.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], PreconfirmBookingHolder.prototype, "phones", void 0);
exports.PreconfirmBookingHolder = PreconfirmBookingHolder;
class PreconfirmDataStandardResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmDataStandardResponseDTO.prototype, "bookingReference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmDataStandardResponseDTO.prototype, "clientReference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmDataStandardResponseDTO.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PreconfirmDataStandardResponseDTO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: shared_type_1.BookingStatus }),
    __metadata("design:type", String)
], PreconfirmDataStandardResponseDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PreconfirmBookingHolder }),
    __metadata("design:type", PreconfirmBookingHolder)
], PreconfirmDataStandardResponseDTO.prototype, "bookingHolder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PreconfirmActivityResponseDTO] }),
    __metadata("design:type", Array)
], PreconfirmDataStandardResponseDTO.prototype, "activities", void 0);
exports.PreconfirmDataStandardResponseDTO = PreconfirmDataStandardResponseDTO;
class PreconfirmStandardResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], PreconfirmStandardResponseDTO.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PreconfirmStandardResponseDTO.prototype, "identifier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PreconfirmDataStandardResponseDTO }),
    __metadata("design:type", PreconfirmDataStandardResponseDTO)
], PreconfirmStandardResponseDTO.prototype, "data", void 0);
exports.PreconfirmStandardResponseDTO = PreconfirmStandardResponseDTO;
//# sourceMappingURL=preconfirm.standard.response.dto.js.map