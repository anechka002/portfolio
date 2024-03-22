import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { theme } from "../../../styles/Theme";
import { TabLink } from "../../../components/TabLink";

// Works

const Works = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }
  
  position: relative;
`

// Work

const Work = styled.div`
  background-color: ${theme.colors.secondaryBg};
  /* width: 330px;
  flex-grow: 1; */

  ${TabLink} {
    padding: 10px 0;

    & + ${TabLink} {
      margin-left: 20px;
    }
  }

  /* @media ${theme.media.desktop} {
    max-width: 540px;
  } */
`

const ImgWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    transition: ${theme.animations.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      backdrop-filter: blur(4px);
      background: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: ${theme.animations.transition};
    }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Description = styled.div`
  padding: 25px 20px;
`

const Title = styled.h3``

const Text = styled.p`
  margin: 14px 0 10px;
`

// Tab Menu

const Menu = styled.nav`

  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li``

export const S = {
  Works,
  Work,
  ImgWrapper,
  Image,
  Description,
  Title,
  Text,
  Menu,
  ListItem
}