import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "src/guidelines/theme";
import ChevronDown from "src/icons/ChevronDown";
import ChevronUp from "src/icons/ChevronUp";
import { GenerateIdWithPrefix, sizing } from "src/utils/utils";

const AccordionContainer = styled.div`
  border: 1px solid ${theme.color.gray100};
  border-radius: ${theme.borderRadius.default};
  margin-bottom: ${sizing(16)};
`;

const AccordionHeader = styled.button`
  padding: ${sizing(16)};
  cursor: pointer;
  background-color: ${theme.color.gray100};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: none;
  text-align: left;
  &:hover {
    background-color: ${theme.color.gray200};
  }
`;

const AccordionContent = styled.div<{ isOpen: boolean; isVisible: boolean }>`
  padding-right: ${({ isOpen }) => (isOpen ? sizing(16) : "0")};
  padding-left: ${sizing(16)};
  max-height: ${({ isOpen }) => (isOpen ? sizing(500) : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  overflow: hidden;
  transition:
    max-height 0.3s ease-in-out,
    opacity 0.3s ease-in-out,
    padding 0.3s ease-in-out;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const Accordion = ({ title, children, className }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const accordionHeaderId = GenerateIdWithPrefix("accordion-header");
  const accordionContentId = GenerateIdWithPrefix("accordion-content");

  return (
    <AccordionContainer>
      <AccordionHeader
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={accordionContentId}
        id={accordionHeaderId}
        className={className}
      >
        {title}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </AccordionHeader>
      <AccordionContent
        isOpen={isOpen}
        isVisible={isVisible}
        id={accordionContentId}
        aria-labelledby={accordionHeaderId}
        className={className}
      >
        {children}
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
export type { AccordionProps };
