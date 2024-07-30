import React, {ReactNode} from "react";
import styled, {css} from "styled-components";
import {getContrastYIQ, sizing, theme} from "src/guidelines/theme";
import SuccessIcon from "src/icons/Success";
import InfoIcon from "src/icons/Info";
import WarningIcon from "src/icons/Warning";
import DangerIcon from "src/icons/Danger";

const alertSeverityValues = ['success', 'info', 'warning', 'danger'] as const
type AlertSeverity = typeof alertSeverityValues[number]

const alertKindValues = ['normal', 'outlined'] as const
type AlertKind = typeof alertKindValues[number]

type AlertProps = {
  severity?: AlertSeverity,
  kind?: AlertKind,
  children: ReactNode,
}

const alertSeverityStyle = (severity: AlertSeverity) => {
  const themeColor = theme.color[severity]

  return css`
      background-color: ${themeColor};
      border: 2px solid ${themeColor};
      color: ${theme.color.text[getContrastYIQ(themeColor)]}
  `
}

const alertKindStyle = (kind: AlertKind, severity: AlertSeverity) => css`
    background-color: ${'outlined' === kind && theme.color.white};
    color: ${'outlined' === kind && theme.color[severity]};
`

const AlertWrapper = styled.div<{ severity: AlertSeverity, kind: AlertKind }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    margin: 16px 0;

    ${({severity}) => alertSeverityStyle(severity)};
    ${({kind, severity}) => alertKindStyle(kind, severity)};

`;

const AlertMessage = styled.div`
  flex-grow: 1;
`;

const IconWrapper = styled.div`
  height: ${sizing(25)};
  width: ${sizing(25)};
  margin-right: ${sizing(8)};
`;

const iconMap = {
  info: <InfoIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  danger: <DangerIcon />,
}

const Alert = ({severity , kind, children}: AlertProps) => {
  severity = severity ?? 'info'

  return (
    <AlertWrapper severity={severity} kind={kind ?? 'normal'}>
      <IconWrapper>
        {iconMap[severity]}
      </IconWrapper>
      <AlertMessage>
        {children}
      </AlertMessage>
    </AlertWrapper>
  )
}

export default Alert
export {alertSeverityValues, alertKindValues}
export type {AlertSeverity, AlertProps}