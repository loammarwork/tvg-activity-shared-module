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
exports.DetailStandardResponseDTO = exports.Activity = exports.Location = exports.StartingPoint = exports.Description = exports.MeetingPoint = exports.Country2 = exports.Destination2 = exports.Destination = exports.EndPoint = exports.Package = exports.AmountFrom = exports.OperationDate = exports.AmountFromPax = exports.TargetMarket = exports.Nationality = exports.OperationDetail = exports.ResourceData = exports.PaxAmount = exports.RequiredTarget = exports.Allotment = exports.AmountDetails = exports.ExtraData = exports.PackageDetail = exports.guidingOptions = exports.Route = exports.Point = exports.PointOfInterest = exports.Country = exports.GeoLocation = exports.Scheduling = exports.Closed = exports.Opened = exports.ActivityDetail = exports.CancellationPolicyDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_type_1 = require("../../shared/shared.type");
class CancellationPolicyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: shared_type_1.CancellationType }),
    __metadata("design:type", String)
], CancellationPolicyDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], CancellationPolicyDTO.prototype, "notes", void 0);
exports.CancellationPolicyDTO = CancellationPolicyDTO;
class ActivityDetail {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ActivityDetail.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ActivityDetail.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], ActivityDetail.prototype, "content", void 0);
exports.ActivityDetail = ActivityDetail;
class Opened {
}
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'null' }] }),
    __metadata("design:type", String)
], Opened.prototype, "from", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'null' }] }),
    __metadata("design:type", String)
], Opened.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], Opened.prototype, "openingTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", String)
], Opened.prototype, "closeTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], Opened.prototype, "weekDays", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'null' }] }),
    __metadata("design:type", String)
], Opened.prototype, "lastAdmissionTime", void 0);
exports.Opened = Opened;
class Closed {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], Closed.prototype, "weekDays", void 0);
exports.Closed = Closed;
class Scheduling {
}
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'null' }] }),
    __metadata("design:type", Number)
], Scheduling.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'null' }] }),
    __metadata("design:type", Array)
], Scheduling.prototype, "opened", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'null' }] }),
    __metadata("design:type", Array)
], Scheduling.prototype, "closed", void 0);
exports.Scheduling = Scheduling;
class GeoLocation {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GeoLocation.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], GeoLocation.prototype, "longitude", void 0);
exports.GeoLocation = GeoLocation;
class Country {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Country.prototype, "code", void 0);
exports.Country = Country;
class PointOfInterest {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PointOfInterest.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GeoLocation }),
    __metadata("design:type", GeoLocation)
], PointOfInterest.prototype, "geolocation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PointOfInterest.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Country }),
    __metadata("design:type", Country)
], PointOfInterest.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PointOfInterest.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PointOfInterest.prototype, "zip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PointOfInterest.prototype, "description", void 0);
exports.PointOfInterest = PointOfInterest;
class Point {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Point.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], Point.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], Point.prototype, "stop", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: PointOfInterest }),
    __metadata("design:type", PointOfInterest)
], Point.prototype, "pointOfInterest", void 0);
exports.Point = Point;
class Route {
}
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'null' }] }),
    __metadata("design:type", Number)
], Route.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Route.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Route.prototype, "timeFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Route.prototype, "timeTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Point] }),
    __metadata("design:type", Array)
], Route.prototype, "points", void 0);
exports.Route = Route;
class guidingOptions {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], guidingOptions.prototype, "guideType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], guidingOptions.prototype, "included", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], guidingOptions.prototype, "groupType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], guidingOptions.prototype, "tip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], guidingOptions.prototype, "maxGroupSize", void 0);
exports.guidingOptions = guidingOptions;
class PackageDetail {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PackageDetail.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PackageDetail.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], PackageDetail.prototype, "content", void 0);
exports.PackageDetail = PackageDetail;
class ExtraData {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ExtraData.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ExtraData.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], ExtraData.prototype, "required", void 0);
exports.ExtraData = ExtraData;
class AmountDetails {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AmountDetails.prototype, "priceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AmountDetails.prototype, "paxType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AmountDetails.prototype, "ageFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AmountDetails.prototype, "ageTo", void 0);
exports.AmountDetails = AmountDetails;
class Allotment {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Allotment.prototype, "allotmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'number' }] }),
    __metadata("design:type", Object)
], Allotment.prototype, "remaining", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'number' }] }),
    __metadata("design:type", Object)
], Allotment.prototype, "limit", void 0);
exports.Allotment = Allotment;
class RequiredTarget {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RequiredTarget.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RequiredTarget.prototype, "code", void 0);
exports.RequiredTarget = RequiredTarget;
class PaxAmount {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PaxAmount.prototype, "paxType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaxAmount.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ $ref: '#/components/schemas/RequiredTarget' }, { type: 'null' }] }),
    __metadata("design:type", RequiredTarget)
], PaxAmount.prototype, "requiredTarget", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaxAmount.prototype, "nettAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], PaxAmount.prototype, "minPurchaseQty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], PaxAmount.prototype, "maxPurchaseQty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PaxAmount.prototype, "remaining", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: AmountDetails }),
    __metadata("design:type", AmountDetails)
], PaxAmount.prototype, "amountDetails", void 0);
exports.PaxAmount = PaxAmount;
class ResourceData {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ResourceData.prototype, "rateKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [shared_type_1.CancellationPolicy] }),
    __metadata("design:type", Array)
], ResourceData.prototype, "cancellationPolicies", void 0);
exports.ResourceData = ResourceData;
class OperationDetail {
}
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'null' }] }),
    __metadata("design:type", String)
], OperationDetail.prototype, "showTimeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'null' }] }),
    __metadata("design:type", String)
], OperationDetail.prototype, "showTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Allotment }),
    __metadata("design:type", Allotment)
], OperationDetail.prototype, "allotment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], OperationDetail.prototype, "sellOnTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PaxAmount] }),
    __metadata("design:type", Array)
], OperationDetail.prototype, "paxAmounts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ResourceData] }),
    __metadata("design:type", ResourceData)
], OperationDetail.prototype, "resourceData", void 0);
exports.OperationDetail = OperationDetail;
class Nationality {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Nationality.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Nationality.prototype, "code", void 0);
exports.Nationality = Nationality;
class TargetMarket {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TargetMarket.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Nationality] }),
    __metadata("design:type", Array)
], TargetMarket.prototype, "nationalities", void 0);
exports.TargetMarket = TargetMarket;
class AmountFromPax {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AmountFromPax.prototype, "paxType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AmountFromPax.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AmountFromPax.prototype, "nettAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], AmountFromPax.prototype, "minPurchaseQty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], AmountFromPax.prototype, "maxPurchaseQty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AmountFromPax.prototype, "remaining", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: AmountDetails }),
    __metadata("design:type", AmountDetails)
], AmountFromPax.prototype, "amountDetails", void 0);
exports.AmountFromPax = AmountFromPax;
class OperationDate {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OperationDate.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OperationDate.prototype, "day", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [OperationDetail] }),
    __metadata("design:type", Array)
], OperationDate.prototype, "operationDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [TargetMarket] }),
    __metadata("design:type", Array)
], OperationDate.prototype, "targetMarkets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: AmountFromPax }),
    __metadata("design:type", AmountFromPax)
], OperationDate.prototype, "amountFrom", void 0);
exports.OperationDate = OperationDate;
class AmountFrom {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AmountFrom.prototype, "priceName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AmountFrom.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AmountFrom.prototype, "nettAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: AmountDetails }),
    __metadata("design:type", AmountDetails)
], AmountFrom.prototype, "amountDetails", void 0);
exports.AmountFrom = AmountFrom;
class Package {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Package.prototype, "packageId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Package.prototype, "packageName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [PackageDetail] }),
    __metadata("design:type", Array)
], Package.prototype, "packageDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ExtraData] }),
    __metadata("design:type", Array)
], Package.prototype, "extraDatas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [AmountFrom] }),
    __metadata("design:type", Array)
], Package.prototype, "amountsFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'null' }] }),
    __metadata("design:type", Number)
], Package.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], Package.prototype, "isFavorite", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'null' }] }),
    __metadata("design:type", String)
], Package.prototype, "redeemStart", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ oneOf: [{ type: 'string' }, { type: 'null' }] }),
    __metadata("design:type", String)
], Package.prototype, "redeemEnd", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [OperationDate] }),
    __metadata("design:type", Array)
], Package.prototype, "operationDates", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], Package.prototype, "ticketValidity", void 0);
exports.Package = Package;
class EndPoint {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], EndPoint.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], EndPoint.prototype, "description", void 0);
exports.EndPoint = EndPoint;
class Destination {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Destination.prototype, "name", void 0);
exports.Destination = Destination;
class Destination2 {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Destination2.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Destination2.prototype, "name", void 0);
exports.Destination2 = Destination2;
class Country2 {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Country2.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Country2.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Destination] }),
    __metadata("design:type", Array)
], Country2.prototype, "destinations", void 0);
exports.Country2 = Country2;
class MeetingPoint {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MeetingPoint.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: GeoLocation }),
    __metadata("design:type", GeoLocation)
], MeetingPoint.prototype, "geolocation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MeetingPoint.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Country2 }),
    __metadata("design:type", Country2)
], MeetingPoint.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MeetingPoint.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], MeetingPoint.prototype, "description", void 0);
exports.MeetingPoint = MeetingPoint;
class Description {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Description.prototype, "description", void 0);
exports.Description = Description;
class StartingPoint {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], StartingPoint.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: MeetingPoint }),
    __metadata("design:type", MeetingPoint)
], StartingPoint.prototype, "meetingPoint", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Description] }),
    __metadata("design:type", Array)
], StartingPoint.prototype, "pickupInstructions", void 0);
exports.StartingPoint = StartingPoint;
class Location {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: [EndPoint] }),
    __metadata("design:type", Array)
], Location.prototype, "endpoints", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [StartingPoint] }),
    __metadata("design:type", Array)
], Location.prototype, "startingPoints", void 0);
exports.Location = Location;
class Activity {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Activity.prototype, "activityId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Activity.prototype, "activityName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Activity.prototype, "activityType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Activity.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Activity.prototype, "destination", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Activity.prototype, "latitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Activity.prototype, "longitude", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Location }),
    __metadata("design:type", Location)
], Activity.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], Activity.prototype, "categories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Activity.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], Activity.prototype, "termsAndConditions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: shared_type_1.CancellationPolicyTitle }),
    __metadata("design:type", shared_type_1.CancellationPolicyTitle)
], Activity.prototype, "cancellationPolicy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ActivityDetail] }),
    __metadata("design:type", Array)
], Activity.prototype, "activityDetails", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Scheduling }),
    __metadata("design:type", Scheduling)
], Activity.prototype, "scheduling", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Route] }),
    __metadata("design:type", Array)
], Activity.prototype, "routes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: guidingOptions }),
    __metadata("design:type", guidingOptions)
], Activity.prototype, "guidingOptions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [shared_type_1.ImageStandardResponseDTO] }),
    __metadata("design:type", Array)
], Activity.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], Activity.prototype, "isOpenDated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], Activity.prototype, "isInstantConfirmation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], Activity.prototype, "isBestSeller", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Package] }),
    __metadata("design:type", Array)
], Activity.prototype, "packages", void 0);
exports.Activity = Activity;
class DetailStandardResponseDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], DetailStandardResponseDTO.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DetailStandardResponseDTO.prototype, "identifier", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Activity)
], DetailStandardResponseDTO.prototype, "data", void 0);
exports.DetailStandardResponseDTO = DetailStandardResponseDTO;
//# sourceMappingURL=detail.standard.response.dto.js.map