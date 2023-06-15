import { ApiProperty } from '@nestjs/swagger';
import { CancellationPolicy, CancellationPolicyTitle, CancellationType, ImageStandardResponseDTO } from '../../shared/shared.type';

export class CancellationPolicyDTO {
    @ApiProperty({ enum: CancellationType })
    type: CancellationType;
    @ApiProperty({ type: [String] })
    notes: string[];
}

export class ActivityDetail {
    @ApiProperty()
    title: string;
    @ApiProperty()
    key: string;
    @ApiProperty({ type: [String] })
    content: string[];
}

export class Opened {
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'null' }] })
    from: string | null;
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'null' }] })
    to: string | null;
    @ApiProperty({ type: String })
    openingTime: string;
    @ApiProperty({ type: String })
    closeTime: string;
    @ApiProperty({ type: [String] })
    weekDays: string[];
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'null' }] })
    lastAdmissionTime: string | null;
}

export class Closed {
    @ApiProperty({ type: [String] })
    weekDays: string[];
}

export class Scheduling {
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'null' }] })
    duration: number | null;
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'null' }] })
    opened: Opened[] | null;
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'null' }] })
    closed: Closed[] | null;
}

export class GeoLocation {
    @ApiProperty()
    latitude: number;
    @ApiProperty()
    longitude: number;
}

export class Country {
    @ApiProperty()
    code: string;
}

export class PointOfInterest {
    @ApiProperty()
    type: string;
    @ApiProperty({ type: GeoLocation })
    geolocation: GeoLocation;
    @ApiProperty()
    address: string;
    @ApiProperty({ type: Country })
    country: Country;
    @ApiProperty()
    city: string;
    @ApiProperty()
    zip: string;
    @ApiProperty()
    description: string;
}

export class Point {
    @ApiProperty()
    type: string;
    @ApiProperty()
    order: number;
    @ApiProperty()
    stop: boolean;
    @ApiProperty({ type: PointOfInterest })
    pointOfInterest: PointOfInterest;
}

export class Route {
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'null' }] })
    duration: number | null;
    @ApiProperty()
    description: string;
    @ApiProperty()
    timeFrom: string;
    @ApiProperty()
    timeTo: string;
    @ApiProperty({ type: [Point] })
    points: Point[];
}

export class guidingOptions {
    @ApiProperty()
    guideType: string;
    @ApiProperty()
    included: boolean;
    @ApiProperty()
    groupType?: string;
    @ApiProperty()
    tip?: string;
    @ApiProperty()
    maxGroupSize?: number;
}

export class PackageDetail {
    @ApiProperty()
    title: string;
    @ApiProperty()
    key: string;
    @ApiProperty({ type: [String] })
    content: string[];
}

export class ExtraData {
    @ApiProperty()
    code: string;
    @ApiProperty()
    text: string;
    @ApiProperty()
    required: boolean;
}

export class AmountDetails {
    @ApiProperty()
    priceId: string;
    @ApiProperty()
    paxType: string;
    @ApiProperty()
    ageFrom: number;
    @ApiProperty()
    ageTo: number;
}

export class Allotment {
    @ApiProperty()
    allotmentId?: string;
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'number' }] })
    remaining: string | number;
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'number' }] })
    limit: string | number;
}

export class RequiredTarget {
    @ApiProperty()
    name: string;
    @ApiProperty()
    code: string;
}

export class PaxAmount {
    @ApiProperty()
    paxType: string;
    @ApiProperty()
    amount: number;
    @ApiProperty({ oneOf: [{ $ref: '#/components/schemas/RequiredTarget' }, { type: 'null' }] })
    requiredTarget: RequiredTarget | null;
    @ApiProperty()
    nettAmount: number;
    @ApiProperty()
    minPurchaseQty?: any;
    @ApiProperty()
    maxPurchaseQty?: any;
    @ApiProperty()
    remaining?: string;
    @ApiProperty({ type: AmountDetails })
    amountDetails: AmountDetails;
}

export class ResourceData {
    @ApiProperty()
    rateKey: string;
    @ApiProperty({ type: [CancellationPolicy] })
    cancellationPolicies: CancellationPolicy[];
}

export class OperationDetail {
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'null' }] })
    showTimeId?: string | null;
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'null' }] })
    showTime: string | null;
    @ApiProperty({ type: Allotment })
    allotment: Allotment;
    @ApiProperty()
    sellOnTime: any;
    @ApiProperty({ type: [PaxAmount] })
    paxAmounts: PaxAmount[];
    @ApiProperty({ type: [ResourceData] })
    resourceData: ResourceData;
}

export class Nationality {
    @ApiProperty()
    name: string;
    @ApiProperty()
    code: string;
}

export class TargetMarket {
    @ApiProperty()
    code: string;
    @ApiProperty({ type: [Nationality] })
    nationalities: Nationality[];
}

export class AmountFromPax {
    @ApiProperty()
    paxType: string;
    @ApiProperty()
    amount: number;
    @ApiProperty()
    nettAmount: number;
    @ApiProperty()
    minPurchaseQty: any;
    @ApiProperty()
    maxPurchaseQty: any;
    @ApiProperty()
    remaining: string;
    @ApiProperty({ type: AmountDetails })
    amountDetails: AmountDetails;
}

export class OperationDate {
    @ApiProperty()
    date: string;
    @ApiProperty()
    day: string;
    @ApiProperty({ type: [OperationDetail] })
    operationDetails: OperationDetail[];
    @ApiProperty({ type: [TargetMarket] })
    targetMarkets: TargetMarket[];
    @ApiProperty({ type: AmountFromPax })
    amountFrom: AmountFromPax;
}

export class AmountFrom {
    @ApiProperty()
    priceName: string;
    @ApiProperty()
    amount: number;
    @ApiProperty()
    nettAmount: number;
    @ApiProperty({ type: AmountDetails })
    amountDetails: AmountDetails;
}

export class Package {
    @ApiProperty()
    packageId: string;
    @ApiProperty()
    packageName: string;
    @ApiProperty({ type: [PackageDetail] })
    packageDetails: PackageDetail[];
    @ApiProperty({ type: [ExtraData] })
    extraDatas: ExtraData[];
    @ApiProperty({ type: [AmountFrom] })
    amountsFrom: AmountFrom[];
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'null' }] })
    duration: number | null;
    @ApiProperty()
    isFavorite: boolean;
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'null' }] })
    redeemStart: string | null;
    @ApiProperty({ oneOf: [{ type: 'string' }, { type: 'null' }] })
    redeemEnd: string | null;
    @ApiProperty({ type: [OperationDate] })
    operationDates: OperationDate[];
    @ApiProperty()
    ticketValidity: any;
}

export class EndPoint {
    @ApiProperty()
    type: string;
    @ApiProperty()
    description: string;
}

export class Destination {
    @ApiProperty()
    name: string;
}
export class Destination2 {
    @ApiProperty()
    code: string;
    @ApiProperty()
    name: string;
}

export class Country2 {
    @ApiProperty()
    code: string;
    @ApiProperty()
    name: string;
    @ApiProperty({ type: [Destination] })
    destinations: Destination[];
}

export class MeetingPoint {
    @ApiProperty()
    type: string;
    @ApiProperty({ type: GeoLocation })
    geolocation: GeoLocation;
    @ApiProperty()
    address: string;
    @ApiProperty({ type: Country2 })
    country: Country2;
    @ApiProperty()
    city: string;
    @ApiProperty()
    description: string;
}

export class Description {
    @ApiProperty()
    description: string;
}

export class StartingPoint {
    @ApiProperty()
    type: string;
    @ApiProperty({ type: MeetingPoint })
    meetingPoint: MeetingPoint;
    @ApiProperty({ type: [Description] })
    pickupInstructions?: Description[];
}

export class Location {
    @ApiProperty({ type: [EndPoint] })
    endpoints: EndPoint[];
    @ApiProperty({ type: [StartingPoint] })
    startingPoints: StartingPoint[];
}

export class Activity {
    @ApiProperty()
    activityId: string;
    @ApiProperty()
    activityName: string;
    @ApiProperty()
    activityType: string;
    @ApiProperty()
    country: string;
    @ApiProperty()
    destination: string;
    @ApiProperty()
    latitude: string;
    @ApiProperty()
    longitude: string;
    @ApiProperty({ type: Location })
    location: Location;
    @ApiProperty({ type: [String] })
    categories: string[];
    @ApiProperty()
    currency: string;
    @ApiProperty({ type: [String] })
    termsAndConditions: string[];
    @ApiProperty({ type: CancellationPolicyTitle })
    cancellationPolicy: CancellationPolicyTitle;
    @ApiProperty({ type: [ActivityDetail] })
    activityDetails: ActivityDetail[];
    @ApiProperty({ type: Scheduling })
    scheduling: Scheduling;
    @ApiProperty({ type: [Route] })
    routes: Route[];
    @ApiProperty({ type: guidingOptions })
    guidingOptions: guidingOptions;
    @ApiProperty({ type: [ImageStandardResponseDTO] })
    images: ImageStandardResponseDTO[];
    @ApiProperty()
    isOpenDated: boolean;
    @ApiProperty()
    isInstantConfirmation: boolean;
    @ApiProperty()
    isBestSeller: boolean;
    @ApiProperty({ type: [Package] })
    packages: Package[];
}

export class DetailStandardResponseDTO {
    @ApiProperty()
    success: boolean;

    @ApiProperty()
    identifier: string;

    @ApiProperty()
    data: Activity;
}
