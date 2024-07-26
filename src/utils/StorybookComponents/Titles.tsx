import styled from "styled-components";
import { heading1, heading2 } from "src/guidelines/theme/typographies";
import { sizing } from "src/utils/utils";

const Title = styled.h1`
  ${heading1};
  margin: ${sizing(24, 0, 16)};
`;

const Title2 = styled.h2`
  ${heading2};
  margin: ${sizing(24, 0, 16)};
`;

export { Title, Title2 };
