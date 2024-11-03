import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "احسان ثابت",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "fa-IR",
    baseUrl: "blog.itsabet.ir",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Vazirmatn",
        body: "Vazirmatn",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fbfbf7",      // Soft Cream
          lightgray: "#eae1d3",  // Light Beige
          gray: "#c3b299",       // Warm Taupe
          darkgray: "#7d6a5e",   // Earthy Brown
          dark: "#4b3d32",       // Deep Chocolate Brown
          secondary: "#a19a8a",  // Warm Gray
          tertiary: "#c9b59a",    // Sandy Beige
          highlight: "#f0eae3"   // Very Light Sand 
        },
        darkMode: {
          light: "#1c1c1c",      // Very Dark Gray (Background)
          lightgray: "#2a2a2a",  // Dark Charcoal (Section Background)
          gray: "#4e5452",       // Soft Medium Gray (Text)
          darkgray: "#7a7f7d",   // Muted Gray (Secondary Text)
          dark: "#c8d0d1",       // Light Gray (Headings)
          secondary: "#a8d5ba",  // Soft Sage Green (Links/Buttons)
          tertiary: "#b3e5f2",    // Light Sky Blue (Accents)
          highlight: "#e0f7fa",   // Very Light Cyan (Hover Effects)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", lazyLoad: "true" }),
      Plugin.Description(),      
      
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
