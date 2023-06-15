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
exports.SearchStandardRequestBodyDTO = exports.PaginationSearchStandardRequestBodyDTO = void 0;
const class_validator_1 = require("class-validator");
const shared_type_1 = require("../../shared/shared.type");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class PaginationSearchStandardRequestBodyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], PaginationSearchStandardRequestBodyDTO.prototype, "itemsPerPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], PaginationSearchStandardRequestBodyDTO.prototype, "page", void 0);
exports.PaginationSearchStandardRequestBodyDTO = PaginationSearchStandardRequestBodyDTO;
class SearchStandardRequestBodyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bangkok' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SearchStandardRequestBodyDTO.prototype, "keyword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-06-16' }),
    (0, class_validator_1.IsISO8601)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SearchStandardRequestBodyDTO.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-06-17' }),
    (0, class_validator_1.IsISO8601)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SearchStandardRequestBodyDTO.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: shared_type_1.Language }),
    (0, class_validator_1.IsEnum)(shared_type_1.Language),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SearchStandardRequestBodyDTO.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PaginationSearchStandardRequestBodyDTO }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaginationSearchStandardRequestBodyDTO),
    __metadata("design:type", PaginationSearchStandardRequestBodyDTO)
], SearchStandardRequestBodyDTO.prototype, "pagination", void 0);
exports.SearchStandardRequestBodyDTO = SearchStandardRequestBodyDTO;
//# sourceMappingURL=search.standard.request.dto.js.map