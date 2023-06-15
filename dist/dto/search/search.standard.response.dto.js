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
exports.SearchStandardResponseDTO = exports.ActivitySearchStandardResponseDTO = exports.AmountFromSearchStandardResponseDTO = exports.PaginationSearchStandardRequestDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_type_1 = require("../../shared/shared.type");
class PaginationSearchStandardRequestDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginationSearchStandardRequestDTO.prototype, "itemsPerPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginationSearchStandardRequestDTO.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginationSearchStandardRequestDTO.prototype, "totalItems", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginationSearchStandardRequestDTO.prototype, "itemsCount", void 0);
exports.PaginationSearchStandardRequestDTO = PaginationSearchStandardRequestDTO;
class AmountFromSearchStandardResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AmountFromSearchStandardResponseDTO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AmountFromSearchStandardResponseDTO.prototype, "nettAmount", void 0);
exports.AmountFromSearchStandardResponseDTO = AmountFromSearchStandardResponseDTO;
class ActivitySearchStandardResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ActivitySearchStandardResponseDTO.prototype, "activityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ActivitySearchStandardResponseDTO.prototype, "activityName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ActivitySearchStandardResponseDTO.prototype, "activityType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ActivitySearchStandardResponseDTO.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ActivitySearchStandardResponseDTO.prototype, "destination", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ActivitySearchStandardResponseDTO.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ActivitySearchStandardResponseDTO.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ActivitySearchStandardResponseDTO.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], ActivitySearchStandardResponseDTO.prototype, "categories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ActivitySearchStandardResponseDTO.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], ActivitySearchStandardResponseDTO.prototype, "targetMarket", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: AmountFromSearchStandardResponseDTO }),
    __metadata("design:type", AmountFromSearchStandardResponseDTO)
], ActivitySearchStandardResponseDTO.prototype, "amountFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [shared_type_1.ImageStandardResponseDTO] }),
    __metadata("design:type", Array)
], ActivitySearchStandardResponseDTO.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: shared_type_1.CancellationPolicyTitle }),
    __metadata("design:type", shared_type_1.CancellationPolicyTitle)
], ActivitySearchStandardResponseDTO.prototype, "cancellationPolicy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ActivitySearchStandardResponseDTO.prototype, "isOpenDated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ActivitySearchStandardResponseDTO.prototype, "isInstantConfirmation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ActivitySearchStandardResponseDTO.prototype, "isBestSeller", void 0);
exports.ActivitySearchStandardResponseDTO = ActivitySearchStandardResponseDTO;
class SearchStandardResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], SearchStandardResponseDTO.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SearchStandardResponseDTO.prototype, "identifier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ActivitySearchStandardResponseDTO] }),
    __metadata("design:type", Array)
], SearchStandardResponseDTO.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PaginationSearchStandardRequestDTO }),
    __metadata("design:type", PaginationSearchStandardRequestDTO)
], SearchStandardResponseDTO.prototype, "pagination", void 0);
exports.SearchStandardResponseDTO = SearchStandardResponseDTO;
//# sourceMappingURL=search.standard.response.dto.js.map