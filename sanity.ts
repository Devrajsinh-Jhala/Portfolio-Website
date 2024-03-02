import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";


export const config: any = {
    dataset: "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "v2022-03-07",
    useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

const builder = createImageUrlBuilder(sanityClient);
const urlFor = (source: any) => {
    return builder.image(source);
};

export default urlFor;