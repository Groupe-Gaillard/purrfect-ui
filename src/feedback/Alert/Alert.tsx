import React, {ReactNode} from "react";
import styled, {css} from "styled-components";
import {getContrastYIQ, theme} from "src/guidelines/theme";

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
    padding: 16px;
    margin: 16px 0;

    ${({severity}) => alertSeverityStyle(severity)};
    ${({kind, severity}) => alertKindStyle(kind, severity)};

`

const AlertMessage = styled.div`
  flex-grow: 1;
`

const Alert = ({severity , kind, children}: AlertProps) => {
  return (
    <AlertWrapper severity={severity ?? 'info'} kind={kind ?? 'normal'}>
      <AlertMessage>
        {children}
      </AlertMessage>
    </AlertWrapper>
  )
}

export default Alert
export {alertSeverityValues, alertKindValues}
export type {AlertSeverity, AlertProps}
