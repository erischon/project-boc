"use client";

import { useCallback } from "react";

import Button from "../Button";

interface FormProps {
  title?: string;
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
      <div className="flex justify-center items-center outline-none focus:outline-none w-full">
        <form className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-2 h-full md:h-auto lg:h-auto ">
          {/* == Form Content == */}
          <div className="">
            <div className="relative flex flex-col h-full md:h-auto lg:h-auto border-0 rounded-lg w-full bg-white outline-none focus:outine-none shadow-lg">
              {/* == Header == */}
              <div className="relative flex justify-center items-center p-6 border-b-[1px] rounded-t">
                <div className="text-lg font-semibold">{title}</div>
              </div>

              {/* == Body == */}
              <div className="relative p-6 flex-auto">{body}</div>

              {/* == Footer == */}
              <div className="flex flex-col gap-2 p-6">
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
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
