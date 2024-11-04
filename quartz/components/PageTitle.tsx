import { pathToRoot, joinSegments } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const logoPath = joinSegments(baseDir, "static/icon.png")
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}><img src={logoPath} alt={title}/>
      &nbsp;{title}</a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
.page-title img{
  max-width:50px;
}
  .page-title a {
    display: flex;               
    align-items: center;         
}

.page-title img {
    margin-right: 10px;     
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
