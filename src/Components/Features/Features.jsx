import React from "react";
import FeatureCard from "./card/Featurecard";

const FeaturesData = [
  {
    imgLink: "https://altar.io/wp-content/uploads/2023/12/fave-cover.png",
    category: "SOCIAL MEDIA",
    name: "Fave",
    description:
      "Fave is a fandom-centric community with highly engaging content where fans can create deeper and lasting connections. The vision to nurture and grow the community is centered on rewarding positive and meaningful engagement with points that can be redeemed for discounts and exclusive experiences.",
    caseStudyLink: "SEE CASE STUDY",
    onRight: true,
  },
  {
    imgLink: "https://altar.io/wp-content/uploads/2023/09/Group-2448.png.webp",
    category: "FINTECH",
    name: "Apiax",
    description:
      "Apiax is a Swiss Company that operates in the Regulation Technology market and serves major Banks an API to seamlessly adapt to the always changing financial regulations.",
    caseStudyLink: "SEE CASE STUDY",
    onRight: false,
  },
  {
    imgLink:
      "https://altar.io/wp-content/uploads/2023/12/General-Snapshot-1536x729.png.webp",
    category: "FINTECH",
    name: "Synch",
    description:
      "Synch is a single, curated ecosystem for bond professionals to source and analyse bonds with relevant, reliable and up-to-date data.",
    caseStudyLink: "SEE CASE STUDY",
    onRight: true,
  },
];

export default function Feature() {
  return (
    <section className="FeatureSection  px-5 lg:px-20 xl:px-40">
      {FeaturesData.map((feature, index) => (
        <FeatureCard
          key={index}
          onRight={feature.onRight}
          imgSrc={feature.imgLink}
          type={feature.category}
          name={feature.name}
          description={feature.description}
          caseStudyLink={feature.caseStudyLink}
        />
      ))}
    </section>
  );
}
