import { useEffect } from "react";

export default function MainPageLayout({ children, title, description, keywords, author }) {
    // style 
    useEffect(() => {
        if (title) {
            const pageTitle = title;
            const errorMessage = description || "";
            document.title = pageTitle + " - Shamim Cadet Academy";
            document.querySelector('meta[name="description"]')?.setAttribute("content", errorMessage);
            document.querySelector('meta[property="og:description"]')?.setAttribute("content", errorMessage);
            document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", errorMessage);
            document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", pageTitle);
            document.querySelector('meta[property="og:title"]')?.setAttribute("content", pageTitle);
            document.querySelector('meta[name="keywords"]')?.setAttribute("content", keywords || "");
            document.querySelector('meta[name="author"]')?.setAttribute("content", author || "");
            document.querySelector('meta[property="og:author"]')?.setAttribute("content", author || "");
            document.querySelector('meta[name="twitter:author"]')?.setAttribute("content", author || "");
        }
    }, [title, description]);

    return(
        <main style={{width: "90%", maxWidth: "1068px", margin: " 0 auto", textAlign: "justify"}}>
            {children}
        </main>
    )

}