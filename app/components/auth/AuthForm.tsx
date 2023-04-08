"use client";

/**
 * @description
 */
const AuthForm = () => {
  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
          {/* Content */}
          <div className="">
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outine-none">
              {/* Header */}
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <div className="text-lg font-semibold"></div>
              </div>

              {/* Body */}
              <div className="relative p-6 flex-auto"></div>

              {/* Footer */}
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center gap-4 w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
