import React from "react";
import Fade from "react-reveal/Fade";
import Link from "next/link";

import Image from "../../../common/components/Image";
import Heading from "../../../common/components/Heading";
import Text from "../../../common/components/Text";
import SectionWrapper, {
  Container,
  ImageWrapper,
  TextWrapper,
} from "./aboutUs.style";

import { aboutData } from "../../../common/data/partners";

const AboutUs = () => {
  const {
    thumbUrl,
    title,
    title1,
    title2,
    title3,
    text1,
    text2,
    text3,
  } = aboutData;
  const setTitle = (t) => ({ __html: t });

  return (
    <SectionWrapper id="aboutUs">
      <Container>
        <ImageWrapper>
          <Fade left>
            <Image
              style={{ width: "90%", borderRadius: "16%" }}
              src={thumbUrl}
              alt="Interior Landing by RedQ"
            />
          </Fade>
        </ImageWrapper>
        <TextWrapper>
          <Fade right>
            <Heading dangerouslySetInnerHTML={setTitle(title)} />
            <Heading as="h4" content={title1} />
            <Text content={text1} />
            <Heading as="h4" content={title2} />
            <Text content={text2} />
            <Heading as="h4" content={title3} />
            <Text content={text3} />
            <Link href="/partners-contact-form">
              <a className="learn__more-btn">
                <span className="btn_text">ΣΤΕΙΛΤΕ ΜΑΣ ΜΥΝΗΜΑ</span>
                <span className="next_arrow" />
              </a>
            </Link>
          </Fade>
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AboutUs;
