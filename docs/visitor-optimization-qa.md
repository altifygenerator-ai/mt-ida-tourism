# Mount Ida visitor optimization — 2026-10-05

Source: e148c29. Four existing pages get shorter, intent-led titles and descriptions: restaurants, crystal mining, Lake Ouachita and weekend planning. Existing homepage and lake shortcuts move directly below their heroes. Restaurant jump links use supported breakfast, pizza, Mexican and lake-dining listings. The crystal guide's existing closing links become a clear post-digging prompt. No duplicate planning sections or new SEO pages.

Responsive QA exposed an existing desktop-only header spilling off mobile and a clipped homepage hero. A small native-style mobile disclosure now exposes the existing links, supports keyboard activation/Escape and closes after a route is selected. The homepage hero sizes to its content on mobile; its desktop image, typography and layout are retained. Search sticks below the actual header height. All styling is scoped in CSS Modules.

Verification:
- Production build and `tsc --noEmit`: pass.
- Full lint: 33 existing findings (2 errors / 31 warnings), identical to untouched e148c29 after normalizing file locations. No new findings. Existing contact timing code and source image elements remain unchanged.
- 8 routes × 1440, 1280, 768, 360 and 390px = 40 production browser checks: HTTP 200, no overflow, missing jump targets or uncaught runtime errors.
- 34 discovered internal destinations return successfully. Mobile menu keyboard activation, Escape/focus return and route closing pass. New links expose visible focus and at least 44px targets; meal anchors clear sticky navigation.
- Home, restaurant listings, crystals, lake, weekend, cabins, events, footer, menu and River View Spotlight reviewed. Existing ads, tracking and booking controls are preserved.
- Local QA uses ignored preview-only environment values and empty event fixtures. Existing external River View/CDN images and local analytics requests can fail in this environment. Confirm populated events, remote assets and delivery in an environment-backed preview; no live submissions or database writes were made.

Maps and another planner are deferred. Keep Mount Ida clean and focused. Measure subsequent matched 28-day Search Console CTR with position/device context; no uplift is claimed before release data exists.
