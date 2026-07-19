# Database Design

## Main entities

- User, Account, Session, Profile
- Role, Permission, UserRole
- Badge, UserBadge, Follow
- Character, CharacterVersion, CharacterStat
- Specialization, CharacterSpecialization
- Item, ItemVersion, ItemStat
- Relic, RelicVersion, RelicStat
- Buff, Debuff, Tag
- Patch, PatchChange
- Composition, CompositionVersion
- CompositionSlot, CompositionUnit
- CompositionUnitItem, CompositionItemOption
- CompositionUnitRelic, CompositionReplacement
- Favorite, Vote, Comment, Report
- Notification
- CollectionCharacter, CollectionItem, CollectionRelic
- ViewEvent, ShareEvent
- MediaAsset, ImportJob, AuditLog

## Versioning

Permanent identity tables:

- Character
- Item
- Relic
- Composition

Patch-specific or historical tables:

- CharacterVersion
- ItemVersion
- RelicVersion
- CompositionVersion

A composition version must reference the item and character versions valid for its patch whenever historical accuracy is required.

## Source metadata

Game-data entities support:

- internalKey
- externalId
- sourceType
- sourceUrl
- verificationStatus
- lastVerifiedAt
- lastSynchronizedAt

## Enumerations

SourceType:

- MANUAL_GAME_CAPTURE
- OFFICIAL_WEBSITE
- OFFICIAL_API
- STEAM_ANNOUNCEMENT
- COMMUNITY_SOURCE
- DEVELOPER_PROVIDED
- UNKNOWN

VerificationStatus:

- UNVERIFIED
- COMMUNITY_VERIFIED
- EDITOR_VERIFIED
- OFFICIAL

ImageStatus:

- PLACEHOLDER
- TEMPORARY
- PERMISSION_PENDING
- APPROVED
- OFFICIAL_API
