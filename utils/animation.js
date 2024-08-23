import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const animatePageIn = () => {
    const bannerOne = document.getElementById("bannerOne")

    if(bannerOne){
        const tl = gsap.timeline()

        tl.set([bannerOne], {
            yPercent: 0,
        }).to([bannerOne], {
            yPercent: 100,
        })
    }
}

export const animatePageOut = (href, AppRouterInstance) => {
    const bannerOne = document.getElementById("bannerOne")

    if(bannerOne){
        const tl = gsap.timeline()

        tl.set([bannerOne], {
            yPercent: -100,
        }).to([bannerOne], {
            yPercent: 0,
            onComplete: () => {
                AppRouterInstance.push(href)
            }
        })
    }
}