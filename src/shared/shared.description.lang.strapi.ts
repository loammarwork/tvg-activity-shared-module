// For translator map to this for make sure type safe for strapi config language
export enum TVGActivityDescription {
    HOW_TO_REDEEM = 'activity.description.how_to_redeem',
    DESCRIPTION = 'activity.description.description',
    HIGHLIGHTS = 'activity.description.highlights',
    OVERVIEW = 'activity.description.overview',
    ELIGIBILITY = 'activity.description.eligibility',
    USAGE_VALIDITY = 'activity.description.usage_validity',
    ADDITIONAL_INFO = 'activity.description.additional_info',
    QUESTIONS = 'activity.description.questions',
    ADDITIONAL_DETAILS = 'activity.description.additional_details',
    TICKET_TYPE = 'activity.description.ticket_type',
    TICKET_VALIDITY = 'activity.description.ticket_validity',
    EXCLUDES = 'activity.description.excludes',
    INCLUDES = 'activity.description.includes',
    IMPORTANT_INFO = 'activity.description.important_info',
    ADVANCED_TIPS = 'activity.description.advanced_tips',
    REDEEM_INFO = 'activity.description.redeem_info',
    DIRECT_ENTRANCE = 'activity.description.direct_entrance',
    GUIDING_OPTION = 'activity.description.guiding_option',
    FEATURE_GROUPS = 'activity.description.feature_groups',
}

export type TVGActivityDescriptionValue = `${TVGActivityDescription}`;
