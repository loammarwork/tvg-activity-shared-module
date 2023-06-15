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
exports.PreconfirmStandardRequestBodyDTO = exports.PreconfirmActivityStandardRequestBodyDTO = exports.PreconfirmPaxRequestBodyDTO = exports.PreconfirmPaxAmountRequestBodyDTO = exports.PreconfirmAnswerRequestBodyDTO = exports.PerconfirmQuestionRequestBodyDTO = exports.PreconfirmActivityDetailRequestBodyDTO = exports.PreconfirmHolderStandardRequestBodyDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class PreconfirmHolderStandardRequestBodyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmHolderStandardRequestBodyDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmHolderStandardRequestBodyDTO.prototype, "middlename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmHolderStandardRequestBodyDTO.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmHolderStandardRequestBodyDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmHolderStandardRequestBodyDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmHolderStandardRequestBodyDTO.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmHolderStandardRequestBodyDTO.prototype, "zipCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], PreconfirmHolderStandardRequestBodyDTO.prototype, "phones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmHolderStandardRequestBodyDTO.prototype, "nationality", void 0);
exports.PreconfirmHolderStandardRequestBodyDTO = PreconfirmHolderStandardRequestBodyDTO;
class PreconfirmActivityDetailRequestBodyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmActivityDetailRequestBodyDTO.prototype, "rateKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'null' }] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmActivityDetailRequestBodyDTO.prototype, "showTime", void 0);
exports.PreconfirmActivityDetailRequestBodyDTO = PreconfirmActivityDetailRequestBodyDTO;
class PerconfirmQuestionRequestBodyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PerconfirmQuestionRequestBodyDTO.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PerconfirmQuestionRequestBodyDTO.prototype, "text", void 0);
exports.PerconfirmQuestionRequestBodyDTO = PerconfirmQuestionRequestBodyDTO;
class PreconfirmAnswerRequestBodyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: PerconfirmQuestionRequestBodyDTO }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PerconfirmQuestionRequestBodyDTO),
    __metadata("design:type", PerconfirmQuestionRequestBodyDTO)
], PreconfirmAnswerRequestBodyDTO.prototype, "question", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmAnswerRequestBodyDTO.prototype, "answer", void 0);
exports.PreconfirmAnswerRequestBodyDTO = PreconfirmAnswerRequestBodyDTO;
class PreconfirmPaxAmountRequestBodyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmPaxAmountRequestBodyDTO.prototype, "paxType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PreconfirmPaxAmountRequestBodyDTO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PreconfirmPaxAmountRequestBodyDTO.prototype, "nettAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'null' }] }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PreconfirmPaxAmountRequestBodyDTO.prototype, "minPurchaseQty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'null' }] }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PreconfirmPaxAmountRequestBodyDTO.prototype, "maxPurchaseQty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], PreconfirmPaxAmountRequestBodyDTO.prototype, "amountDetails", void 0);
exports.PreconfirmPaxAmountRequestBodyDTO = PreconfirmPaxAmountRequestBodyDTO;
class PreconfirmPaxRequestBodyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmPaxRequestBodyDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmPaxRequestBodyDTO.prototype, "middlename", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmPaxRequestBodyDTO.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmPaxRequestBodyDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmPaxRequestBodyDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], PreconfirmPaxRequestBodyDTO.prototype, "phones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmPaxRequestBodyDTO.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PreconfirmPaxAmountRequestBodyDTO }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PreconfirmPaxAmountRequestBodyDTO),
    __metadata("design:type", PreconfirmPaxAmountRequestBodyDTO)
], PreconfirmPaxRequestBodyDTO.prototype, "paxAmount", void 0);
exports.PreconfirmPaxRequestBodyDTO = PreconfirmPaxRequestBodyDTO;
class PreconfirmActivityStandardRequestBodyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmActivityStandardRequestBodyDTO.prototype, "serviceDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PreconfirmActivityDetailRequestBodyDTO }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PreconfirmActivityDetailRequestBodyDTO),
    __metadata("design:type", PreconfirmActivityDetailRequestBodyDTO)
], PreconfirmActivityStandardRequestBodyDTO.prototype, "activityDetail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PreconfirmAnswerRequestBodyDTO] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PreconfirmAnswerRequestBodyDTO),
    __metadata("design:type", Array)
], PreconfirmActivityStandardRequestBodyDTO.prototype, "answers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PreconfirmPaxRequestBodyDTO] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_transformer_1.Type)(() => PreconfirmPaxRequestBodyDTO),
    __metadata("design:type", Array)
], PreconfirmActivityStandardRequestBodyDTO.prototype, "paxes", void 0);
exports.PreconfirmActivityStandardRequestBodyDTO = PreconfirmActivityStandardRequestBodyDTO;
class PreconfirmStandardRequestBodyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PreconfirmStandardRequestBodyDTO.prototype, "clientReference", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PreconfirmHolderStandardRequestBodyDTO }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PreconfirmHolderStandardRequestBodyDTO),
    __metadata("design:type", PreconfirmHolderStandardRequestBodyDTO)
], PreconfirmStandardRequestBodyDTO.prototype, "bookingHolder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PreconfirmActivityStandardRequestBodyDTO] }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_transformer_1.Type)(() => PreconfirmActivityStandardRequestBodyDTO),
    __metadata("design:type", Array)
], PreconfirmStandardRequestBodyDTO.prototype, "activities", void 0);
exports.PreconfirmStandardRequestBodyDTO = PreconfirmStandardRequestBodyDTO;
//# sourceMappingURL=preconfirm.standard.request.dto.js.map