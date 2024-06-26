import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styled from "styled-components";
import {
  body1,
  body2,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
  narrow,
  sizing,
} from "src/guidelines/theme/index";

const meta: Meta = {};

export default meta;

type Story = StoryObj;

const Title1 = styled.h1`
  ${heading1};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;
const Title2 = styled.h2`
  ${heading2};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;
const Title3 = styled.h3`
  ${heading3};
  margin: ${sizing(24)} 0 ${sizing(16)};
`;
const Title4 = styled.h4`
  ${heading4};
  margin: ${sizing(16)} 0 ${sizing(12)};
`;
const Title5 = styled.h5`
  ${heading5};
  margin: ${sizing(12)} 0 ${sizing(8)};
`;
const Title6 = styled.h6`
  ${heading6};
  margin: ${sizing(12)} 0 ${sizing(8)};
`;
const Body1 = styled.p`
  ${body1};
  margin: ${sizing(16)} 0 ${sizing(16)};
`;
const Body2 = styled.p`
  ${body2};
  margin: ${sizing(16)} 0 ${sizing(16)};
`;
const Narrow = styled.p`
  ${narrow};
  margin: ${sizing(16)} 0 ${sizing(16)};
`;

export const Typographies: Story = {
  render: () => {
    return (
      <>
        <div>
          <Title1>Title 1 : Title1</Title1>
          <Title2>Title 2 : Title2</Title2>
          <Title3>Title 3 : Title3</Title3>
          <Title4>Title 4 : Title4</Title4>
          <Title5>Title 5 : Title5</Title5>
          <Title6>Title 6 : Title6</Title6>
          <Body2>
            Text big : Body2.
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla eu maximus urna, non auctor ante. Praesent ultrices felis non
            elit volutpat, vitae blandit dolor placerat. Ut venenatis sed justo
            eget pellentesque. Morbi non tortor in nisi lobortis tristique sit
            amet vel orci. <br />
            Etiam nec odio non dolor condimentum ullamcorper in eu enim. Cras
            ante dui, consequat et tempus ac, consectetur eget odio. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Nunc sed dolor neque. Vivamus ac quam vulputate,
            venenatis risus nec, viverra lacus.
          </Body2>
          <Body1>
            Text normal : Body1.
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla eu maximus urna, non auctor ante. Praesent ultrices felis non
            elit volutpat, vitae blandit dolor placerat. Ut venenatis sed justo
            eget pellentesque. <br />
            Morbi non tortor in nisi lobortis tristique sit amet vel orci. Etiam
            nec odio non dolor condimentum ullamcorper in eu enim. Cras ante
            dui, consequat et tempus ac, consectetur eget odio. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Nunc sed dolor neque. Vivamus ac quam vulputate,
            venenatis risus nec, viverra lacus.
          </Body1>
          <Narrow>
            Text narrow : Narrow.
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla eu maximus urna, non auctor ante. Praesent ultrices felis non
            elit volutpat, vitae blandit dolor placerat. Ut venenatis sed justo
            eget pellentesque. Morbi non tortor in nisi lobortis tristique sit
            amet vel orci. Etiam nec odio non dolor condimentum ullamcorper in
            eu enim. <br />
            Cras ante dui, consequat et tempus ac, consectetur eget odio. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Nunc sed dolor neque. Vivamus ac quam vulputate,
            venenatis risus nec, viverra lacus.
          </Narrow>
        </div>
      </>
    );
  },
};
