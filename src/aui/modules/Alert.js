import React, { useState } from "react";
import { css } from "@emotion/core";
import { Button, Card, CardBody, Heading, FadeIn } from "../elements";

/**
   The name of the user (not the nicename)
  */
const Alert = ({
  theme = "default",
  children = "",
  title,
  message,
  dismissable
}) => {
  const [state, setState] = useState({ visible: true });

  const handleVisibility = () => {
    setState({ visible: !state.visible });
  };

  return (
    <FadeIn show={state.visible}>
      <Card
        css={tokens => css`
          background: ${tokens.alert.themes[theme].background};
          color: ${tokens.alert.themes[theme].color};
          border-radius: ${tokens.alert.themes[theme].borderRadius};
          position: relative;
          display: flex;
          align-items: flex-start;
          flex-direction: row-reverse;
        `}
      >
        {dismissable && (
          <div
            css={css`
              margin: 0.66rem;
            `}
          >
            <Button onClick={handleVisibility} theme="link" size="sm">
              <span
                css={tokens => css`
                  font-size: 1.6rem;
                  color: ${tokens.alert.themes[theme].color};
                `}
              >
                ⨉
              </span>
            </Button>
          </div>
        )}
        <CardBody
          css={css`
            flex-grow: 1;
          `}
        >
          {/* If no title or message, render children */}
          {(!title || !message) && children}
          {/* If has title or message, render that, not children */}
          {(title || message) && (
            <>
              {title && (
                <Heading
                  level={6}
                  visualLevel={6}
                  css={css`
                    margin: 0 !important;
                  `}
                >
                  {title}
                </Heading>
              )}
              {message && (
                <p
                  css={css`
                    margin: 0;
                  `}
                >
                  {message}
                </p>
              )}
            </>
          )}
        </CardBody>
      </Card>
    </FadeIn>
  );
};

export default Alert;
