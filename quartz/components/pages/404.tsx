import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <div style="text-align: center;">
        <h1 style="font-size: 2rem;">404</h1>
        {/* <img src="/img/ops.gif" class="multiply" style="clip-path: inset(10% 5% 25% 5%); margin-top: -3rem; margin-bottom: -4rem;"></img> */}
        <div class="img-404"></div>
        <p>صفحه مورد نظر پیدا نشد!</p>
        <button class="button2" onclick="location.href='/';">
          بازگشت به صفحه اصلی 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em" fill="currentColor" style="vertical-align: middle;"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        </button>
        </div>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor

