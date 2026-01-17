export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-lightbg dark:bg-darkbg">
      <div className="text-center">
        <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-SkyBlue border-r-transparent"></div>
        <p className="text-lightSecondarytext dark:text-darkPrimaryGray">
          Loading...
        </p>
      </div>
    </div>
  );
}
