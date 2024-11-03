import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
  ],
  footer: Component.Footer({
    links: {
      اینستاگرام: "https://instagram.com/ehsansabet/"      
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta({showReadingTime: false, showComma: false,}),
    Component.MobileOnly(Component.TableOfContents()),
    
  ],
  left: [  
    Component.DesktopOnly(Component.Darkmode()),
    Component.Graph({localGraph: {}, globalGraph: {}}),
    Component.Backlinks(),  
 
  ],
  right: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Darkmode()),
    Component.Search(),    
    Component.DesktopOnly(Component.TableOfContents()),    
  ],
}


 
// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs({rootName: "خانه",}), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.DesktopOnly(Component.Darkmode()),
    Component.Graph({localGraph: {}, globalGraph: {}}),
    Component.Backlinks(),  
  ],
  right: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Darkmode()),
    Component.Search(),
  ],
}
