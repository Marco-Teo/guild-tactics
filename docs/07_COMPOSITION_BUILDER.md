# Composition Builder

## Goal

Provide a board-building experience inspired by TFT Academy while remaining optimized for GuildRun and mobile devices.

## Board

Initial configurable layout: 3×3.

Each unit can contain:

- character;
- specialization;
- role;
- priority;
- core or optional state;
- placement explanation;
- items;
- relics;
- alternatives;
- notes.

## Desktop interaction

- Drag character to slot.
- Drag unit between slots.
- Drag item onto a unit.
- Drag item between units.
- Remove or replace through contextual controls.
- Undo, redo and reset.

## Mobile interaction

Never require drag and drop:

1. tap a character;
2. tap a slot;
3. character is placed.

Alternative:

1. tap a slot;
2. choose character in a bottom sheet.

For items:

1. tap a unit;
2. open item picker;
3. choose item and slot.

## Item slots

Default to three configurable item slots per character.

Each slot supports:

- primary item;
- alternatives;
- priority;
- core/recommended/optional state;
- explanation for use in this composition.

## Item details

Desktop: accessible hover/focus tooltip.
Mobile: bottom sheet.

Show:

- image;
- name;
- rarity;
- category;
- structured stats;
- effect;
- patch;
- verification status;
- composition-specific note.

## Builder actions

- Save draft
- Preview
- Publish
- Duplicate
- Export JSON
- Import JSON
- Archive
- Share

## Completeness

Track:

- title;
- patch;
- board;
- units;
- specializations;
- itemization;
- how it works;
- why it works;
- strengths;
- weaknesses;
- substitutions;
- patch notes.

Incomplete builds remain drafts.
