
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AppFooter': typeof import("../components/AppFooter.vue")['default']
    'AppNavbar': typeof import("../components/AppNavbar.vue")['default']
    'SectionsAboutNew': typeof import("../components/sections/About-new.vue")['default']
    'SectionsAbout': typeof import("../components/sections/About.vue")['default']
    'SectionsContactNew': typeof import("../components/sections/Contact-new.vue")['default']
    'SectionsContact': typeof import("../components/sections/Contact.vue")['default']
    'SectionsContactCTA': typeof import("../components/sections/ContactCTA.vue")['default']
    'SectionsFooterNew': typeof import("../components/sections/Footer-new.vue")['default']
    'SectionsFooter': typeof import("../components/sections/Footer.vue")['default']
    'SectionsHeroNew': typeof import("../components/sections/Hero-new.vue")['default']
    'SectionsHero': typeof import("../components/sections/Hero.vue")['default']
    'SectionsMissionVision': typeof import("../components/sections/MissionVision.vue")['default']
    'SectionsProjects': typeof import("../components/sections/Projects.vue")['default']
    'SectionsServices': typeof import("../components/sections/Services.vue")['default']
    'SectionsSkills': typeof import("../components/sections/Skills.vue")['default']
    'UiButtonFixed': typeof import("../components/ui/Button-fixed.vue")['default']
    'UiButtonSimple': typeof import("../components/ui/Button-simple.vue")['default']
    'UiButton': typeof import("../components/ui/Button.vue")['default']
    'UiCardFixed': typeof import("../components/ui/Card-fixed.vue")['default']
    'UiCard': typeof import("../components/ui/Card.vue")['default']
    'UiNavbarFixed': typeof import("../components/ui/Navbar-fixed.vue")['default']
    'UiNavbarNew': typeof import("../components/ui/Navbar-new.vue")['default']
    'UiNavbarSimple': typeof import("../components/ui/Navbar-simple.vue")['default']
    'UiNavbar': typeof import("../components/ui/Navbar.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyAppFooter': LazyComponent<typeof import("../components/AppFooter.vue")['default']>
    'LazyAppNavbar': LazyComponent<typeof import("../components/AppNavbar.vue")['default']>
    'LazySectionsAboutNew': LazyComponent<typeof import("../components/sections/About-new.vue")['default']>
    'LazySectionsAbout': LazyComponent<typeof import("../components/sections/About.vue")['default']>
    'LazySectionsContactNew': LazyComponent<typeof import("../components/sections/Contact-new.vue")['default']>
    'LazySectionsContact': LazyComponent<typeof import("../components/sections/Contact.vue")['default']>
    'LazySectionsContactCTA': LazyComponent<typeof import("../components/sections/ContactCTA.vue")['default']>
    'LazySectionsFooterNew': LazyComponent<typeof import("../components/sections/Footer-new.vue")['default']>
    'LazySectionsFooter': LazyComponent<typeof import("../components/sections/Footer.vue")['default']>
    'LazySectionsHeroNew': LazyComponent<typeof import("../components/sections/Hero-new.vue")['default']>
    'LazySectionsHero': LazyComponent<typeof import("../components/sections/Hero.vue")['default']>
    'LazySectionsMissionVision': LazyComponent<typeof import("../components/sections/MissionVision.vue")['default']>
    'LazySectionsProjects': LazyComponent<typeof import("../components/sections/Projects.vue")['default']>
    'LazySectionsServices': LazyComponent<typeof import("../components/sections/Services.vue")['default']>
    'LazySectionsSkills': LazyComponent<typeof import("../components/sections/Skills.vue")['default']>
    'LazyUiButtonFixed': LazyComponent<typeof import("../components/ui/Button-fixed.vue")['default']>
    'LazyUiButtonSimple': LazyComponent<typeof import("../components/ui/Button-simple.vue")['default']>
    'LazyUiButton': LazyComponent<typeof import("../components/ui/Button.vue")['default']>
    'LazyUiCardFixed': LazyComponent<typeof import("../components/ui/Card-fixed.vue")['default']>
    'LazyUiCard': LazyComponent<typeof import("../components/ui/Card.vue")['default']>
    'LazyUiNavbarFixed': LazyComponent<typeof import("../components/ui/Navbar-fixed.vue")['default']>
    'LazyUiNavbarNew': LazyComponent<typeof import("../components/ui/Navbar-new.vue")['default']>
    'LazyUiNavbarSimple': LazyComponent<typeof import("../components/ui/Navbar-simple.vue")['default']>
    'LazyUiNavbar': LazyComponent<typeof import("../components/ui/Navbar.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AppFooter: typeof import("../components/AppFooter.vue")['default']
export const AppNavbar: typeof import("../components/AppNavbar.vue")['default']
export const SectionsAboutNew: typeof import("../components/sections/About-new.vue")['default']
export const SectionsAbout: typeof import("../components/sections/About.vue")['default']
export const SectionsContactNew: typeof import("../components/sections/Contact-new.vue")['default']
export const SectionsContact: typeof import("../components/sections/Contact.vue")['default']
export const SectionsContactCTA: typeof import("../components/sections/ContactCTA.vue")['default']
export const SectionsFooterNew: typeof import("../components/sections/Footer-new.vue")['default']
export const SectionsFooter: typeof import("../components/sections/Footer.vue")['default']
export const SectionsHeroNew: typeof import("../components/sections/Hero-new.vue")['default']
export const SectionsHero: typeof import("../components/sections/Hero.vue")['default']
export const SectionsMissionVision: typeof import("../components/sections/MissionVision.vue")['default']
export const SectionsProjects: typeof import("../components/sections/Projects.vue")['default']
export const SectionsServices: typeof import("../components/sections/Services.vue")['default']
export const SectionsSkills: typeof import("../components/sections/Skills.vue")['default']
export const UiButtonFixed: typeof import("../components/ui/Button-fixed.vue")['default']
export const UiButtonSimple: typeof import("../components/ui/Button-simple.vue")['default']
export const UiButton: typeof import("../components/ui/Button.vue")['default']
export const UiCardFixed: typeof import("../components/ui/Card-fixed.vue")['default']
export const UiCard: typeof import("../components/ui/Card.vue")['default']
export const UiNavbarFixed: typeof import("../components/ui/Navbar-fixed.vue")['default']
export const UiNavbarNew: typeof import("../components/ui/Navbar-new.vue")['default']
export const UiNavbarSimple: typeof import("../components/ui/Navbar-simple.vue")['default']
export const UiNavbar: typeof import("../components/ui/Navbar.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyAppFooter: LazyComponent<typeof import("../components/AppFooter.vue")['default']>
export const LazyAppNavbar: LazyComponent<typeof import("../components/AppNavbar.vue")['default']>
export const LazySectionsAboutNew: LazyComponent<typeof import("../components/sections/About-new.vue")['default']>
export const LazySectionsAbout: LazyComponent<typeof import("../components/sections/About.vue")['default']>
export const LazySectionsContactNew: LazyComponent<typeof import("../components/sections/Contact-new.vue")['default']>
export const LazySectionsContact: LazyComponent<typeof import("../components/sections/Contact.vue")['default']>
export const LazySectionsContactCTA: LazyComponent<typeof import("../components/sections/ContactCTA.vue")['default']>
export const LazySectionsFooterNew: LazyComponent<typeof import("../components/sections/Footer-new.vue")['default']>
export const LazySectionsFooter: LazyComponent<typeof import("../components/sections/Footer.vue")['default']>
export const LazySectionsHeroNew: LazyComponent<typeof import("../components/sections/Hero-new.vue")['default']>
export const LazySectionsHero: LazyComponent<typeof import("../components/sections/Hero.vue")['default']>
export const LazySectionsMissionVision: LazyComponent<typeof import("../components/sections/MissionVision.vue")['default']>
export const LazySectionsProjects: LazyComponent<typeof import("../components/sections/Projects.vue")['default']>
export const LazySectionsServices: LazyComponent<typeof import("../components/sections/Services.vue")['default']>
export const LazySectionsSkills: LazyComponent<typeof import("../components/sections/Skills.vue")['default']>
export const LazyUiButtonFixed: LazyComponent<typeof import("../components/ui/Button-fixed.vue")['default']>
export const LazyUiButtonSimple: LazyComponent<typeof import("../components/ui/Button-simple.vue")['default']>
export const LazyUiButton: LazyComponent<typeof import("../components/ui/Button.vue")['default']>
export const LazyUiCardFixed: LazyComponent<typeof import("../components/ui/Card-fixed.vue")['default']>
export const LazyUiCard: LazyComponent<typeof import("../components/ui/Card.vue")['default']>
export const LazyUiNavbarFixed: LazyComponent<typeof import("../components/ui/Navbar-fixed.vue")['default']>
export const LazyUiNavbarNew: LazyComponent<typeof import("../components/ui/Navbar-new.vue")['default']>
export const LazyUiNavbarSimple: LazyComponent<typeof import("../components/ui/Navbar-simple.vue")['default']>
export const LazyUiNavbar: LazyComponent<typeof import("../components/ui/Navbar.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
