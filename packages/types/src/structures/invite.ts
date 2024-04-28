/**
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-resource}
 */

import type { Integer, ISO8601Timestamp, Snowflake } from "../globals";
import type { ApplicationStructure } from "./application";
import type { ChannelStructure } from "./channel";
import type { GuildMemberStructure, GuildScheduledEventStructure, GuildStructure } from "./guild";
import type { UserStructure } from "./user";

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-object-invite-structure}
 */
export type InviteStructure = {
	approximate_member_count?: Integer;
	approximate_presence_count?: Integer;
	channel: ChannelStructure | null;
	code: string;
	expires_at?: ISO8601Timestamp | null;
	guild?: GuildStructure;
	guild_scheduled_event?: GuildScheduledEventStructure;
	inviter?: Pick<UserStructure, "avatar" | "discriminator" | "id" | "public_flags" | "username">;
	stage_instance?: InviteStageInstanceStructure;
	target_application?: ApplicationStructure;
	target_type?: InviteTargetTypes;
	target_user?: Pick<UserStructure, "avatar" | "discriminator" | "id" | "public_flags" | "username">;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types}
 */
export enum InviteTargetTypes {
	Stream = 1,
	EmbeddedApplication = 2,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-metadata-object-invite-metadata-structure}
 */
export type InviteMetadataStructure = {
	created_at: ISO8601Timestamp;
	max_age: Integer;
	max_uses: Integer;
	temporary: boolean;
	uses: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-stage-instance-object-invite-stage-instance-structure}
 */
export type InviteStageInstanceStructure = {
	members: GuildMemberStructure;
	participant_count: Integer;
	speaker_count: Integer;
	topic: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#get-invite-query-string-params}
 */
export type QueryGetInvite = {
	guild_scheduled_event_id?: Snowflake;
	with_counts?: boolean;
	with_expiration?: boolean;
};