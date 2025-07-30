import Navbar from "@/app/COMMON/Navbar";
import pageData from "../pageData";
import Footer from "@/app/COMMON/Footer";

export default function ArticleDetail({ params }) {
  const { slug } = params;
  // Find the article by slug
  const article = pageData.find(
    (item) =>
      item.head
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-") === slug
  );

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
  <>
  <Navbar/>
    <section className="article-detail">
      <h1>{article.title}</h1>
      <div className="article-date">{article.date}</div>
      <img src={article.image} alt={article.alt} width={600} height={350} />
      <div className="article-content">
        {/* Render paragraphs */}
        {article.content?.paragraphs &&
          article.content.paragraphs.map((p, i) => <p key={"p" + i}>{p}</p>)}
        {/* Render subHeading */}
        {article.content?.subHeading && <h2>{article.content.subHeading}</h2>}
        {/* Render subParagraph */}
        {article.content?.subParagraph && <p>{article.content.subParagraph}</p>}
        {/* Render smallHeading */}
        {article.content?.smallHeading && (
          <h3>{article.content.smallHeading}</h3>
        )}
        {/* Render bulletPoints */}
        {article.content?.bulletPoints && (
          <ul>
            {article.content.bulletPoints.map((bp, i) => (
              <li key={"bp" + i}>{bp}</li>
            ))}
          </ul>
        )}
        {/* Render smallHeading1 and bulletPoints1 */}
        {article.content?.smallHeading1 && (
          <h3>{article.content.smallHeading1}</h3>
        )}
        {article.content?.bulletPoints1 && (
          <ul>
            {article.content.bulletPoints1.map((bp, i) => (
              <li key={"bp1" + i}>{bp}</li>
            ))}
          </ul>
        )}
        {/* Render smallHeading2 and bulletPoints2 */}
        {article.content?.smallHeading2 && (
          <h3>{article.content.smallHeading2}</h3>
        )}
        {article.content?.bulletPoints2 && (
          <ul>
            {article.content.bulletPoints2.map((bp, i) => (
              <li key={"bp2" + i}>{bp}</li>
            ))}
          </ul>
        )}
        {/* Render paragraph1 */}
        {article.content?.paragraph1 && <p>{article.content.paragraph1}</p>}
        {/* Render image1 if present */}
        {article.content?.image1 && (
          <img
            src={article.content.image1}
            alt="article extra"
            style={{ maxWidth: "100%", marginTop: 16 }}
          />
        )}
      </div>
    </section>
    <Footer/>
  </>
  );
}
