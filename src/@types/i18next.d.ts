import { resources, defaultNS } from "../i18n/i18nconfig";

declare module "i18next" {
    interface TypeOptions {
        defaultNS: typeof defaultNS
        resources: typeof resources["TH"]
    }
}