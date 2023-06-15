import { CancellationPolicy, CancellationPolicyTitle, CancellationType, ImageStandardResponseDTO } from '../../shared/shared.type';
export declare class CancellationPolicyDTO {
    type: CancellationType;
    notes: string[];
}
export declare class ActivityDetail {
    title: string;
    key: string;
    content: string[];
}
export declare class Opened {
    from: string | null;
    to: string | null;
    openingTime: string;
    closeTime: string;
    weekDays: string[];
    lastAdmissionTime: string | null;
}
export declare class Closed {
    weekDays: string[];
}
export declare class Scheduling {
    duration: number | null;
    opened: Opened[] | null;
    closed: Closed[] | null;
}
export declare class GeoLocation {
    latitude: number;
    longitude: number;
}
export declare class Country {
    code: string;
}
export declare class PointOfInterest {
    type: string;
    geolocation: GeoLocation;
    address: string;
    country: Country;
    city: string;
    zip: string;
    description: string;
}
export declare class Point {
    type: string;
    order: number;
    stop: boolean;
    pointOfInterest: PointOfInterest;
}
export declare class Route {
    duration: number | null;
    description: string;
    timeFrom: string;
    timeTo: string;
    points: Point[];
}
export declare class guidingOptions {
    guideType: string;
    included: boolean;
    groupType?: string;
    tip?: string;
    maxGroupSize?: number;
}
export declare class PackageDetail {
    title: string;
    key: string;
    content: string[];
}
export declare class ExtraData {
    code: string;
    text: string;
    required: boolean;
}
export declare class AmountDetails {
    priceId: string;
    paxType: string;
    ageFrom: number;
    ageTo: number;
}
export declare class Allotment {
    allotmentId?: string;
    remaining: string | number;
    limit: string | number;
}
export declare class RequiredTarget {
    name: string;
    code: string;
}
export declare class PaxAmount {
    paxType: string;
    amount: number;
    requiredTarget: RequiredTarget | null;
    nettAmount: number;
    minPurchaseQty?: any;
    maxPurchaseQty?: any;
    remaining?: string;
    amountDetails: AmountDetails;
}
export declare class ResourceData {
    rateKey: string;
    cancellationPolicies: CancellationPolicy[];
}
export declare class OperationDetail {
    showTimeId?: string | null;
    showTime: string | null;
    allotment: Allotment;
    sellOnTime: any;
    paxAmounts: PaxAmount[];
    resourceData: ResourceData;
}
export declare class Nationality {
    name: string;
    code: string;
}
export declare class TargetMarket {
    code: string;
    nationalities: Nationality[];
}
export declare class AmountFromPax {
    paxType: string;
    amount: number;
    nettAmount: number;
    minPurchaseQty: any;
    maxPurchaseQty: any;
    remaining: string;
    amountDetails: AmountDetails;
}
export declare class OperationDate {
    date: string;
    day: string;
    operationDetails: OperationDetail[];
    targetMarkets: TargetMarket[];
    amountFrom: AmountFromPax;
}
export declare class AmountFrom {
    priceName: string;
    amount: number;
    nettAmount: number;
    amountDetails: AmountDetails;
}
export declare class Package {
    packageId: string;
    packageName: string;
    packageDetails: PackageDetail[];
    extraDatas: ExtraData[];
    amountsFrom: AmountFrom[];
    duration: number | null;
    isFavorite: boolean;
    redeemStart: string | null;
    redeemEnd: string | null;
    operationDates: OperationDate[];
    ticketValidity: any;
}
export declare class EndPoint {
    type: string;
    description: string;
}
export declare class Destination {
    name: string;
}
export declare class Destination2 {
    code: string;
    name: string;
}
export declare class Country2 {
    code: string;
    name: string;
    destinations: Destination[];
}
export declare class MeetingPoint {
    type: string;
    geolocation: GeoLocation;
    address: string;
    country: Country2;
    city: string;
    description: string;
}
export declare class Description {
    description: string;
}
export declare class StartingPoint {
    type: string;
    meetingPoint: MeetingPoint;
    pickupInstructions?: Description[];
}
export declare class Location {
    endpoints: EndPoint[];
    startingPoints: StartingPoint[];
}
export declare class Activity {
    activityId: string;
    activityName: string;
    activityType: string;
    country: string;
    destination: string;
    latitude: string;
    longitude: string;
    location: Location;
    categories: string[];
    currency: string;
    termsAndConditions: string[];
    cancellationPolicy: CancellationPolicyTitle;
    activityDetails: ActivityDetail[];
    scheduling: Scheduling;
    routes: Route[];
    guidingOptions: guidingOptions;
    images: ImageStandardResponseDTO[];
    isOpenDated: boolean;
    isInstantConfirmation: boolean;
    isBestSeller: boolean;
    packages: Package[];
}
export declare class DetailStandardResponseDTO {
    success: boolean;
    identifier: string;
    data: Activity;
}
