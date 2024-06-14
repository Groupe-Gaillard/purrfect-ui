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
} from "./index.ts";

const meta: Meta = {};

export default meta;

type Story = StoryObj;

const Title1 = styled.h1`
  ${heading1};
`;
const Title2 = styled.h2`
  ${heading2};
`;
const Title3 = styled.h3`
  ${heading3};
`;
const Title4 = styled.h4`
  ${heading4};
`;
const Title5 = styled.h5`
  ${heading5};
`;
const Title6 = styled.h6`
  ${heading6};
`;
const Body1 = styled.p`
  ${body1};
`;
const Body2 = styled.p`
  ${body2};
`;
const Narrow = styled.p`
  ${narrow};
`;

export const Typographies: Story = {
  render: () => {
    return (
      <>
        <div>
          <Title1>Titre 1 : Title1</Title1>
          <Title2>Titre 2 : Title2</Title2>
          <Title3>Titre 3 : Title3</Title3>
          <Title4>Titre 4 : Title4</Title4>
          <Title5>Titre 5 : Title5</Title5>
          <Title6>Titre 6 : Title6</Title6>
          <Body2>
            Text gros : Body2.
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
            Text étroit : Narrow.
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
