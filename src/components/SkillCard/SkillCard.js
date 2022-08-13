import React from "react";
import StarOutlined from '@mui/icons-material/Star';

import noImage from '../../assets/images/noImage.png';
import { StyledBox, Title, StyledImageBox, StyledRating, StyledAvatar } from "./SkillCard.style";

export default function SkillCard(props) {
  const { name, score, img } = props;

  return (
    <StyledBox component="fieldset" mb={3} borderColor="transparent">
      <Title align="center" component="legend">{name}</Title>
      <StyledImageBox>
      <StyledRating value={score} size="medium" readOnly emptyIcon={<StarOutlined style={{ opacity: 0.5, color: "#FFFFFF" }} />} />
      <StyledAvatar
        variant="rounded"
        alt=" "
        src={img ? img : noImage}
      />
      </StyledImageBox>
    </StyledBox>
  );
}
