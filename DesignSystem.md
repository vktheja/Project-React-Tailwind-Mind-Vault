=================================================
MindVault – Design System
=================================================

This document describes the **final design system** that emerged during the
development of MindVault. While the project began with a rough visual direction,
the rules below reflect the **actual, consistent design language** used across
the application after iteration and refinement.

This system is now considered **locked** for MindVault v1.

=================================================
TYPOGRAPHY
=================================================

## Font Family

- Primary Font: Inter
- Tailwind Alias: font-sans
- Fallback: sans-serif

## Typography Hierarchy

- App Title : text-2xl font-bold
- Section Headings : text-lg font-medium
- Note Title : text-base font-semibold
- Note Content : text-sm
- Meta / Helper Text : text-xs

## Tracking Usage

- tracking-wider / tracking-widest used for:
  - labels
  - placeholders
  - UI chrome (search, sort, buttons)
- No letter spacing used in long-form content

=================================================
COLOR SYSTEM
=================================================

## Primary Colors

- Header Background : bg-blue-900
- Primary Actions (CTA) : bg-blue-500
- Primary Hover : hover:bg-blue-600
- Accent / Emphasis : text-blue-700

## Neutral Colors (Core UI)

- App Background : bg-gray-100
- Card Background : bg-white
- Borders / Dividers : border-gray-600/20, border-gray-200
- Primary Text : text-slate-600
- Secondary Text : text-slate-500
- Muted Text : text-slate-400

## State Colors

- Error State : red borders & placeholders
- Disabled State : gray background + muted text
- Edited Indicator : blue background with reduced opacity

## Color Rules

- No neon or saturated accent colors
- Blue is the only accent color
- Red is used strictly for destructive or error states
- Neutral tones dominate the interface

=================================================
LAYOUT & SPACING
=================================================

## Layout Constraints

- Max Content Width : max-w-3xl
- Horizontal Padding : mx-4 (mobile), centered on larger screens
- Responsive Breakpoint : mds (576px custom breakpoint)

## Spacing Rhythm

- Vertical spacing uses consistent Tailwind scale:
  - my-6, py-2, gap-2 / gap-4 / gap-6
- Cards follow a consistent padding and border structure
- No arbitrary spacing outside Tailwind scale

=================================================
COMPONENT STYLING
=================================================

## Cards

- Background : bg-white
- Border : border-gray-600/20
- Border Radius : rounded-md
- Shadow : shadow-lg shadow-black/10
- Hover : subtle scale + shadow increase

## Forms

- Inputs use neutral borders
- Error states shown via red border + placeholder
- Buttons reflect state:
  - Active : blue
  - Disabled : gray
- Form actions aligned to user intent (Clear / Cancel / Add / Update)

=================================================
INTERACTIONS & MOTION
=================================================

## Transitions

- Standard Transition : transition-all duration-200 ease-out
- Used for:
  - hover states
  - opacity changes
  - button feedback

## Hover Behavior

- Hover effects are subtle
- No aggressive animations
- Opacity changes preferred over color changes

## Scrolling

- Smooth scrolling used intentionally
- scroll-mt-20 applied to form container for spacing
- No JS-based scroll offset calculations

=================================================
ICONS
=================================================

## Icon System

- Icon Set : Lucide
- Rendering : SVG components
- Color : currentColor
- Fill : none
- Stroke : currentColor

## Icon Usage

- Default Icons : text-gray-500
- Emphasis Icons : text-blue-700
- Destructive Icons : text-red-500

=================================================
DESIGN PRINCIPLES
=================================================

- Calm, readable, professional UI
- Clarity over decoration
- Consistency over novelty
- Minimal visual noise
- Decisions stabilized after iteration
- Avoidance of unnecessary complexity

=================================================
PROJECT CONTEXT
=================================================

Project Name : MindVault
Stack : React + Tailwind CSS
Scope : Frontend-only notes application
Persistence : sessionStorage
Design Style : Clean, minimal, intentional

=================================================
END
=================================================
