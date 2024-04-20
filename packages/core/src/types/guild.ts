// https://discord.com/developers/docs/resources/guild#guild-resource
import type { OAuth2Scopes } from "@aurajs/oauth2";
import type { RoleStructure } from "@aurajs/permissions";
import type { Locales } from "../reference/locales";
import type { EmojiStructure } from "./emoji";
import type { Integer, Snowflake } from "./global";
import type { UserStructure } from "./user";
import type { VoiceRegionStructure } from "./voice";

// https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
export type GuildStructure = {
	afk_channel_id: Snowflake | null;
	afk_timeout: Integer;
	application_id: Snowflake | null;
	approximate_member_count?: Integer;
	approximate_presence_count?: Integer;
	banner: string | null;
	default_message_notifications: DefaultMessageNotificationLevel;
	description: string | null;
	discovery_splash: string | null;
	emojis: EmojiStructure[];
	explicit_content_filter: ExplicitContentFilterLevel;
	splash: string | null;
	verification_level: VerificationLevel;
	widget_channel_id?: Snowflake | null;
	widget_enabled?: boolean;
	name: string;
	max_presences?: Integer | null;
	roles: RoleStructure[];
	permissions?: string;
	features: GuildFeatures[];
	mfa_level: MFALevel;
	nsfw_level: GuildNSFWLevel;
	owner?: boolean;
	icon: string | null;
	rules_channel_id: Snowflake | null;
	preferred_locale: Locales;
	max_members?: Integer;
	vanity_url_code: string | null;
	system_channel_id: Snowflake | null;
	id: Snowflake;
	premium_tier: PremiumTier;
	premium_subscription_count?: Integer;
	region?: VoiceRegionStructure["id"];
	public_updates_channel_id: Snowflake | null;
	max_video_channel_users?: Integer;
	max_stage_video_channel_users?: Integer;
	system_channel_flags: SystemChannelFlags;
	icon_hash?: string | null;
	welcome_screen?: WelcomeScreenStructure;
	owner_id: Snowflake;
	stickers?: object[];
	// TODO: Sticker Object
	premium_progress_bar_enabled?: boolean;
	safety_alerts_channel_id: Snowflake | null;
};

// https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
export enum DefaultMessageNotificationLevel {
	ALL_MESSAGES = 0,
	ONLY_MENTIONS = 1,
}

// https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
export enum ExplicitContentFilterLevel {
	DISABLED = 0,
	MEMBERS_WITHOUT_ROLES = 1,
	ALL_MEMBERS = 2,
}

// https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
export enum MFALevel {
	NONE = 0,
	ELEVATED = 1,
}

// https://discord.com/developers/docs/resources/guild#guild-object-verification-level
export enum VerificationLevel {
	NONE = 0,
	LOW = 1,
	MEDIUM = 2,
	HIGH = 3,
	VERY_HIGH = 4,
}

// https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
export enum GuildNSFWLevel {
	DEFAULT = 0,
	EXPLICIT = 1,
	SAFE = 2,
	AGE_RESTRICTED = 3,
}

// https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
export enum PremiumTier {
	NONE = 0,
	TIER_1 = 1,
	TIER_2 = 2,
	TIER_3 = 3,
}

// https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
export enum SystemChannelFlags {
	SUPPRESS_JOIN_NOTIFICATIONS = 1,
	SUPPRESS_PREMIUM_SUBSCRIPTIONS = 2,
	SUPPRESS_GUILD_REMINDER_NOTIFICATIONS = 4,
	SUPPRESS_JOIN_NOTIFICATION_REPLIES = 8,
	SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS = 16,
	SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES = 32,
}

// https://discord.com/developers/docs/resources/guild#guild-object-guild-features
export enum GuildFeatures {
	ANIMATED_BANNER = "AnimatedBanner",
	ANIMATED_ICON = "AnimatedIcon",
	APPLICATION_COMMAND_PERMISSIONS_V2 = "ApplicationCommandPermissionsV2",
	AUTO_MODERATION = "AutoModeration",
	BANNER = "Banner",
	COMMUNITY = "Community",
	CREATOR_MONETIZABLE_PROVISIONAL = "CreatorMonetizableProvisional",
	CREATOR_STORE_PAGE = "CreatorStorePage",
	DEVELOPER_SUPPORT_SERVER = "DeveloperSupportServer",
	DISCOVERABLE = "Discoverable",
	FEATURABLE = "Featurable",
	INVITES_DISABLED = "InvitesDisabled",
	INVITE_SPLASH = "InviteSplash",
	MEMBER_VERIFICATION_GATE_ENABLED = "MemberVerificationGateEnabled",
	MORE_STICKERS = "MoreStickers",
	NEWS = "News",
	PARTNERED = "Partnered",
	PREVIEW_ENABLED = "PreviewEnabled",
	RAID_ALERTS_DISABLED = "RaidAlertsDisabled",
	ROLE_ICONS = "RoleIcons",
	ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE = "RoleSubscriptionsAvailableForPurchase",
	ROLE_SUBSCRIPTIONS_ENABLED = "RoleSubscriptionsEnabled",
	TICKETED_EVENTS_ENABLED = "TicketedEventsEnabled",
	VANITY_URL = "VanityUrl",
	VERIFIED = "Verified",
	VIP_REGIONS = "VipRegions",
	WELCOME_SCREEN_ENABLED = "WelcomeScreenEnabled",
}

// https://discord.com/developers/docs/resources/guild#guild-object-mutable-guild-features
export enum MutableGuildFeatures {
	COMMUNITY = "Administrator",
	DISCOVERABLE = "Administrator",
	INVITES_DISABLED = "Manage Guild",
	RAID_ALERTS_DISABLED = "Manage Guild",
} // TODO: A voir car c'est pas clair

// https://discord.com/developers/docs/resources/guild#guild-preview-object-guild-preview-structure
export type GuildPreviewStructure = {
	approximate_member_count: Integer;
	approximate_presence_count: Integer;
	description: string | null;
	discovery_splash: string | null;
	emojis: EmojiStructure[];
	features: GuildFeatures[];
	icon: string | null;
	id: Snowflake;
	name: string;
	splash: string | null;
	stickers: object[];
	// TODO: Sticker Object
};

// https://discord.com/developers/docs/resources/guild#guild-widget-settings-object-guild-widget-settings-structure
export type GuildWidgetSettingsStructure = {
	channel_id: Snowflake | null;
	enabled: boolean;
};

// https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure
export type GuildWidgetStructure = {
	channels: object[];
	id: Snowflake;
	instant_invite: string | null;
	// TODO: Channel Object
	members: UserStructure[];
	name: string;
	presence_count: Integer;
};

// https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure
export type GuildMemberStructure = {
	avatar?: string | null;
	communication_disabled_until?: string | null;
	deaf: boolean;
	flags: GuildMemberFlags;
	joined_at: string;
	mute: boolean;
	nick?: string | null;
	pending?: boolean;
	permissions?: string;
	premium_since?: string | null;
	roles: Snowflake[];
	user?: UserStructure;
};

// https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-flags
export enum GuildMemberFlags {
	DID_REJOIN = 1,
	COMPLETED_ONBOARDING = 2,
	BYPASSES_VERIFICATION = 4,
	STARTED_ONBOARDING = 8,
}

// https://discord.com/developers/docs/resources/guild#integration-object-integration-structure
export type IntegrationStructure = {
	account: IntegrationAccountStructure;
	application?: IntegrationApplicationStructure;
	enable_emoticons?: boolean;
	enabled: boolean;
	expire_behavior?: IntegrationExpireBehaviors;
	expire_grace_period?: Integer;
	id: Snowflake;
	name: string;
	revoked?: boolean;
	role_id?: Snowflake;
	scopes?: OAuth2Scopes[];
	subscriber_count?: Integer;
	synced_at?: string;
	syncing?: boolean;
	type: string;
	user?: UserStructure;
};

// https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors
export enum IntegrationExpireBehaviors {
	RemoveRole = 0,
	Kick = 1,
}

// https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure
export type IntegrationAccountStructure = {
	id: Snowflake;
	name: string;
};

// https://discord.com/developers/docs/resources/guild#integration-application-object-integration-application-structure
export type IntegrationApplicationStructure = {
	bot?: UserStructure;
	description: string;
	icon: string | null;
	id: Snowflake;
	name: string;
};

// https://discord.com/developers/docs/resources/guild#ban-object-ban-structure
export type BanStructure = {
	reason: string | null;
	user: UserStructure;
};

// https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure
export type WelcomeScreenStructure = {
	description: string | null;
	welcome_channels: WelcomeScreenChannelStructure[];
};

// https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure
export type WelcomeScreenChannelStructure = {
	channel_id: Snowflake;
	description: string;
	emoji_id: Snowflake | null;
	emoji_name: string | null;
};

// https://discord.com/developers/docs/resources/guild#guild-onboarding-object-guild-onboarding-structure
export type GuildOnboardingStructure = {
	default_channel_id: Snowflake[];
	enabled: boolean;
	guild_id: Snowflake;
	mode: OnboardingMode;
	prompts: OnboardingPromptStructure[];
};

// https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-prompt-structure
export type OnboardingPromptStructure = {
	id: Snowflake;
	in_onboarding: boolean;
	options: PromptOptionStructure[];
	required: boolean;
	single_select: boolean;
	title: string;
	type: PromptTypes;
};

// https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-option-structure
export type PromptOptionStructure = {
	channel_ids: Snowflake[];
	description: string;
	emoji?: object;
	emoji_animated?: boolean;
	// TODO: Emoji Object
	emoji_id?: Snowflake;
	emoji_name?: string;
	id: Snowflake;
	role_ids: Snowflake[];
	title: string;
};

// https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-mode
export enum OnboardingMode {
	OnboardingDefault = 0,
	OnboardingAdvanced = 1,
}

// https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-types
export enum PromptTypes {
	MultipleChoice = 0,
	Dropdown = 1,
}
