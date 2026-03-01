import MainPageLayout from "../../components/Layout/MainPageLayout";

const NotFound = () => {
  console.warn("404 Not Found: The page you are looking for does not exist.");
  const errorMessage = "404 Not Found: The page you are looking for does not exist.";
  const pageTitle = "Page Not Found";
  return (
    <MainPageLayout title={pageTitle} description={errorMessage}>    
      <h2>
        404 Not Found: The page you are looking for does not exist.
      </h2>
      <p>If you believe this is an error, please contact the site administrator.</p>
    </MainPageLayout>
  );
};

export default NotFound;