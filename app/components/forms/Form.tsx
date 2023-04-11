"use client";

import { useCallback } from "react";

import Button from "../Button";

interface FormProps {
  title?: React.ReactElement;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  onSubmit: () => void;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

/**
 * @description Form component.
 */
const Form: React.FC<FormProps> = ({
  title,
  body,
  footer,
  actionLabel,
  onSubmit,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  // Handle the submit action.
  const handleSubmit = useCallback(() => {
    // If the form is disabled, we don't want to submit it.
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  // Handle the secondary action.
  const handleSecondaryAction = useCallback(() => {
    // If the form is disabled or there is no secondary action, we don't want to do secondary action.
    if (disabled || !secondaryAction) return;

    secondaryAction();
  }, [disabled, secondaryAction]);

  return (
    <>
      {/* == Form Content == */}

      <form className="relative flex flex-col w-full outline-none focus:outine-none">
        {/* == Header == */}
        <div className="flex justify-center items-center p-6">
          <div className="">{title}</div>
        </div>

        {/* == Body == */}
        <div className="relative px-6 flex-auto">{body}</div>

        {/* == Footer == */}
        <div className="flex flex-col gap-2 px-6 py-6">
          <div className="flex flex-row items-center gap-4 w-full">
            {secondaryAction && secondaryActionLabel ? (
              <Button
                outline
                disabled={disabled}
                label={secondaryActionLabel}
                onClick={handleSecondaryAction}
              />
            ) : null}

            <Button
              disabled={disabled}
              label={actionLabel}
              onClick={handleSubmit}
            />
          </div>

          {footer}
        </div>
      </form>
    </>
  );
};

export default Form;
